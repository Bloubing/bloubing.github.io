<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import NavBar from './NavBar.vue'
import WebsiteFooter from './WebsiteFooter.vue'

defineProps({
  back: String,
})
</script>

<template>
  <div class="bg-base-100">
    <NavBar />

    <main class="text-sm sm:mx-40 sm:text-base">
      <slot />
    </main>

    <BackButton :back v-if="back" />
    <WebsiteFooter />
  </div>
</template>
