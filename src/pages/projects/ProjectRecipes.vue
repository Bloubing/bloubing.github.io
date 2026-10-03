<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import GitHubLogo from '@/shared/GitHubLogo.vue'
</script>

<template>
  <Layout back="/projects">
    <template v-slot:heading>Recettes</template>
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Recettes</Heading>
        <p class="bg-primary p-5 border-2 border-base-content list-none">
          <strong>Recettes</strong>, un site façon Marmiton où partager ses créations culinaires !
        </p>
        <ul class="flex flex-col space-y-4">
          <li>
            <a
              target="_blank"
              href="https://github.com/Bloubing/M1-recettes"
              class="text-blue-500 flex space-x-1 hover:underline"
            >
              <GitHubLogo />
              <p>Code source</p>
            </a>
          </li>
        </ul>

        <section class="list-none space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">Pourquoi ?</h3>
          <ul class="space-y-3">
            <li>- Projet académique de M1, réalisé en groupe de 3.</li>
            <li>- Développer une application Web de zéro avec un framework utlisant l'architecture MVC (Laravel).</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">Fonctionnalités</h3>
          <ul class="space-y-3">
            <li>- Gestion complète des recettes, brouillons et favoris.</li>
            <li>- Possibilité de noter, de catégoriser et de commenter les recettes.</li>
            <li>- Authentification avec vérification de l'e-mail ou OAuth via GitHub.</li>
            <li>
              - Interface d'administration et de modération des recettes et des commentaires basée
              sur des signalements.
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
