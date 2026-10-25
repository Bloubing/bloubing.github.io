<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
</script>

<template>
  <div
    @click="$router.back()"
    class="m-5 mt-20 flex cursor-pointer items-center space-x-2 hover:underline group"
  >
    <FontAwesomeIcon
      :icon="faArrowLeft"
      class="group-hover:-translate-x-1 duration-300 transition"
    />
    <p>
      {{ t('back') }}
    </p>
  </div>
</template>
