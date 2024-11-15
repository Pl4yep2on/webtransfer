<template>
    <div class="flex flex-col h-full w-full border">
      <!-- En-tête -->
      <div class="flex h-12 items-center border-b">
        <div class="flex-1 px-4 py-2 font-semibold border-r border-gray-300">Nom</div>
        <div class="flex-1 px-4 py-2 font-semibold border-r border-gray-300">Type</div>
        <div class="flex-1 px-4 py-2 font-semibold">Taille</div>
      </div>
  
      <!-- Contenu -->
      <div 
        v-for="file in files" 
        :key="file.filename" 
        class="flex h-16 items-center hover:bg-NcGray cursor-pointer rounded-lg border-b last:border-b-0"
        @click="handleClick(file)"
      >
        <div class="flex-1 px-4 py-2 border-r border-gray-300">
          {{ file.basename }}
        </div>
        <div class="flex-1 px-4 py-2 border-r border-gray-300">
          {{ file.type === 'directory' ? 'Dossier' : 'Fichier' }}
        </div>
        <div class="flex-1 px-4 py-2">
          {{ file.type === 'directory' ? '-' : formatFileSize(file.size) }}
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { getClient } from '@nextcloud/files/dav';
  
  export default {
    name: 'FileTable',
    data() {
      return {
        files: [], // Liste des fichiers et dossiers récupérés
        current_dir: '/'
      };
    },
    async mounted() {
      await this.fetchFiles();
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
      async handleClick(file) {
        if (file.type === 'directory') {
          this.current_dir = this.current_dir === '/' ? '/' + file.basename : this.current_dir + '/' + file.basename;
          await this.fetchFiles();
        } else {
          window.open(file.href, '_blank');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles personnalisés ici si nécessaire */
  </style>
  