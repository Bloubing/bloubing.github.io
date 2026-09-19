<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout>
    <section aria-label="introduction" class="px-4 py-20 text-gray-800 sm:px-8 md:py-32">
      <h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">Bloubing</h1>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="mt-5 max-w-[50ch] sm:text-lg lg:text-xl">Développeur Web qui aime les langues</p>
        <div class="relative mt-10 flex">
          <RouterLink
            to="/projects"
            class="relative bg-pistachio px-5 py-5 text-2xl font-semibold shadow transition-transform duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-102 hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] sm:px-15 sm:py-10 md:text-3xl lg:text-4xl"
            >Mes projets</RouterLink
          >
          <img
            class="absolute -top-7 left-45 w-24 rotate-[-10deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 sm:left-60 sm:w-36 md:left-70 lg:left-80"
            src="/src/assets/images/arrow.png"
            alt="Flèche pointant le bouton 'Projets'"
          />
        </div>
      </div>
    </section>

    <div>
      <section aria-labelledby="projects-heading">
        <div class="mx-4">
          <h2
            id="technologies-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Expériences
          </h2>
        </div>
        <ul>
          <ProjectCard to="/experiences/django-angular-internship">
            <template v-slot:title>Développeur full-stack</template>
            M2<br />
            février 2026 - juillet 2026<br />
            Stage : Un espace client avec Django et Angular.
          </ProjectCard>
          <ProjectCard to="/experiences/laravel-internship">
            <template v-slot:title>Développeur Laravel</template>
            M1<br />
            juillet 2025 - septembre 2025<br />
            Stage : Un PMS avec Laravel et Livewire.
          </ProjectCard>
        </ul>
      </section>
    </div>

    <div>
      <section aria-labelledby="projects-heading">
        <div class="mx-4">
          <h2
            id="technologies-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Sélection de projets
          </h2>
        </div>
        <ul>
          <ProjectCard to="/projects/tron">
            <template v-slot:title>Jeu TRON</template>
            Un jeu TRON multijoueur.
          </ProjectCard>
          <ProjectCard to="/projects/self-hosting">
            <template v-slot:title>Auto-hébergement</template>
            Un serveur qui héberge des services comme Pihole et Immich.
          </ProjectCard>
        </ul>
      </section>
    </div>
  </Layout>
</template>
