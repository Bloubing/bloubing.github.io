<script setup lang="ts">
import Heading from '../components/Heading.vue'
import Layout from '../shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>Mentions légales</Heading>
        <h3 class="font-semibold">L'hébergement de ce site est assuré par la société OVH.</h3>
        <p>
          OVH (OVHCLOUD)<br />
          2, rue Kellermann<br />
          59100 ROUBAIX
        </p>
      </div>
    </div>
  </Layout>
</template>
