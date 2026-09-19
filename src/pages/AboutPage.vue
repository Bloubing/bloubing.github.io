<script setup lang="ts">
import Heading from '../components/Heading.vue'
import Layout from '../shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>À propos</Heading>
        <h3 class="text-lg font-bold sm:text-xl">En bref</h3>
        <p>Bonjour ! Je suis diplômé d'un master en informatique et d'une licence d'anglais.</p>
        <p>Je parle anglais et espagnol couramment et j'ai des bases en allemand.</p>

        <h3 class="text-lg font-bold sm:text-xl">Et à part ça ?</h3>
        <p>
          Si je ne suis pas devant l'ordinateur, je suis sûrement dehors, en train de faire du
          sport. Mes sports du moment ? La callisthénie, le vélo et la course à pied.
        </p>

        <h3 class="text-lg font-bold sm:text-xl">Une opportunité ? Une question ?</h3>
        <p>
          Je suis actuellement ouvert à de nouvelles opportunités, contactez-moi en cliquant sur le
          bouton de bas de page !
        </p>
      </div>
    </div>
  </Layout>
</template>
