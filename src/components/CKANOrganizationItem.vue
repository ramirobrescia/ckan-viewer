<script setup>
defineProps({
	id: String,
	title: String,
	name: String
})
</script>

<template>
	<v-list-item :key="id" :title="title"></v-list-item>
</template>

<style scoped></style>