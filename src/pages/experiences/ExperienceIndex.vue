<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] sm:max-w-[65ch]">
        <Heading>Expériences professionnelles</Heading>
        <p class="mb-5">Cliquez sur une des expériences professionnelles pour en savoir plus :</p>
        <ul class="flex flex-col space-y-3 text-base sm:text-xl">
          <li>
            -
            <RouterLink
              to="/experiences/django-angular-internship"
              class="hover:underline text-blue-500"
              >Stage Django Angular</RouterLink
            >
          </li>
          <li>
            -
            <RouterLink to="/experiences/laravel-internship" class="hover:underline text-blue-500"
              >Stage Laravel</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
