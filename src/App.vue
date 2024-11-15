<template>
	<div id="app">
		<h1>FEUR</h1>
		<FileTable/>
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
