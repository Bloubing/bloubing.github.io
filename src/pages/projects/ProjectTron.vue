<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import GitHubLogo from '@/shared/GitHubLogo.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Jeu TRON</Heading>

        <p class="bg-primary p-5 border-2 border-base-content list-none">
          Un <strong>jeu TRON</strong>, grand classique des jeux d'arcades, en version
          multiplateforme.
        </p>
        <ul class="flex flex-col space-y-4">
          <li>
            <a
              target="_blank"
              href="https://github.com/Bloubing/M2-TRON"
              class="text-blue-500 flex space-x-1 hover:underline"
            >
              <GitHubLogo />
              <p>Code source</p>
            </a>
          </li>
        </ul>

        <section class="list-none space-y-3">
          <h3 class="font-bold mb-">Pourquoi ?</h3>
          <ul class="space-y-3">
            <li>- Projet académique de M2, réalisé en groupe.</li>
            <li>
              - Se familiariser avec plusieurs technologies (NoSQL, WebSockets) de façon ludique.
            </li>
          </ul>
        </section>

        <section class="space-y-3">
          <h3 class="font-bold">Fonctionnalités</h3>
          <ul class="space-y-3">
            <li>- Architecture client–serveur et communication via WebSockets.</li>
            <li>- Jeu multiplateforme (navigateur et Android) avec Cordova.</li>
            <li>
              - Système de <em>lobbies</em>, parties jouables en parallèles, personnalisation des
              joueurs, et classement.
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
