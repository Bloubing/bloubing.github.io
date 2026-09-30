<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout>
    <section aria-label="introduction" class="px-4 py-20 text-base-content sm:px-8 md:py-32">
      <h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">Bloubing</h1>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="mt-5 max-w-[50ch] sm:text-lg lg:text-xl">Développeur Web qui aime les langues</p>
        <div class="relative mt-10 flex">
          <RouterLink
            :to="{ name: 'projects.index' }"
            class="relative bg-primary text-gray-800 px-5 py-5 text-2xl font-semibold shadow transition-transform duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-102 hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] sm:px-15 sm:py-10 md:text-3xl lg:text-4xl"
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
          <ProjectCard>
            <template v-slot:title>Développeur full-stack</template>
            <p class="italic mb-1">févr. 2026 - juil. 2026</p>
            <ul class="space-y-5">
              <li class="space-y-3">
                Un espace client dédiés aux assurés de l'entreprise de stage, qui se spécialise dans
                les assurances pour les médecins. Il permet notamment aux utilisateurs de consulter
                leurs contrats et leurs devis, de télécharger et de téléverser des documents, de
                consulter leurs formation et de modifier leur profil. J'ai travaillé sur ce projet
                lors d'un stage de 6 mois. J'ai participé au développement de l'application web du
                côté front-end et back-end, ainsi qu'à l'intégration de l'application avec les
                autres projets internes et les systèmes externes via des API.
              </li>
              <li class="flex flex-wrap gap-1">
                <span class="badge badge-primary">Angular</span>
                <span class="badge badge-primary">Django</span>
                <span class="badge badge-primary">PostgreSQL</span>
                <span class="badge badge-primary">Tailwind</span>
                <span class="badge badge-primary">Docker</span>
                <span class="badge badge-primary">GitLab</span>
              </li>
            </ul>
          </ProjectCard>
          <ProjectCard>
            <template v-slot:title>Développeur Laravel</template>
            <p class="italic mb-1">juil. 2025 - sept. 2025</p>
            <ul class="space-y-5">
              <li class="space-y-3">
                Un PMS (logiciel de gestion de propriétés) qui vise à faciliter la gestion des
                réservations, le suivi des disponibilités et les autres tâches liées à la location
                de courte durée. J'ai travaillé sur ce projet lors d'un stage de 2 mois.
              </li>
              <li class="space-y-3">
                J'ai ajouté des fonctionnalités comme l'ajout d'une date d'expiration des liens
                générés vers le guide digital des voyageurs, le stockage sécurisé de pièces
                d'identité des voyageurs, et la personnalisation de composants Filament pour rendre
                plus simple l'utilisation du back-office.
              </li>
              <li class="space-y-3">
                J'ai corrigé plusieurs bugs sur le front-office comme l'affichage de modaux sur une
                carte interactive de recommandations touristiques, ou encore la correction de
                l'affichage de certains composants sur la page de bienvenue du guide digital. J'ai
                aussi fourni une traduction de l'anglais vers le français sur le back-office. Enfin,
                j'ai rédigé de la documentation technique sur mes tâches pour aider à la
                collaboration au sein de mon équipe.
              </li>
              <li class="flex flex-wrap gap-1">
                <span class="badge badge-primary">Laravel</span>
                <span class="badge badge-primary">Livewire</span>
                <span class="badge badge-primary">Tailwind</span>
                <span class="badge badge-primary">MySQL</span>
                <span class="badge badge-primary">GitLab</span>
              </li>
            </ul>
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
          <ProjectCard name="projects.tron">
            <template v-slot:title>Jeu TRON</template>
            Un jeu TRON multijoueur.
          </ProjectCard>
          <ProjectCard name="projects.self_hosting">
            <template v-slot:title>Auto-hébergement</template>
            Un serveur qui héberge des services comme Pihole et Immich.
          </ProjectCard>
        </ul>
      </section>
    </div>
  </Layout>
</template>
