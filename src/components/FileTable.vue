<template>

    <div class="flex flex-col h-full w-full border">
        <!-- Breadcrumb -->
        <div class="flex flex-row mt-1 ml-3 items-start container">
            <NcBreadcrumbs class="max-h-8">
                <NcBreadcrumb name="Home" title="Title of the Home folder" @click="handleClickBreadcrumb(-1)">
                </NcBreadcrumb>
                <NcBreadcrumb v-if="getBreadcrumbParts().length > 0" v-for="(part, index) in breadcrumbParts" :key="index"
                    :name="part" @click="handleClickBreadcrumb(index)">
                </NcBreadcrumb>
                <template #actions>
                    <div class="flex items-center ml-2">
                        <button 
                            @click="toggleAddFilePopup" 
                            class="flex items-center space-x-2 bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-200 transition"
                        >
                            <Plus :size="20" />
                            <span>Nouveau</span>
                        </button>
                    </div>
                </template>
            </NcBreadcrumbs>
        </div>


        <!-- Popup pour la création de fichier -->
        <div v-if="isAddFilePopupVisible" class="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
            <div class="bg-NcBlack rounded-lg shadow-lg p-6 w-96">
                <h2 class="text-lg font-semibold mb-4">Créer un nouveau fichier</h2>
                <input 
                    v-model="newFileName" 
                    type="text" 
                    placeholder="Nom du fichier" 
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div class="flex justify-end mt-4 space-x-2">
                    <button 
                        @click="toggleAddFilePopup" 
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                    >
                        Annuler
                    </button>
                    <button 
                        @click="createNewFile" 
                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        Créer
                    </button>
                </div>
            </div>
        </div>

        <!-- En-tête -->
        <div class="flex h-12 items-center border-b border-gray-300">
            <div class="w-4/6 px-4 py-2 text-gray-500 font-semibold border-r border-gray-300">Nom</div>
            <div class="w-1/6 px-4 py-2 text-gray-500 font-semibold border-r border-gray-300">Type</div>
            <div class="w-1/6 px-4 py-2 text-gray-500 font-semibold">Taille</div>
        </div>

        <!-- Contenu -->
        <div class="overflow-y-auto" @dragover.prevent @dragenter.prevent @dragleave.prevent @drop.prevent="onDrop">
            <div v-for="file in files" :key="file.filename"
                class="flex h-16 items-center hover:bg-NcGray rounded-lg border-b last:border-b-0 border-gray-300"
                @click="handleClickElem(file)">

                <!-- Nom -->
                <div class="w-4/6 flex items-center px-4 py-2 border-r border-gray-300 cursor-pointer">
                    <div class="w-12 h-12 flex items-center justify-center cursor-pointer">
                        <template v-if="file.type === 'directory'">
                            <svg fill="currentColor" viewBox="0 0 24 24" class="text-NcBlue w-10 h-10 ">
                                <path
                                    d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z">
                                </path>
                            </svg>
                        </template>
                        <template v-else>
                            <div class="flex items-center justify-center cursor-pointer">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                                    class="w-10 h-10"
                                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
                                    <path
                                        d="M6 22c-.55 0-1.021-.196-1.412-.587A1.927 1.927 0 0 1 4 20V4c0-.55.196-1.021.588-1.413A1.926 1.926 0 0 1 6 2h8l6 6v12a1.93 1.93 0 0 1-.587 1.413A1.93 1.93 0 0 1 18 22H6Z"
                                        style="fill:#969696;fill-rule:nonzero" transform="matrix(.7 0 0 .7 -.43 -.388)" />
                                </svg>
                            </div>
                        </template>
                    </div>
                    <div class="ml-4 cursor-pointer max-sm:max-w-32 truncate">{{ file.basename }}</div>
                </div>

                <!-- Type -->
                <div class="w-1/6 px-4 py-2 border-r border-gray-300 cursor-pointer">
                    {{ file.type === 'directory' ? 'Dossier' : 'Fichier' }}
                </div>

                <!-- Taille -->
                <div class="w-1/6 px-4 py-2 cursor-pointer">
                    {{ file.type === 'directory' ? '-' : formatFileSize(file.size) }}
                </div>
            </div>
        </div>

    </div>
</template>



<script>
import { getClient, getRootPath } from '@nextcloud/files/dav';
import NcBreadcrumbs from '@nextcloud/vue/dist/Components/NcBreadcrumbs.js';
import NcBreadcrumb from '@nextcloud/vue/dist/Components/NcBreadcrumb.js';
import Plus from 'vue-material-design-icons/Plus.vue'

export default {
    name: 'FileTable',
    components: {
        NcBreadcrumbs,
        NcBreadcrumb,
        Plus
    },
    props: {
        file: {
        type: Object,
        default: null,
        },
    },
    data() {
        return {
            files: [], // Liste des fichiers et dossiers récupérés
            root_path: getRootPath(),
            current_dir: '/',
            breadcrumbParts: [],
            isAddFilePopupVisible: false,
            newFileName: '',
        };
    },
    async mounted() {
        await this.fetchFiles();
        this.breadcrumbParts = this.getBreadcrumbParts();
    },
    methods: {
        async fetchFiles() {
            try {
                const client = getClient();
                const directoryItems = await client.getDirectoryContents(this.root_path + this.current_dir); // Remplacez "admin" par le nom de l'utilisateur courant

                this.files = directoryItems.map(file => ({
                    basename: file.basename,
                    size: file.size,
                    href: client.getFileDownloadLink(file.filename),
                    type: file.type
                }));
            } catch (error) {
                console.error('Erreur lors de la récupération des fichiers et dossiers :', error);
            }
        },
        formatFileSize(size) {
            if (size < 1024) return `${size} B`;
            if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
            if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)} MB`;
            return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
        },
        generateCrumbHref(index) {
            const parts = this.breadcrumbParts.slice(0, index + 1);
            return '/' + parts.join('/');
        },
        getBreadcrumbParts() {
            // Si le current_dir est un simple '/', on le renvoie sous forme de tableau vide.
            if (this.current_dir === '/') return [];
            return this.current_dir.split('/').filter(part => part);
        },
        async handleClickElem(file) {
            if (file.type === 'directory') {
                this.current_dir = this.current_dir === '/' ? '/' + file.basename : this.current_dir + '/' + file.basename;
                this.breadcrumbParts = this.getBreadcrumbParts()
                await this.fetchFiles();
            } else {
                window.open(file.href, '_blank');
            }
        },
        async handleClickBreadcrumb(index) {
            let dir = '/';
            if (index >= -1) {
                dir = this.generateCrumbHref(index);
            }
            this.current_dir = dir;
            this.breadcrumbParts = this.getBreadcrumbParts();
            await this.fetchFiles();
        },
        async createNewFile() {
            if (!this.newFileName) return;
            try {
                const client = getClient();
                const filePath = `${this.root_path}${this.current_dir}/${this.newFileName}`;
                await client.createDirectory(filePath, '');
                this.newFileName = '';
                this.isAddFilePopupVisible = false;
                await this.fetchFiles();
            } catch (error) {
                console.error('Erreur lors de la création du fichier :', error);
            }
        },
        toggleAddFilePopup() {
            this.isAddFilePopupVisible = !this.isAddFilePopupVisible;
            if (!this.isAddFilePopupVisible) this.newFileName = '';
        },
        async onDrop(event) {
            event.preventDefault();
            try {
                const file = this.file;
                console.log('Fichier déposé :', file);
                file.content = await file.content.arrayBuffer();
                await this.moveFileToTarget(file);
            } catch (error) {
                console.error('Erreur lors du drag and drop :', error);
            }
        },
        async moveFileToTarget(file) {
            try {
                const client = getClient();
                const path = this.root_path + this.current_dir + file.name;
                
                if (ArrayBuffer.isView(file.content)) {
                    file.content = Buffer.from(file.content);
                }

                await client.putFileContents(path, file.content);

                // Recharge les fichiers après l'opération
                await this.fetchFiles();
            } catch (error) {
                console.error('Erreur lors du déplacement du fichier:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
