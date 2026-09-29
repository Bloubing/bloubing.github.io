<script setup lang="ts"></script>

<template>
  <RouterLink
    to="/"
    aria-label="Retour à l'accueil"
    class="relative flex items-center space-x-1 text-3xl font-bold"
  >
    <img
      class="absolute -top-6 -left-6 z-0 h-28 w-28 object-fill"
      src="/src/assets/images/active_shape.png"
      alt="Forme verte du logo"
      aria-hidden="true"
    />

    <img
      class="from-0 z-2 h-13 w-13 transition duration-700 hover:scale-105 hover:rotate-360"
      src="/src/assets/images/bloubi_logo.png"
      alt="Logo de Bloubing"
    />
    <p class="z-2 text-base lg:text-2xl">Bloubing</p>
  </RouterLink>
</template>
