<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  messages: {
    en: {
      back: 'Back',
    },
    fr: {
      back: 'Retour',
    },
    es: {
      back: 'Volver',
    },
  },
})

defineProps({
  back: String,
})
</script>

<template>
  <div class="mt-20 flex">
    <RouterLink
      :to="back"
      class="m-auto inline-block bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white sm:text-lg"
      >{{ t('back') }}</RouterLink
    >
  </div>
</template>
