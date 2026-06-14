<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] sm:max-w-[65ch]">
        <Heading>Projets</Heading>
        <p class="mb-5">Cliquez sur un des projets pour en savoir plus :</p>
        <ul class="flex flex-col space-y-3 text-base sm:text-xl">
          <li>
            -
            <RouterLink to="/projects/monespace" class="hover:underline text-blue-500"
              >Mon Espace</RouterLink
            >
          </li>
          <li>
            -
            <RouterLink to="/projects/innovguide" class="hover:underline text-blue-500"
              >Innovguide</RouterLink
            >
          </li>
          <li>
            -
            <RouterLink to="/projects/self-hosting" class="hover:underline text-blue-500"
              >Auto-hébergement</RouterLink
            >
          </li>
          <li>
            -
            <RouterLink to="projects/recipes" class="hover:underline text-blue-500"
              >Recettes</RouterLink
            >
          </li>
          <li>
            -
            <RouterLink to="projects/personal-website" class="hover:underline text-blue-500"
              >Site personnel</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
