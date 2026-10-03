<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] sm:max-w-[65ch]">
        <Heading>Projets</Heading>
        <p class="mb-5">Cliquez sur un des projets pour en savoir plus :</p>
        <ul class="space-y-3">
          <ProjectCard name="projects.tron">
            <template v-slot:title>Jeu TRON</template>
            Un jeu TRON, grand classique des jeux d'arcades, en version multiplateforme. 
          </ProjectCard>
          <ProjectCard name="projects.self_hosting">
            <template v-slot:title>Auto-hébergement</template>
            J'héberge et administre un serveur local pour profiter de multiples services.
          </ProjectCard>
          <ProjectCard name="projects.recipes">
            <template v-slot:title>Recettes</template>
            Un site façon Marmiton où partager ses créations culinaires ! 
          </ProjectCard>
        </ul>
          
      </div>
    </div>
  </Layout>
</template>
