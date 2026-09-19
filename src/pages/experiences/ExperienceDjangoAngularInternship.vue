<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/experiences">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <div class="space-y-3">
          <Heading>Stage Django Angular</Heading>

          <h3 class="text-lg font-bold sm:text-xl">Présentation</h3>
          <p>
            Un espace client dédiés aux assurés de l'entreprise de stage, qui se spécialise dans les
            assurances pour les médecins. Il permet notamment aux utilisateurs de consulter leurs
            contrats et leurs devis, de télécharger et de téléverser des documents, de consulter
            leurs formation et de modifier leur profil. J'ai travaillé sur ce projet lors d'un stage
            de 6 mois.
          </p>
          <p>
            J'ai participé au développement de l'application web du côté front-end et back-end,
            ainsi qu'à l'intégration de l'application avec les autres projets internes et les
            systèmes externes via des API.
          </p>
          <p>Les technologies utilisées étaient Angular, Django, Tailwind, PostgreSQL et GitLab.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>
