<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  name: String,
})
</script>

<template>
  <li class="transition-transform duration-500 hover:scale-[1.02] border-2 border-base-content">
    <RouterLink v-if="name" :to="{ name: name }" class="block">
      <article
        class="dark:bg-gray-800-50 m-auto flex w-full flex-col  md:flex-row"
      >
        <div class="h-4 bg-primary md:h-auto md:w-3 md:flex-1"></div>
        <div class="flex flex-col justify-between space-y-6 p-4 md:flex-10">
          <div class="group space-y-2">
            <header class="flex space-x-2">
              <h2 class="text-base font-semibold tracking-wide group-hover:underline sm:text-2xl">
                <slot name="title" />
              </h2>
            </header>

            <p class="text-sm sm:text-base dark:text-base-content">
              <slot />
            </p>
          </div>
        </div>
      </article>
    </RouterLink>

    <article
      v-else
      class="dark:bg-gray-800-50 m-auto flex w-full flex-col md:flex-row"
    >
      <div class="h-4 bg-primary md:h-auto md:w-3 md:flex-1"></div>
      <div class="flex flex-col justify-between space-y-6 p-4 md:flex-10">
        <div class="group space-y-2">
          <header class="flex space-x-2">
            <h2 class="text-base font-semibold tracking-wide sm:text-2xl">
              <slot name="title" />
            </h2>
          </header>

          <p class="text-sm sm:text-base dark:text-base-content">
            <slot />
          </p>
        </div>
      </div>
    </article>
  </li>
</template>
