<template>
<div class="flex flex-col h-full w-full border">
<!-- Breadcrumb -->
<NcBreadcrumbs class="max-h-8 mr-4">
    <NcBreadcrumb name="Home"
        title="Title of the Home folder"
        @click="handleClickBreadcrumb(-1)">
    </NcBreadcrumb>
    <NcBreadcrumb v-if="getBreadcrumbParts().length > 0"
        v-for="(part, index) in breadcrumbParts" 
        :key="index"
        :name="part"
        @click="handleClickBreadcrumb(index)">
    </NcBreadcrumb>
</NcBreadcrumbs>

<!-- En-tête -->
<div class="flex h-12 items-center border-b border-gray-300">
    <div class="w-4/6 px-4 py-2 text-gray-500 font-semibold border-r border-gray-300">Nom</div>
    <div class="w-1/6 px-4 py-2 text-gray-500 font-semibold border-r border-gray-300">Type</div>
    <div class="w-1/6 px-4 py-2 text-gray-500 font-semibold">Taille</div>
</div>

<!-- Contenu -->
<div
    v-for="file in files"
    :key="file.filename"
    class="flex h-16 items-center hover:bg-NcGray cursor-pointer rounded-lg border-b last:border-b-0 border-gray-300"
    @click="handleClickElem(file)"
>
    <!-- Nom -->
    <div class="cursor-pointer w-4/6 flex items-center px-4 py-2 border-r border-gray-300">
    <div class="w-12 h-12 flex items-center justify-center">
        <template v-if="file.type === 'directory'">
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                class="text-NcBlue w-10 h-10"  
            >
                <path
                    d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
                ></path>
            </svg>
        </template>
        <template v-else>
            <div class="flex items-center justify-center">
                <svg 
                    viewBox="0 0 16 16" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xml:space="preserve" 
                    class="w-10 h-10"
                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
                >
                    <path d="M6 22c-.55 0-1.021-.196-1.412-.587A1.927 1.927 0 0 1 4 20V4c0-.55.196-1.021.588-1.413A1.926 1.926 0 0 1 6 2h8l6 6v12a1.93 1.93 0 0 1-.587 1.413A1.93 1.93 0 0 1 18 22H6Z" style="fill:#969696;fill-rule:nonzero" transform="matrix(.7 0 0 .7 -.43 -.388)"/>
                </svg>
            </div>
        </template>
    </div>
    <div class="ml-4">{{ file.basename }}</div>
    </div>

    <!-- Type -->
    <div class="cursor-pointer w-1/6 px-4 py-2 border-r border-gray-300">
    {{ file.type === 'directory' ? 'Dossier' : 'Fichier' }}
    </div>

    <!-- Taille -->
    <div class="cursor-pointer w-1/6 px-4 py-2">
    {{ file.type === 'directory' ? '-' : formatFileSize(file.size) }}
    </div>
</div>
</div>
</template>



<script>
import { getClient } from '@nextcloud/files/dav';
import NcBreadcrumbs from '@nextcloud/vue/dist/Components/NcBreadcrumbs.js';
import NcBreadcrumb from '@nextcloud/vue/dist/Components/NcBreadcrumb.js';

export default {
name: 'FileTable',
components: {
    NcBreadcrumbs,
    NcBreadcrumb
},
data() {
    return {
    files: [], // Liste des fichiers et dossiers récupérés
    current_dir: '/',
    breadcrumbParts : []
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
            const directoryItems = await client.getDirectoryContents('/files/admin' + this.current_dir); // Remplacez "admin" par le nom de l'utilisateur courant

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
    }
}
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
</style>
