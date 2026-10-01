<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Auto-hébergement</Heading>
        <p class="bg-primary p-5 border-2 border-base-content list-none">
          J'héberge et administre un serveur local (Ubuntu Server) sur lequel tournent des services
          comme Immich et Pi-Hole.
        </p>
        <section class="list-none space-y-3">
          <h3 class="font-bold mb-">Pourquoi ?</h3>
          <ul class="space-y-3">
            <li>- Avoir un meilleur de contrôle sur ma vie privée et mes données.</li>
            <li>
              - Me passer de Google Photos grâce à Immich, l'alternative sans abonnement et avec
              plus de stockage.
            </li>
            <li>- Bloquer les publicités au niveau du réseau avec le filtrage DNS de Pi-Hole.</li>
            <li>- Et bien sûr, goûter aux plaisirs de l'administration systèmes !</li>
          </ul>
        </section>
        <section class="space-y-3">
          <h3 class="font-bold">Fonctionnalités</h3>
          <ul class="space-y-3">
            <li>- Isolation de chaque service dans des conteneurs Docker.</li>
            <li>- Supervision du serveur avec Bezsel et des conteneurs Docker avec Dockhand.</li>
            <li>
              - Sécurisation de l'accès distant avec le VPN Tailscale pour éviter toute exposition
              de ports sur Internet.
            </li>
          </ul>
        </section>

        <div class="flex flex-wrap gap-1">
          <span class="badge badge-neutral">Linux (Debian/Ubuntu)</span>
          <span class="badge badge-neutral">Docker</span>
          <span class="badge badge-neutral">Docker Compose</span>
        </div>
      </div>
    </div>
  </Layout>
</template>
