<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'
</script>

<template>
  <Layout back="/experiences">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <div class="space-y-3">
          <Heading>Stage Laravel</Heading>

          <h3 class="text-lg font-bold sm:text-xl">Présentation</h3>
          <p>
            Un PMS (logiciel de gestion de propriétés) qui vise à faciliter la gestion des
            réservations, le suivi des disponibilités et les autres tâches liées à la location de
            courte durée. J'ai travaillé sur ce projet lors d'un stage de 2 mois.
          </p>
          <p>Les technologies utilisées étaient Laravel, Livewire, MySQL et GitLab.</p>
        </div>
        <div class="space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">Ajout de fonctionnalités</h3>
          <p>
            J'ai ajouté des fonctionnalités comme l'ajout d'une date d'expiration des liens générés
            vers le guide digital des voyageurs, le stockage sécurisé de pièces d'identité des
            voyageurs, et la personnalisation de composants Filament pour rendre plus simple
            l'utilisation du back-office.
          </p>
        </div>
        <div class="space-y-3">
          <h3 class="text-lg font-bold sm:text-xl">Correction de bugs</h3>
          <p>
            J'ai corrigé plusieurs bugs sur le front-office comme l'affichage de modaux sur une
            carte interactive de recommandations touristiques, ou encore la correction de
            l'affichage de certains composants sur la page de bienvenue du guide digital. J'ai aussi
            fourni une traduction de l'anglais vers le français sur le back-office. Enfin, j'ai
            rédigé de la documentation technique sur mes tâches pour aider à la collaboration au
            sein de mon équipe.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
