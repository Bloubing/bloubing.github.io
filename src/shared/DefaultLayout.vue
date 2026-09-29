<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import { RouterLink } from 'vue-router'
import NavBar from './NavBar.vue'
import WebsiteFooter from './WebsiteFooter.vue'

defineProps({
  back: String,
})
</script>

<template>
  <div class="bg-papyrus">
    <NavBar />

    <main class="text-sm sm:mx-40 sm:text-base">
      <slot />
    </main>

    <BackButton :back v-if="back" />
    <WebsiteFooter />
  </div>
</template>
