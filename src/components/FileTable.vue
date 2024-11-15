<template>
  <div class="flex flex-col h-full w-full border">
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
      @click="handleClick(file)"
    >
      <!-- Nom -->
      <div class="cursor-pointer w-4/6 flex items-center px-4 py-2 border-r border-gray-300">
        <div class="w-12 h-12 flex items-center justify-center">
          <template v-if="file.type === 'directory'">
            <svg
              fill="currentColor"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              class="text-NcBlue"
            >
              <path
                d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z"
              ></path>
            </svg>
          </template>
          <template v-else>
            <div class="flex items-center justify-center">
              <img alt="" loading="lazy" src="http://nextcloud.local/index.php/core/preview?fileId=161&amp;x=32&amp;y=32&amp;mimeFallback=true&amp;v=030b13&amp;a=0" class="files-list__row-icon-preview files-list__row-icon-preview--loaded w-10 h-10 ">
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
  