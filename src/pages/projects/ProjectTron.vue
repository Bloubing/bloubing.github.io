<script setup lang="ts">
import { useI18n, Translation } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import GitHubLogo from '@/shared/GitHubLogo.vue'

const { t } = useI18n({
  messages: {
    en: {
      project_name: 'Tron Game ',
      presentation: {
        text: 'A crossplatform version of {0}, the classic arcade game.',
        project_name: 'Tron',
      },
      links: {
        github: 'Source code',
      },
      why: {
        heading: 'Why?',
        why_1: "- A group project for the 2nd year of my Master's degree.",
        why_2: '- Learn about various technologies (NoSQL, WebSockets) in a fun way.',
      },
      features: {
        heading: 'Features',
        feature_1: '- Client–server architecture and WebSockets communication.',
        feature_2: '- Crossplatform (playable both in the browser and on Android) with Cordova.',
        feature_3: '- Lobby system, simultaneous games, player customisation and ranking.',
        lobbies: 'lobbies',
      },
    },
    fr: {
      project_name: 'Jeu Tron',
      presentation: {
        text: "Un {0}, grand classique des jeux d'arcades, en version multiplateforme.",
        project_name: 'jeu Tron',
      },
      links: {
        github: 'Code source',
      },
      why: {
        heading: 'Pourquoi ?',
        why_1: '- Projet académique de M2, réalisé en groupe.',
        why_2:
          '- Se familiariser avec plusieurs technologies (NoSQL, WebSockets) de façon ludique.',
      },
      features: {
        heading: 'Fonctionnalités',
        feature_1: '- Architecture client–serveur et communication via WebSockets.',
        feature_2: '- Jeu multiplateforme (navigateur et Android) avec Cordova.',
        feature_3:
          '- Système de {0}, parties jouables en parallèle, personnalisation des joueurs, et classement.',
        lobbies: 'lobbies',
      },
    },
    es: {
      project_name: 'Juego Tron',
      presentation: {
        text: 'Una versión multiplataforma del {0}, el gran clásico de los videojuegos arcade.',
        project_name: 'juego TRON',
      },
      links: {
        github: 'Código fuente',
      },
      why: {
        heading: '¿Por qué?',
        why_1: '- Proyecto académico de máster 2 en grupo.',
        why_2: '- Familiarizarse con varias tecnologías (NoSQL, WebSockets) de forma lúdica.',
      },
      features: {
        heading: 'Funciones',
        feature_1: '- Arquitectura cliente-servidor y comunicación por WebSockets.',
        feature_2: '- Juego multiplataforma (navegador y Android) con Cordova.',
        feature_3:
          '- Systema de salas, partidas que se pueden jugar en paralelo, personalización de los jugadores y clasificación.',
        lobbies: 'salas',
      },
    },
  },
})
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>{{ t('project_name') }}</Heading>
        <p class="bg-primary p-5 border-2 border-base-content list-none">
          <Translation keypath="presentation.text" tag="label" for="presentation.project_name">
            <strong>{{ t('presentation.project_name') }}</strong>
          </Translation>
        </p>

        <ul class="flex flex-col space-y-4">
          <li>
            <a
              target="_blank"
              href="https://github.com/Bloubing/M2-TRON"
              class="text-blue-500 flex space-x-1 hover:underline"
            >
              <GitHubLogo />
              <p>{{ t('links.github') }}</p>
            </a>
          </li>
        </ul>

        <section class="list-none space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">{{ t('why.heading') }}</h3>
          <ul class="space-y-3">
            <li>{{ t('why.why_1') }}</li>
            <li>
              {{ t('why.why_2') }}
            </li>
          </ul>
        </section>

        <section class="space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">{{ t('features.heading') }}</h3>
          <ul class="space-y-3">
            <li>{{ t('features.feature_1') }}</li>
            <li>{{ t('features.feature_2') }}</li>
            <li>
              <Translation keypath="features.feature_3" tag="label" for="features.lobbies">
                <em>{{ t('features.lobbies') }}</em>
              </Translation>
            </li>
          </ul>
        </section>

        <section class="flex flex-wrap gap-1">
          <span class="badge badge-neutral">Node.js</span>
          <span class="badge badge-neutral">Cordova</span>
          <span class="badge badge-neutral">MongoDB</span>
          <span class="badge badge-neutral">WebSocket</span>
        </section>
      </div>
    </div>
  </Layout>
</template>
