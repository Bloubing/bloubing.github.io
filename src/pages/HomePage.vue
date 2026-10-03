<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout >
    <section aria-label="introduction" class="px-4 py-20 text-base-content sm:px-8 md:py-32">
      <h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">Bloubing</h1>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="mt-5 max-w-[50ch] sm:text-lg lg:text-xl">Développeur Web qui aime les langues</p>
        <div class="relative mt-10 flex">
          <RouterLink
            :to="{ name: 'projects.index' }"
            class="relative bg-primary text-gray-800 border-base-content border-2 px-5 py-5 text-2xl font-semibold shadow transition-transform duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-102 hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] sm:px-15 sm:py-10 md:text-3xl lg:text-4xl"
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
    <div class="mx-5 flex">

    <div class="mx-auto space-y-7 max-w-[50ch] sm:max-w-[100ch]">
      <section aria-labelledby="experiences-heading" class="space-y-3">
          <h2
            id="experiences-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Expériences
          </h2>
        <ul class="space-y-3">
          <ProjectCard>
            <template v-slot:title>Développeur full-stack - stage</template>
            <div class="space-y-3">
              <p class="italic">févr. 2026 - juil. 2026</p>

              <ul class="space-y-3">
                <li class="font-semibold">
                  - Refonte de l'espace client d'une entreprise spécialisée dans les assurances pour
                  médecins avec Angular (Typescript) et Django (Python).
                </li>
                <li>
                  - Fonctionnalités full-stack : gestion des contrats, devis, documents, mode
                  super-vue, système de parrainage et de satisfaction, paiement de quittances.
                </li>
                <li>
                  - Intégration API avec de nombreux services internes et externes, conception API
                  REST avec documentation Swagger.
                </li>
                <li>
                  - Optimisations PostgreSQL et intégration de données en masse (>4M de lignes).
                </li>
                <li>- Méthode en cascade et méthode agile.</li>
              </ul>
              <div class="flex flex-wrap gap-1">
                <span class="badge badge-neutral">Angular</span>
                <span class="badge badge-neutral">Django</span>
                <span class="badge badge-neutral">PostgreSQL</span>
                <span class="badge badge-neutral">Tailwind</span>
                <span class="badge badge-neutral">Docker</span>
                <span class="badge badge-neutral">GitLab</span>
              </div>
            </div>
          </ProjectCard>
          <ProjectCard>
            <template v-slot:title>Développeur Laravel - stage</template>
            <div class="space-y-3">
              <p class="italic">juil. 2025 - sept. 2025</p>
              <ul class="space-y-3">
                <li class="font-semibold">
                  - Développement Laravel (PHP) pour une application de gestion de propriétés (PMS).
                </li>
                <li>
                  - Fonctionnalités full-stack : stockage de pièces d'identité, expiration des
                  <em>slugs</em> menant vers des guides digitaux.
                </li>
                <li>- Traduction anglais-français du <em>back-office</em>.</li>
                <li>- Méthode agile.</li>
              </ul>
              <div class="flex flex-wrap gap-1">
                <span class="badge badge-neutral">Laravel</span>
                <span class="badge badge-neutral">Livewire</span>
                <span class="badge badge-neutral">Tailwind</span>
                <span class="badge badge-neutral">MySQL</span>
                <span class="badge badge-neutral">GitLab</span>
              </div>
            </div>
          </ProjectCard>
        </ul>
      </section>

      <section aria-labelledby="projects-heading" class="space-y-3">
          <h2
            id="projects-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            Sélection de projets
          </h2>
        <ul class="space-y-3">
          <ProjectCard name="projects.tron">
            <template v-slot:title>Jeu TRON</template>
            Un jeu TRON, grand classique des jeux d'arcades, en version multiplateforme. 
          </ProjectCard>
          <ProjectCard name="projects.self_hosting">
            <template v-slot:title>Auto-hébergement</template>
            J'héberge et administre un serveur local pour profiter de multiples services.
          </ProjectCard>
        </ul>
      </section>
    </div>
    </div>
  </Layout>
</template>
