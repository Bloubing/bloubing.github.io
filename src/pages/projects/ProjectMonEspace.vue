<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/projects">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <div class="space-y-3">
          <Heading>Stage Mon Espace</Heading>

          <h3 class="text-lg font-bold sm:text-xl">Présentation</h3>
          <p>
            <strong>Mon Espace</strong> est un espace client dédiés aux assurés de Branchet, qui se
            spécialise dans les assurances pour les médecins. Il permet notamment aux utilisateurs
            de consulter leurs contrats et leurs devis, de télécharger et de téléverser des
            documents, de consulter leurs formation et de modifier leur profil. J'ai travaillé sur
            ce projet lors d'un stage de 6 mois.
          </p>
          <p>Les technologies utilisées étaient Angular, Django, Tailwind, PostgreSQL et GitLab.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>
