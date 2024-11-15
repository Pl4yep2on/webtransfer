<template>
	<div id="app" class="h-full w-full bg-slate-500">
		<div class="h-full w-full flex flex-row">
			<div class="w-1/3 p-4 m-6 mr-2 bg-black/10 rounded-xl">
			</div>
			<div class="w-2/3 p-4 m-6 ml-2 bg-black/10 rounded-xl">
				<FileTable/>
			</div>
		</div>
		
	</div>
</template>

<script>
import FileTable from './components/FileTable.vue';
import './output.css';

export default {
	name: 'App',
	components: {
		FileTable,
	}
}
</script>

<style>

</style>
