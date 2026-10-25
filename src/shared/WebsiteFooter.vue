<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GitHubLogo from './GitHubLogo.vue'

const { t } = useI18n({
  messages: {
    en: {
      heading: "Let's get in touch!",
      contact_text:
        "Any project or question in mind? I'd love to hear about and I'm open to new opportunities.",
      email: 'Email me',
      nav: {
        projects: 'Projects',
        about: 'About',
        legal_notice: 'Legal notice',
      },
    },
    fr: {
      heading: 'Contactez-moi !',
      contact_text:
        "Un projet qui pourrait m'intéresser ou une question ? Je suis ouvert à de nouvelles opportunités et je serais ravi d'en discuter avec vous !",
      email: 'Écrire un e-mail',
      nav: {
        projects: 'Projets',
        about: 'À propos',
        legal_notice: 'Mentions légales',
      },
    },
    es: {
      heading: '¡Escríbeme!',
      contact_text:
        '¿Algún proyecto que pueda interesarme o alguna pregunta? ¡Estoy abierto a nuevas oportunidades y me encantaría hablar contigo!',
      email: 'Enviar un e-mail',
      nav: {
        projects: 'Proyectos',
        about: 'Sobre mí',
        legal_notice: 'Aviso legal',
      },
    },
  },
})
</script>

<template>
  <footer>
    <section
      aria-labelledby="contact-heading"
      class="aspect-960/300 w-full bg-[url('/src/assets/images/wave2.svg')] bg-cover bg-center bg-no-repeat"
    ></section>

    <div class="bg-primary pb-10 text-center font-bold md:pl-10 md:text-left">
      <h2
        id="contact-heading"
        class="pt-10 text-4xl text-gray-800 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {{ t('heading') }}
      </h2>
      <p class="text-gray-800 text-sm font-normal py-4 max-w-[50ch] mx-20 md:m-0">
        {{ t('contact_text') }}
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
          <span>{{ t('email') }}</span>
        </a>
      </div>
    </div>

    <div
      class="aspect-960/151 w-full bg-[url('/src/assets/images/wave.svg')] bg-cover bg-center bg-no-repeat"
    ></div>

    <nav aria-label="Barre de navigation de pied de page" class="bg-gray-800 p-15 text-white">
      <div class="flex items-start">
        <a href="https://github.com/Bloubing/" target="_blank" class="mx-auto">
          <GitHubLogo class="fill-white mb-5" />
        </a>
      </div>
      <ul class="flex flex-col sm:flex-row justify-center space-x-10 text-sm sm:text-base">
        <li>
          <RouterLink
            class="transition-all duration-300 hover:text-shadow-white hover:text-shadow-xs"
            :to="{ name: 'projects.index' }"
            >{{ t('nav.projects') }}</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="transition-all duration-300 hover:text-shadow-white hover:text-shadow-xs"
            :to="{ name: 'about' }"
            >{{ t('nav.about') }}</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="transition-all duration-300 hover:text-shadow-white hover:text-shadow-xs"
            :to="{ name: 'legal_notice' }"
            >{{ t('nav.legal_notice') }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>
