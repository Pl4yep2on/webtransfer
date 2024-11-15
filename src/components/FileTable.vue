<template>
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Taille</th>
            </tr>
        </thead>
        <tbody>
            <!-- Boucle pour afficher les fichiers et dossiers récupérés -->
            <tr v-for="file in files" :key="file.filename">
                <td>
                    <!-- Affiche un lien cliquable vers le fichier ou le dossier -->
                    <div @click='handleClick(file)'>{{ file.basename }}</div>
                </td>
                <td>{{ file.type === 'directory' ? 'Dossier' : 'Fichier' }}</td>
                <td>{{ file.type === 'directory' ? '-' : formatFileSize(file.size) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { getClient } from '@nextcloud/files/dav';

export default {
    name: 'FileTable',
    data() {
        return {
            files: [],  // Liste des fichiers et dossiers récupérés
            current_dir : '/'
        };
    },
    async mounted() {
        await this.fetchFiles();
    },
    methods: {
        async fetchFiles() {
            try {
                // Création du client WebDAV
                const client = getClient();

                // Récupération des fichiers et dossiers à la racine
                const directoryItems = await client.getDirectoryContents('/files/admin' + this.current_dir); //changer admin par le nom de l'utilisateur courant

                // Mise à jour de la liste des fichiers et dossiers
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
        // Fonction pour formater la taille des fichiers
        formatFileSize(size) {
            if (size < 1024) return `${size} B`;
            if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
            if (size < 1024 * 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)} MB`;
            return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
        },
        async handleClick(file) {
        if (file.type === 'directory') {
            // Si c'est un dossier, on change le répertoire courant et on fetch son contenu
            this.current_dir = this.current_dir === '/' ? '/' + file.basename : this.current_dir + '/' + file.basename;
            await this.fetchFiles();
        } else {
            // Si c'est un fichier, on ouvre le lien de téléchargement
            window.open(file.href, '_blank');
        }
    }
    }
}
</script>

<style scoped>
    /* Styles pour le tableau */
    table {
        border-collapse: collapse;
        width: 80%;
        margin: 20px auto;
    }

    table, th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        background-color: #4CAF50;
        color: white;
    }

    tr {
        background-color: #f2f2f2;
    }

    td a {
        color: #4CAF50;
        text-decoration: none;
    }

    /* Ajout du style pour le hover */
    td div {
        cursor: pointer; /* Change le curseur en main lors du survol */
    }
</style>

