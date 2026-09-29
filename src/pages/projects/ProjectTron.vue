<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
import GitHubLogo from '@/shared/GitHubLogo.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <div class="space-y-3">
          <Heading>Jeu TRON</Heading>

          <h3 class="text-lg font-bold sm:text-xl">Présentation</h3>
          <p>
            Le <strong>jeu TRON</strong> est un jeu multijoueur inspiré de Tron, jouable à la fois
            dans le navigateur et sur mobile grâce à Cordova. L’application présente une
            architecture client–serveur et une communication via Websockets. Elle permet une
            authentification simple, la création de lobbies, la possibilité de jouer plusieurs
            parties en parallèle et le stockage de statistiques dans MongoDB.
          </p>
          <p>
            Les technologies utilisées étaient Node.js, Cordova, MongoDB, la communication Websocket
            et GitHub.
          </p>

          <div>
            <h2 class="font-semibold my-3 text-md">Liens</h2>
            <ul class="flex flex-col space-y-4">
              <li>
                <a
                  href="https://github.com/Bloubing/M2-TRON"
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
    </div>
  </Layout>
</template>
