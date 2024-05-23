<script setup>
import CKANOrganization from './CKANOrganization.vue';

defineProps([
  'url'
]);

const organization = {
	id: '12313',
	name: 'agricultura',
	title: 'Ministerio de agricultura',
};
</script>

<template>
    <h1>Browsing this {{ url }} </h1>
	<CKANOrganization :organization="organization" /> 
</template>