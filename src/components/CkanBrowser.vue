<script setup>
import { ckanUrl } from './Start.vue';

defineProps([
  'url'
])
</script>

<template>
    <h1>Browsing {{ url }} vs {{ ckanUrl }}</h1>
</template>