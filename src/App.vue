<template>
	<div id="app" class="h-full w-full bg-black/80">
		<!-- Conteneur principal, ajustement en flex-row à partir de sm -->
		<div class="h-full w-full flex flex-col sm:flex-row">
			<!-- Première section -->
			<div 
				class="w-full sm:w-1/3 max-sm:h-2/5 p-4 sm:m-6 sm:mr-0 rounded-xl bg-NcBlack/40">
				<WebContentViewer @zip-upload="handleZipUpload" @file-upload="handleFileUpload" zipUrl="http://localhost:8000/dummyZip.zip"/>
			</div>
			<!-- Deuxième section -->
			<div 
				class="w-full sm:w-2/3 max-sm:h-3/5 p-4 sm:m-6 sm:ml-4 bg-NcBlack rounded-xl">
				<FileTable :file="sharedFile" :zip="zip"/>
			</div>
		</div>
	</div>
</template>

<script>
import FileTable from './components/FileTable.vue';
import WebContentViewer from './components/WebContentViewer.vue';
import './output.css';

export default {
	name: 'App',
	components: {
		FileTable,
		WebContentViewer  
	},
	data() {
		return {
		sharedFile: null,
		zip: null,
		};
	},
	methods: {
		handleFileUpload(file) {
		this.sharedFile = file;
		},
		handleZipUpload(zip) {
		this.zip = zip;
		},
	},
}
</script>

<style>

</style>
