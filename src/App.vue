<template>
	<div id="app" class="h-full w-full dark:bg-black/80 bg-white/80">
		<!-- Conteneur principal, ajustement en flex-row à partir de sm -->
		<div class="h-full w-full flex flex-col sm:flex-row">
			<!-- Première section -->
			<div 
				class="w-full sm:w-1/3 max-sm:h-2/5 p-4 sm:m-6 sm:mr-0 rounded-xl dark:bg-NcBlack/40 bg-white/80">
				<WebContentViewer :translate="translate" @file-upload="handleFileUpload" @dragEnded="toggleDragEnded" :zipUrl="zipUrl"/>
			</div>
			<!-- Deuxième section -->
			<div 
				class="w-full sm:w-2/3 max-sm:h-3/5 p-4 sm:m-6 sm:ml-4 dark:bg-NcBlack bg-white rounded-xl">
				<FileTable :file="sharedFile" :dragEnded="dragEnded" :translate="translate" @dragEnded="toggleDragEnded"/>
			</div>
		</div>
	</div>
</template>

<script>
import FileTable from './components/FileTable.vue';
import WebContentViewer from './components/WebContentViewer.vue';
import './output.css';

// Traduction
import i18next from "i18next";
import file from "./assets/traduction.json";

await i18next.init({
	lng: navigator.language.split('-')[0],
	fallbackLng: "en",
	resources: file,
});

export default {
	name: 'App',
	components: {
		FileTable,
		WebContentViewer  
	},
	data() {
		let zipUrl = document.getElementById('archiveInfos').getAttribute('dataarchiveurl');
		//console.log(zipUrl)
		return {
			zipUrl,
			sharedFile: null,
			dragEnded: false,
		};
	},
	methods: {
		handleFileUpload(file) {
			this.sharedFile = file;
		},
		toggleDragEnded(){
			this.dragEnded = !this.dragEnded;
			this.sharedFile = null;
		},
		translate(id) {
            return i18next.t(id)
        },
	},
}
</script>

<style>

</style>
