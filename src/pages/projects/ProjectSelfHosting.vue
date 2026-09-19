<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Auto-hébergement</Heading>

        <p>
          J'héberge chez moi plusieurs services comme Immich, Pihole et Beszel qui sont tous isolés
          dans leur conteneur Docker respectif. J'utilise le VPN Tailscale pour accéder à ces
          services depuis l'extérieur.
        </p>
      </div>
    </div>
  </Layout>
</template>
