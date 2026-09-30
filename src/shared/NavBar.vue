<script setup lang="ts">
import NavLink from '@/components/NavLink.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import WebsiteTitle from './WebsiteTitle.vue'
import GitHubLogo from './GitHubLogo.vue'

const showSidebar = ref(false)
const windowWidth = ref(window.innerWidth)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function handleResize() {
  windowWidth.value = window.innerWidth

  // Close overlay when resizing to big screen
  if (windowWidth.value >= 768 && showSidebar.value) {
    showSidebar.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <nav
      id="navbar"
      aria-label="Main navigation"
      class="flex items-center justify-between p-5 text-gray-800 lg:px-20"
    >
      <WebsiteTitle />
      <div
        :inert="!showSidebar && windowWidth < 768"
        :class="[
          'fixed top-0 z-10 h-[100vh] border-gray-800 transition-all duration-300 md:static md:h-auto md:border-0 md:bg-transparent md:px-0',
          showSidebar ? 'right-0 bg-papyrus' : '-right-full',
        ]"
      >
        <div
          @click="toggleSidebar"
          class="m-5 block cursor-pointer border-0 md:hidden"
          aria-label="close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
            ></path>
          </svg>
        </div>

        <ul
          class="flex h-full flex-col items-center justify-start md:flex-row md:space-x-15 md:px-0"
        >
          <li
            class="w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
          >
            <NavLink name="projects.index">Projets</NavLink>
          </li>
          <li
            class="w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
          >
            <NavLink name="about">À propos</NavLink>
          </li>
          <li
            class="md:hidden flex group w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
          >
            <a href="https://github.com/Bloubing/" target="_blank" class="md:flex flex space-x-1">
              <GitHubLogo class="group-hover:fill-white" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
      <a href="https://github.com/Bloubing/" target="_blank" class="hidden md:flex">
        <GitHubLogo />
      </a>

      <div
        aria-label="open-sidebar"
        :aria-expanded="showSidebar"
        aria-controls="navbar"
        @click="toggleSidebar"
        class="flex cursor-pointer flex-col space-y-1.5 md:hidden"
      >
        <span class="w-6 border-t-2 border-gray-800"></span>
        <span class="w-6 border-t-2 border-gray-800"></span>
        <span class="w-6 border-t-2 border-gray-800"></span>
      </div>
    </nav>

    <div
      aria-hidden="true"
      id="overlay"
      @click="toggleSidebar"
      :class="['fixed inset-0 z-9 bg-gray-800/30', { hidden: !showSidebar }]"
    ></div>
  </header>
</template>
