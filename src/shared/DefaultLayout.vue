<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import NavBar from './NavBar.vue'
import WebsiteFooter from './WebsiteFooter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { throttle } from 'lodash'

let isActive = ref(false)
const THROTTLE_MS = 250

const checkNeedBackToTop = throttle(() => {
  if (window.pageYOffset > 100) {
    isActive.value = true
  } else {
    isActive.value = false
  }
}, THROTTLE_MS)

onMounted(() => window.addEventListener('scroll', checkNeedBackToTop, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', checkNeedBackToTop))

function scrollToTop() {
  if (!isActive.value) {
    return
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="bg-base-100">
    <NavBar />

    <main class="text-sm sm:mx-40 sm:text-base">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <BackButton />

        <slot />
      </div>

      <button
        class="btn btn-primary fixed bottom-5 right-5 z-2 border-2 border-base-content rounded-none transition duration-100 shadow-none"
        :class="[isActive ? 'scale-100' : 'scale-0']"
        v-on:click="scrollToTop()"
      >
        <FontAwesomeIcon :icon="faArrowUp" />
      </button>
    </main>

    <WebsiteFooter />
  </div>
</template>
