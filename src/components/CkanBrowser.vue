<script setup>
import { ref, defineProps, reactive } from 'vue';
import CKANOrganization from './CKANOrganization.vue';

defineProps([
  'url'
]);

const organization = reactive({
	id: '12313',
	name: 'agricultura',
	title: 'Ministerio de agricultura',
})

const count = ref(0)

function tecnologia(){

	console.log('En tecnologia()');
	count.value++;
	organization.title = 'Tecnologia ' + count.value;
	organization.name = 'tecnologia ' + count.value;
}
</script>

<template>
    <h1>Browsing this {{ url }} </h1>
	<div>
		<v-btn class="text-none" color="primary" size="x-large" variant="flat" block
            @click="tecnologia">Tecnologia</v-btn>
	</div>
	<CKANOrganization :organization="organization" />
</template>