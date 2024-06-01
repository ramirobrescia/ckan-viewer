<script setup>
import { ref, reactive } from 'vue';
import CKANOrganizationList from './CKANOrganizationList.vue';

defineProps([
  'url'
]);

const ckanData = reactive({
	organizations: [
		{
			id: '12313',
			name: 'agricultura',
			title: 'Ministerio de agricultura',
		},
		{
			id: '4444',
			name: 'produccion',
			title: 'Ministerio de producción',
		},
	],
})

const count = ref(0)

function loadOrganizations(){

  fetch('/ckan/action/organization_list?order_by=title&all_fields=True')
  .then(response => response.json())
  .then(data => {
	ckanData.organizations = data.result
	})
  .catch(error => console.error(error));
}

</script>

<template>
    <h1>Browsing thisk {{ url }} </h1>
	<div>
		<v-btn class="text-none" color="primary" size="x-large" variant="flat" block
            @click="loadOrganizations">Tecnologia</v-btn>
	</div>
	<CKANOrganizationList :organizations="ckanData.organizations" />
</template>