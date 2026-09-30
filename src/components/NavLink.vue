<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  name: String,
})
</script>

<template>
  <RouterLink
    :to="{ name: name }"
    class="py-4 md:p-6 md:pb-8"
    activeClass="md:border-b-2 md:border-b-gray-800"
  >
    <slot />
  </RouterLink>
</template>
