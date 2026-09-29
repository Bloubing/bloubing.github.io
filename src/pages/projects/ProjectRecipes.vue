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
        <p>
          <strong>Recettes</strong> est un site de recettes comme Marmiton réalisé avec Laravel,
          Livewire, Tailwind & Alpine.js dans le cadre d'un projet académique, en groupe de 3.
        </p>

        <p>
          Ce projet comprend notamment une gestion des recettes, de commentaires, d'ingrédients et
          de notes. Il est possible d'ajouter des images pour les recettes. Il y a également une
          interface d'administration permettant de gérer les recettes et de modérer les commentaires
          en vérifiant les signalements.
        </p>

        <div>
          <h2 class="font-semibold my-3 text-md">Liens</h2>
          <ul class="flex flex-col space-y-4">
            <li>
              <a
                href="https://github.com/Bloubing/M1-recettes"
                class="text-blue-500 flex space-x-1 hover:underline"
              >
                <GitHubLogo />
                <p>Code source</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>
