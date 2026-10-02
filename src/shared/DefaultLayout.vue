<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import NavBar from './NavBar.vue'
import WebsiteFooter from './WebsiteFooter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { onBeforeUnmount, onMounted, ref } from 'vue'
defineProps({
  back: String,
})

let isActive = ref(false)

onMounted(() => window.addEventListener('scroll', checkNeedBackToTop))
onBeforeUnmount(() => window.removeEventListener('scroll', checkNeedBackToTop))

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function checkNeedBackToTop() {
  if (window.pageYOffset > 100) {
    isActive.value = true
  } else {
    isActive.value = false
  }
}
</script>

<template>
  <div class="bg-base-100">
    <NavBar />

    <main class="text-sm sm:mx-40 sm:text-base">
      <button
        class="btn btn-primary fixed bottom-5 right-5 z-2 border-2 border-base-content rounded-none transition duration-300"
        :class="[isActive ? 'scale-100' : 'scale-0']"
        v-on:click="scrollToTop()"
      >
        <FontAwesomeIcon :icon="faArrowUp" />
      </button>
      <slot />
    </main>

    <BackButton :back v-if="back" />
    <WebsiteFooter />
  </div>
</template>
