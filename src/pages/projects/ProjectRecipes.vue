<script setup lang="ts">
import { useI18n, Translation } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import GitHubLogo from '@/shared/GitHubLogo.vue'

const { t } = useI18n({
  messages: {
    en: {
      project_name: 'Recipes',
      presentation: {
        text: '{0}, a Marmiton-like website where people can share their culinary creations.',
        project_name: 'Recipes',
      },
      links: {
        github: 'Source code',
      },
      why: {
        heading: 'Why?',
        why_1: "- A project for the 1st year of my Master's degree, carried out in a group of 3.",
        why_2: '- Develop a Web application from scratch with an MVC framework (Laravel).',
      },
      features: {
        heading: 'Features',
        feature_1: '- Complete recipe management, drafts, and favorites.',
        feature_2: '- Rate, categorise and comment recipes.',
        feature_3: '- Authentication with email verification or OAuth via GitHub.',
        feature_4:
          '- Administration and moderation interface for recipes and comments, based on user reports.',
      },
    },
    fr: {
      project_name: 'Recettes',
      presentation: {
        text: '{0}, un site façon Marmiton où partager ses créations culinaires !',
      },
      links: {
        github: 'Code source',
      },
      why: {
        heading: 'Pourquoi ?',
        why_1: '- Projet académique de M1, réalisé en groupe de 3.',
        why_2:
          "- Développer une application Web de zéro avec un framework utlisant l'architecture MVC (Laravel).",
      },
      features: {
        heading: 'Fonctionnalités',
        feature_1: '- Gestion complète des recettes, brouillons et favoris.',
        feature_2: '- Possibilité de noter, de catégoriser et de commenter les recettes.',
        feature_3: "- Authentification avec vérification de l'e-mail ou OAuth via GitHub.",
        feature_4:
          "- Interface d'administration et de modération des recettes et des commentaires basée sur des signalements.",
      },
    },
    es: {
      project_name: 'Recetas',
      presentation: {
        text: '{0} es una página web como Marmiton donde la gente puede compartir sus creaciones culinarias.',
        project_name: 'Tron',
      },
      links: {
        github: 'Código fuente',
      },
      why: {
        heading: '¿Por qué?',
        why_1: '- Proyecto académico de máster 2 en grupo de 3.',
        why_2: '- Desarrollar una aplicación Web desde cero con un framework MVC (Laravel).',
      },
      features: {
        heading: 'Funciones',
        feature_1: '-  Gestión completa de recetas, borradores y favoritos.',
        feature_2: '- Calificar, clasificar y comentar recetas.',
        feature_3: '- Autenticación con una verificación por e-mail u OAuth con GitHub.',
        feature_4:
          '-  Interfaz de administración y moderación de recetas y comentarios, usando las denuncias de los usuarios.',
      },
    },
  },
})
</script>

<template>
  <Layout back="/projects">
    <template v-slot:heading>{{ t('project_name') }}</template>
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>{{ t('project_name') }}</Heading>
        <p class="bg-primary p-5 border-2 border-base-content list-none">
          <Translation keypath="presentation.text" tag="label" for="project_name">
            <strong>{{ t('project_name') }}</strong>
          </Translation>
        </p>
        <ul class="flex flex-col space-y-4">
          <li>
            <a
              target="_blank"
              href="https://github.com/Bloubing/M1-recettes"
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
            <li>
              {{ t('features.feature_1') }}
            </li>
            <li>
              {{ t('features.feature_2') }}
            </li>
            <li>
              {{ t('features.feature_3') }}
            </li>
            <li>
              {{ t('features.feature_4') }}
            </li>
          </ul>
        </section>

        <section class="flex flex-wrap gap-1">
          <span class="badge badge-neutral">PHP</span>
          <span class="badge badge-neutral">Javascript</span>
          <span class="badge badge-neutral">Laravel</span>
          <span class="badge badge-neutral">Livewire</span>
          <span class="badge badge-neutral">Tailwind</span>
        </section>
      </div>
    </div>
  </Layout>
</template>
