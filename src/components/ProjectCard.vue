<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  to: String,
})
</script>

<template>
  <li class="p-4 transition-transform duration-500 hover:scale-[1.02]">
    <RouterLink :to="to" class="block">
      <article
        class="dark:bg-gray-800-50 m-auto flex w-full flex-col border-2 border-gray-800 md:flex-row"
      >
        <div class="h-4 bg-pistachio md:h-auto md:w-3 md:flex-1"></div>
        <div class="flex flex-col justify-between space-y-6 p-4 md:flex-10">
          <div class="group space-y-2">
            <header class="flex space-x-2">
              <h2 class="text-base font-semibold tracking-wide group-hover:underline sm:text-2xl">
                <slot name="title" />
              </h2>
            </header>

            <p class="text-sm sm:text-base dark:text-gray-800">
              <slot />
            </p>
          </div>
        </div>
      </article>
    </RouterLink>
  </li>
</template>
