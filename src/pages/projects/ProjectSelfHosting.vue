<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Heading from '@/components/Heading.vue'
import Layout from '@/shared/DefaultLayout.vue'

const { t } = useI18n({
  messages: {
    en: {
      project_name: 'Self-hosting',
      presentation:
        'I host and manage a local server (Ubuntu Server) in order to use services like Immich and Pi-Hole.',
      links: {
        github: 'Source code',
      },
      why: {
        heading: 'Why?',
        why_1: '- Have better control over my privacy and personal data.',
        why_2:
          '- Replace Google Photos with Immich, a open-source, subscription-free alternative with more storage.',
        why_3: "- Block ads at network level using Pi-Hole's DNS filtering.",
        why_4: '- And, of course, simply enjoy systems administration!',
      },
      features: {
        heading: 'Features',
        feature_1: '- Each service is isolated its dedicated Docker container.',
        feature_2: '- Server monitoring with Beszel and container monitoring with Dockhand.',
        feature_3: '- Secure remote access using Tailscale VPN to avoid port forwarding.',
      },
    },
    fr: {
      project_name: 'Auto-hébergement',
      presentation:
        "J'héberge et administre un serveur local (Ubuntu Server) sur lequel tournent des services comme Immich et Pi-Hole.",
      links: {
        github: 'Code source',
      },
      why: {
        heading: 'Pourquoi ?',
        why_1: '- Avoir un meilleur de contrôle sur ma vie privée et mes données.',
        why_2:
          "- Me passer de Google Photos grâce à Immich, l'alternative sans abonnement et avec plus de stockage.",
        why_3: '- Bloquer les publicités au niveau du réseau avec le filtrage DNS de Pi-Hole.',
        why_4: "- Et bien sûr, goûter aux plaisirs de l'administration systèmes !",
      },
      features: {
        heading: 'Fonctionnalités',
        feature_1: '- Isolation de chaque service dans des conteneurs Docker.',
        feature_2: '- Supervision du serveur avec Bezsel et des conteneurs Docker avec Dockhand.',
        feature_3:
          " - Sécurisation de l'accès distant avec le VPN Tailscale pour éviter toute exposition de ports sur Internet.",
      },
    },
    es: {
      project_name: 'Autoalojamiento',
      presentation:
        'Alojo y administro un servidor local (Ubuntu Server) para utilizar servicios como Immich y Pi-Hole.',
      links: {
        github: 'Código fuente',
      },
      why: {
        heading: '¿Por qué?',
        why_1: '- Tener una mayor privacidad y tener control sobre mis datos.',
        why_2:
          '- Prescindir de Google Fotos gracias a Immich, una alternativa sin suscripción y con más espacio de almacenamiento.',
        why_3: '- Bloquear la publicidad a nivel de red con el filtrado DNS de Pi-Hole.',
        why_4: '- ¡Y obviamente disfrutar de la administración de sistemas!',
      },
      features: {
        heading: 'Funciones',
        feature_1: '- Aislamiento de cada servicio en contenedores Docker.',
        feature_2:
          '- Monitorización del servidor con Bezsel y de los contenedores Docker con Dockhand.',
        feature_3:
          ' - Segurización del acceso remoto con la VPN Tailscale para evitar exponer puertos en Internet.',
      },
    },
  },
})
</script>

<template>
  <Layout>
    <Heading>{{ t('project_name') }}</Heading>
    <p class="bg-primary p-5 border-2 border-base-content list-none">
      {{ t('presentation') }}
    </p>
    <section class="list-none space-y-3">
      <h3 class="text-lg font-bold sm:text-xl">{{ t('why.heading') }}</h3>
      <ul class="space-y-3">
        <li>{{ t('why.why_1') }}</li>
        <li>
          {{ t('why.why_2') }}
        </li>
        <li>
          {{ t('why.why_3') }}
        </li>
        <li>
          {{ t('why.why_4') }}
        </li>
      </ul>
    </section>
    <section class="space-y-3">
      <h3 class="text-lg font-bold sm:text-xl">{{ t('features.heading') }}</h3>
      <ul class="space-y-3">
        <li>
          {{ t('features.feature_1') }}
        </li>
        <li>
          {{ t('features.feature_2') }}
        </li>
        <li>
          {{ t('features.feature_3') }}
        </li>
      </ul>
    </section>

    <section class="flex flex-wrap gap-1">
      <span class="badge badge-neutral">Linux (Debian/Ubuntu)</span>
      <span class="badge badge-neutral">Docker</span>
      <span class="badge badge-neutral">Docker Compose</span>
    </section>
  </Layout>
</template>
