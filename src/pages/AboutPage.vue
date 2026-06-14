<script setup lang="ts">
import Heading from '../components/Heading.vue'
import Layout from '../shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>À propos</Heading>
        <p>
          Bonjour ! Je suis un étudiant en informatique et je m'intéresse au développement web et
          aux langues.
        </p>
        <p>Je parle anglais et espagnol couramment, et j'étudie en ce moment l'allemand.</p>
        <p>
          Si vous êtes intéressé par mon profil, contactez-moi en cliquant sur le bouton de bas de
          page !
        </p>
      </div>
    </div>
  </Layout>
</template>
