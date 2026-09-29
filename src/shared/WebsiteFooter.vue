<script setup lang="ts"></script>

<template>
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
      <p class="text-gray-800 text-sm font-normal py-4 max-w-[50ch] mx-20 md:m-0">
        Un projet qui pourrait m'intéresser ou une question ? Je suis ouvert à de nouvelles
        opportunités et je serais ravi d'en discuter avec vous !
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
</template>
