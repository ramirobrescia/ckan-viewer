<script setup>
import { ref } from 'vue';
import CKANOrganizationItem from './CKANOrganizationItem.vue';

defineProps([
	'organizations'
]);
</script>

<template>
	<v-list>
		<CKANOrganizationItem v-for="orgnization in organizations"
			:key="orgnization.name"
			:id="orgnization.id" :title="orgnization.title" :name="orgnization.name" />
	</v-list>
</template>

<style scoped></style>