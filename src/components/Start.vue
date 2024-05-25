<script setup>
import { ref } from 'vue'

const ckanURL = ref('')

</script>

<template>
  <v-form v-model="valid">
    <v-container class="mx-auto">
      <v-row dense>
        <v-col cols="12">
          <p>Write a public CKAN api url to view</p>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="ckanURL" label="CKAN api url" variant="solo" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-btn class="text-none" color="primary" size="x-large" variant="flat" block
            :to="`/browse/${ckanURL}`">
            Explore
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>
