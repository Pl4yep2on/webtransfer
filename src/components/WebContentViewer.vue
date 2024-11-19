<template>
    <div class="flex flex-col h-full w-full border">
        <div class="flex h-12 items-center border-b border-gray-300">
            <div class="w-5/6 px-4 py-2 text-gray-500 font-semibold border-r border-gray-300">Nom</div>
            <div class="w-1/6 px-4 py-2 text-gray-500 font-semibold">Taille</div>
        </div>
        <div class="overflow-y-auto">
            <div v-for="(file, index) in sortedFiles" :key="file.fullPath" class="flex flex-col">
                <div
                    class="flex items-center pl-4 cursor-pointer"
                    @click="toggleFolder(file)"
                    v-if="file.isDirectory"
                >
                    <div class="w-5/6 flex items-center px-4 py-2 truncate">
                        <span class="mr-2">{{ folderMap[file.fullPath] ? '-' : '+' }}</span>
                        {{ file.fullPath }}
                    </div>
                    <div class="w-1/6 px-4 py-2">-</div>
                </div>
                <div
                    class="flex items-center pl-4"
                    v-else
                >
                    <div class="w-5/6 flex items-center px-4 py-2 truncate">
                        {{ file.fullPath }}
                    </div>
                    <div class="w-1/6 px-4 py-2">
                        {{ formatFileSize(file.size) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import JSZip from 'jszip';

export default {
    name: 'WebContentViewer',
    data() {
        return {
            zipContent: [],
            folderMap: {}, // Map to track folder open/close state
        };
    },
    props: {
        zipUrl: {
            type: String,
            required: true,
        },
    },
    computed: {
        sortedFiles() {
            const flattenAndSort = (files, parentPath = '') => {
                const flatList = [];
                files.forEach(file => {
                    const fullPath = parentPath ? `${parentPath}/${file.name}` : file.name;

                    // Toujours ajouter le dossier parent
                    flatList.push({
                        ...file,
                        fullPath,
                        parentPath,
                    });

                    // Ajouter les enfants uniquement si le dossier est ouvert
                    if (file.isDirectory && this.folderMap[fullPath] && file.children) {
                        flatList.push(...flattenAndSort(file.children, fullPath));
                    }
                });

                return flatList.sort((a, b) => a.fullPath.localeCompare(b.fullPath));
            };


            return flattenAndSort(this.zipContent);
        },
    },
    async mounted() {
        await this.loadZipContent();
    },
    methods: {
        async loadZipContent() {
            try {
                const response = await fetch(this.zipUrl);
                const zipData = await response.blob();
                const zip = await JSZip.loadAsync(zipData);

                const files = [];
                zip.forEach((relativePath, file) => {
                    const pathParts = relativePath.split('/').filter(Boolean);

                    let currentLevel = files;
                    for (let i = 0; i < pathParts.length; i++) {
                        const partName = pathParts[i];
                        const isDirectory = i < pathParts.length - 1 || file.dir;
                        let existing = currentLevel.find(f => f.name === partName && f.isDirectory === isDirectory);

                        if (!existing) {
                            existing = {
                                name: partName,
                                isDirectory,
                                size: isDirectory ? 0 : file._data.uncompressedSize,
                                children: isDirectory ? [] : null,
                            };
                            currentLevel.push(existing);
                        }

                        if (isDirectory) {
                            currentLevel = existing.children;
                        }
                    }
                });

                this.zipContent = files;

                // Initialize folderMap
                const initializeFolderMap = (files, parentPath = '') => {
                    files.forEach(file => {
                        const fullPath = parentPath ? `${parentPath}/${file.name}` : file.name;
                        this.$set(this.folderMap, fullPath, true);
                        if (file.isDirectory && file.children) {
                            initializeFolderMap(file.children, fullPath);
                        }
                    });
                };

                initializeFolderMap(this.zipContent);
            } catch (error) {
                console.error('Erreur lors du chargement du contenu du ZIP :', error);
            }
        },
        formatFileSize(size) {
            if (size < 1024) return `${size} B`;
            if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
            if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)} MB`;
            return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
        },
        toggleFolder(file) {
            if (!file.isDirectory) return;
            const currentState = this.folderMap[file.fullPath];
            this.$set(this.folderMap, file.fullPath, !currentState);
        },
    },
};
</script>

<style scoped>
/* Ajoutez ici des styles si nécessaire */
</style>
