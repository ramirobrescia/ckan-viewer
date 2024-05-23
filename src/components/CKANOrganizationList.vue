<template>
	<v-list-item :key="organization.id">
		<v-list-item-content>
			<v-list-item-title>{{ organization.name }}</v-list-item-title>
			<v-list-item-subtitle>{{ organization.title }}</v-list-item-subtitle>
		</v-list-item-content>

		<v-list-item-action>
			<v-menu v-model="showMenu">
				<v-btn icon @click.stop="showMenu = !showMenu">
					<v-icon>mdi-more_vert</v-icon>
				</v-btn>

				<v-menu-content>
					<v-list-item @click="onEditOrganization">
						<v-list-item-icon>
							<v-icon>mdi-pencil</v-icon>
						</v-list-item-icon>
						<v-list-item-content>Editar</v-list-item-content>
					</v-list-item>

					<v-list-item @click="onDeleteOrganization">
						<v-list-item-icon>
							<v-icon>mdi-delete</v-icon>
						</v-list-item-icon>
						<v-list-item-content>Eliminar</v-list-item-content>
					</v-list-item>
				</v-menu-content>
			</v-menu>
		</v-list-item-action>
	</v-list-item>
</template>

<script setup>
import { ref, defineProps } from 'vue';

defineProps([
	'organization'
]);
const organization = ref({});
</script>

<style scoped></style>