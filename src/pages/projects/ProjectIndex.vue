<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const { t } = useI18n({
  messages: {
    en: {
      heading: 'Projects',
      click_message: 'Click on any of the projects below to learn more:',
      tron: {
        project_name: 'Tron Game',
        description: 'A crossplatform version of Tron, the classic arcade game.',
      },
      self_hosting: {
        project_name: 'Self-hosting',
        description: 'I host and manage a local server in order to use multiple services.',
      },
      recipes: {
        project_name: 'Recipes',
        description: 'A Marmiton-like website where people can share their culinary creations.',
      },
    },
    fr: {
      heading: 'Projets',
      click_message: 'Cliquez sur un des projets pour en savoir plus :',
      tron: {
        project_name: 'Jeu Tron',
        description: "Un jeu Tron, grand classique des jeux d'arcade, en version multiplateforme.",
      },
      self_hosting: {
        project_name: 'Auto-hébergement',
        description:
          "J'héberge et administre un serveur local pour profiter de multiples services.",
      },
      recipes: {
        project_name: 'Recettes',
        description: 'Un site façon Marmiton où partager ses créations culinaires !',
      },
    },
    es: {
      heading: 'Proyectos',
      click_message: '¡Haz clic en uno de los proyectos!',
      tron: {
        project_name: 'Juego Tron',
        description:
          'Una versión multiplataforma del juego Tron, el gran clásico de los videojuegos arcade.',
      },
      self_hosting: {
        project_name: 'Autoalojamiento',
        description: 'Alojo y administro un servidor local para disfrutar de múltiples servicios.',
      },
      recipes: {
        project_name: 'Recetas',
        description:
          'Una página web como Marmiton donde la gente puede compartir sus creaciones culinarias.',
      },
    },
  },
})
</script>

<template>
  <Layout>
    <Heading>{{ t('heading') }}</Heading>
    <p class="mb-5">{{ t('click_message') }}</p>
    <ul class="space-y-3">
      <ProjectCard name="projects.tron">
        <template v-slot:title>{{ t('tron.project_name') }}</template>
        {{ t('tron.description') }}
      </ProjectCard>
      <ProjectCard name="projects.self_hosting">
        <template v-slot:title>{{ t('self_hosting.project_name') }}</template>
        {{ t('self_hosting.description') }}
      </ProjectCard>
      <ProjectCard name="projects.recipes">
        <template v-slot:title>
          {{ t('recipes.project_name') }}
        </template>
        {{ t('recipes.description') }}
      </ProjectCard>
    </ul>
  </Layout>
</template>
