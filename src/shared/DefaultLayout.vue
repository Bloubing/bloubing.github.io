<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import NavLink from '@/components/NavLink.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  back: String,
})

const windowWidth = ref(window.innerWidth)

const showSidebar = ref(false)
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
  <div class="bg-papyrus">
    <header>
      <nav
        id="navbar"
        aria-label="Main navigation"
        class="flex items-center justify-between p-5 text-gray-800 sm:px-20 sm:py-10 md:px-15 md:py-10 lg:px-40 lg:py-10"
      >
        <RouterLink
          to="/"
          aria-label="Retour à l'accueil"
          class="relative flex items-center space-x-1 text-3xl font-bold"
        >
          <img
            class="absolute -top-6 -left-6 z-0 h-28 w-28 object-fill"
            src="/src/assets/images/active_shape.png"
            alt="Forme verte du logo"
            aria-hidden="true"
          />

          <img
            class="from-0 z-2 h-13 w-13 transition duration-700 hover:scale-105 hover:rotate-360"
            src="/src/assets/images/bloubi_logo.png"
            alt="Logo de Bloubing"
          />
          <p class="z-2 text-base sm:text-2xl">Bloubing</p>
        </RouterLink>
        <div
          :inert="!showSidebar && windowWidth < 768"
          :class="[
            'fixed top-0 z-10 h-[100vh] border-gray-800 transition-all duration-300 md:static md:h-auto md:border-0 md:bg-transparent md:px-0',
            showSidebar ? 'right-0 bg-papyrus' : '-right-full',
          ]"
        >
          <div
            @click="toggleSidebar"
            class="mt-4 ml-5 block cursor-pointer border-0 md:hidden"
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
            class="mt-5 flex h-full flex-col items-center justify-start md:flex-row md:space-x-15 md:px-0"
          >
            <li
              class="w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
            >
              <NavLink to="/experiences">Expériences</NavLink>
            </li>
            <li
              class="w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
            >
              <NavLink to="/projects">Projets</NavLink>
            </li>
            <li
              class="w-full p-6 px-15 transition duration-300 hover:bg-gray-800 hover:text-white md:w-auto md:p-0 md:hover:bg-transparent md:hover:text-gray-800"
            >
              <NavLink to="/about">À propos</NavLink>
            </li>
          </ul>
        </div>
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

    <main class="text-sm sm:mx-40 sm:text-base">
      <slot />
    </main>

    <BackButton :back v-if="back" />

    <footer>
      <section
        aria-labelledby="contact-heading"
        class="aspect-960/300 w-full bg-[url('/src/assets/images/wave2.svg')] bg-cover bg-center bg-no-repeat"
      ></section>

      <div class="bg-pistachio pb-10 text-center font-bold md:pl-10 md:text-left">
        <h2
          id="contact-heading"
          class="pt-10 text-4xl text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Contactez-moi !
        </h2>
        <p class="text-gray-800 font-normal py-4 max-w-[50ch]">
          Vous avez un projet qui touche au développement, à la communication digitale ou aux
          langues ? Ou bien simplement une question ? Je suis ouvert à de nouvelles opportunités et
          je serai ravi d'en discuter avec vous !
        </p>
        <div
          class="transition-tranform rounded-full text-white duration-300 hover:rotate-3 md:hover:rotate-1"
        >
          <a
            type="email"
            rel="noopener"
            href="mailto:contact@bloubing.com"
            class="inline-flex items-center gap-2 bg-gray-800 px-5 py-3 font-semibold text-white lg:text-lg"
            aria-label="Écrire un e-mail à contact@bloubing.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <span>Écrire un e-mail</span>
          </a>
        </div>
      </div>

      <div
        class="aspect-960/151 w-full bg-[url('/src/assets/images/wave.svg')] bg-cover bg-center bg-no-repeat"
      ></div>

      <nav aria-label="Barre de navigation de pied de page" class="bg-gray-800 p-15 text-white">
        <ul class="flex justify-center space-x-10 text-sm sm:text-base">
          <li>
            <RouterLink
              class="transition-all duration-300 hover:text-shadow-white hover:text-shadow-xs"
              to="/projects"
              >Projets</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="transition-all duration-300 hover:text-shadow-white hover:text-shadow-xs"
              to="/about"
              >À propos</RouterLink
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
