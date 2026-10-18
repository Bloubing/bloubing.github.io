<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import Layout from '@/shared/DefaultLayout.vue'

const { t } = useI18n({
  messages: {
    en: {
      description: 'A Web developer who loves languages',
      projects: 'My projects',
      experience: {
        text: 'Experience',
        experience_1: {
          title: 'Full stack Developer (internship)',
          date: 'feb. 2026 - jul. 2026',
          feature_1:
            '- Rewrote the online customer area for an insure company for doctors (contract and quote management, document uploading and downloading, bill payment, contact features...) in Angular (Typescript) and Django (Python).',
          feature_2:
            '- Full stack features: contract, quote and document management, administration mode, referral form, satisfaction survey and receipt payment.',
          feature_3:
            '- API integration with various internal and external services, REST API design with Swagger documentation.',
          feature_4:
            '- Optimised data import and transformation coming from more than 4 millions CSV lines into a PostgreSQL database.',
          feature_5: '- Waterfall model and agile software development.',
        },
        experience_2: {
          title: 'Laravel Developer (internship) ',
          date: 'jul. 2025 - sept. 2025',
          feature_1: '- Laravel (PHP) development for a property management system (PMS).',
          feature_2:
            '- Full stack features: identity documents storage, expiry of slugs redirecting to digital guides.',
          feature_3: '- English-French translation of the back office.',
          feature_4: '- Agile software development.',
        },
      },
      work: {
        text: 'Selected work',
        tron: {
          project_name: 'Tron Game',
          description: 'A crossplatform version of Tron, the classic arcade game.',
        },
        self_hosting: {
          project_name: 'Self-hosting',
          description: 'I host and manage a local server in order to use multiple services.',
        },
      },
    },
    fr: {
      description: 'Développeur Web qui aime les langues',
      projects: 'Mes projets',
      experience: {
        text: 'Expériences',
        experience_1: {
          title: 'Développeur full-stack - stage',
          date: 'févr. 2026 - juil. 2026',
          feature_1:
            "- Refonte de l'espace client d'une entreprise spécialisée dans les assurances pour médecins avec Angular (Typescript) et Django (Python).",
          feature_2:
            '- Fonctionnalités full-stack : gestion des contrats, devis, documents, mode super-vue, système de parrainage et de satisfaction, paiement de quittances.',
          feature_3:
            '- Intégration API avec de nombreux services internes et externes, conception API REST avec documentation Swagger.',
          feature_4:
            '-  Optimisations PostgreSQL et intégration de données en masse (>4M de lignes).',
          feature_5: '- Méthode en cascade et méthode agile.',
        },
        experience_2: {
          title: 'Développeur Laravel - stage',
          date: 'juil. 2025 - sept. 2025',
          feature_1:
            '- Développement Laravel (PHP) pour une application de gestion de propriétés (PMS).',
          feature_2:
            "- Fonctionnalités full-stack : stockage de pièces d'identité, expiration des slugs menant vers des guides digitaux.",
          feature_3: '- Traduction anglais-français du back-office.',
          feature_4: '- Méthode agile.',
        },
      },
      work: {
        text: 'Sélection de projets',
        tron: {
          project_name: 'Jeu Tron',
          description:
            "Un jeu Tron, grand classique des jeux d'arcade, en version multiplateforme.",
        },
        self_hosting: {
          project_name: 'Auto-hébergement',
          description:
            "J'héberge et administre un serveur local pour profiter de multiples services.",
        },
      },
    },
    es: {
      description: 'Desarrollador Web al que le gustan los idiomas',
      projects: 'Mis proyectos',
      experience: {
        text: 'Experiencias profesionales',
        experience_1: {
          title: 'Desarrollador Web full stack - práctica',
          date: 'feb. 2026 - jul. 2026',
          feature_1:
            '- Rediseño del área de clientes de una empresa especializada en seguros para médicos con Angular (Typescript) y Django (Python).',
          feature_2:
            '- Funciones full stack : gestión de contratos, presupuestos, documentos, modo "supervista", sistema de recomendación y de satisfacción, pago de recibos.',
          feature_3:
            '- Integración API con diversos servicios internos y externos, diseño de API REST con documentación Swagger.',
          feature_4:
            '-  Optimizaciones PostgreSQL e integración masiva de datos (más de 4 millones de líneas).',
          feature_5: '- Metodología en cascada y metodología ágil.',
        },
        experience_2: {
          title: 'Desarrollador Laravel - práctica',
          date: 'jul. 2025 - sept. 2025',
          feature_1: '- Desarrollo Laravel (PHP) para un sistema de gestión de propiedades (PMS).',
          feature_2:
            '- Funciones full stack : almacenamiento de documentos de identidad, expiración de los enlaces a las guías digitales.',
          feature_3: '- Traduccion inglés-francés del back office.',
          feature_4: '- Metodología ágil.',
        },
      },
      work: {
        text: 'Selección de proyectos',
        tron: {
          project_name: 'Juego Tron',
          description:
            'Una versión multiplataforma del juego Tron, el gran clásico de los videojuegos arcade.',
        },
        self_hosting: {
          project_name: 'Autoalojamiento',
          description:
            'Alojo y administro un servidor local para disfrutar de múltiples servicios.',
        },
      },
    },
  },
})
</script>

<template>
  <Layout>
    <section aria-label="introduction" class="px-4 py-20 text-base-content sm:px-8 md:py-32">
      <h1 class="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl">Bloubing</h1>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p class="mt-5 max-w-[50ch] sm:text-lg lg:text-xl">{{ t('description') }}</p>
        <div class="relative mt-10 flex">
          <RouterLink
            :to="{ name: 'projects.index' }"
            class="relative bg-primary text-gray-800 border-base-content border-2 px-5 py-5 text-2xl font-semibold shadow transition-transform duration-300 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:scale-102 hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1000ms] sm:px-15 sm:py-10 md:text-3xl lg:text-4xl"
            >{{ t('projects') }}</RouterLink
          >
          <img
            class="absolute -top-7 left-45 w-24 rotate-[-10deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 hidden sm:block sm:left-60 sm:w-36 md:left-70 lg:left-80"
            src="/src/assets/images/arrow.png"
            alt="Flèche pointant le bouton 'Projets'"
          />
        </div>
      </div>
    </section>
    <div class="mx-5 flex">
      <div class="mx-auto space-y-7 max-w-[50ch] sm:max-w-[100ch]">
        <section aria-labelledby="experiences-heading" class="space-y-3">
          <h2
            id="experiences-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            {{ t('experience.text') }}
          </h2>
          <ul class="space-y-3">
            <ProjectCard>
              <template v-slot:title>{{ t('experience.experience_1.title') }}</template>
              <div class="space-y-3">
                <p class="italic">{{ t('experience.experience_1.date') }}</p>

                <ul class="space-y-3">
                  <li class="font-semibold">
                    {{ t('experience.experience_1.feature_1') }}
                  </li>
                  <li>
                    {{ t('experience.experience_1.feature_2') }}
                  </li>
                  <li>
                    {{ t('experience.experience_1.feature_3') }}
                  </li>
                  <li>
                    {{ t('experience.experience_1.feature_4') }}
                  </li>
                  <li>
                    {{ t('experience.experience_1.feature_5') }}
                  </li>
                </ul>
                <div class="flex flex-wrap gap-1">
                  <span class="badge badge-neutral">Angular</span>
                  <span class="badge badge-neutral">Django</span>
                  <span class="badge badge-neutral">PostgreSQL</span>
                  <span class="badge badge-neutral">Tailwind</span>
                  <span class="badge badge-neutral">Docker</span>
                  <span class="badge badge-neutral">GitLab</span>
                </div>
              </div>
            </ProjectCard>
            <ProjectCard>
              <template v-slot:title>{{ t('experience.experience_2.title') }}</template>
              <div class="space-y-3">
                <p class="italic">{{ t('experience.experience_2.date') }}</p>
                <ul class="space-y-3">
                  <li class="font-semibold">
                    {{ t('experience.experience_2.feature_1') }}
                  </li>
                  <li>
                    {{ t('experience.experience_2.feature_2') }}
                  </li>
                  <li>
                    {{ t('experience.experience_2.feature_3') }}
                  </li>
                  <li>
                    {{ t('experience.experience_2.feature_4') }}
                  </li>
                </ul>
                <div class="flex flex-wrap gap-1">
                  <span class="badge badge-neutral">Laravel</span>
                  <span class="badge badge-neutral">Livewire</span>
                  <span class="badge badge-neutral">Tailwind</span>
                  <span class="badge badge-neutral">MySQL</span>
                  <span class="badge badge-neutral">GitLab</span>
                </div>
              </div>
            </ProjectCard>
          </ul>
        </section>

        <section aria-labelledby="projects-heading" class="space-y-3">
          <h2
            id="projects-heading"
            class="bg-gray-800 px-4 py-2 text-base font-bold text-white sm:text-4xl"
          >
            {{ t('work.text') }}
          </h2>
          <ul class="space-y-3">
            <ProjectCard name="projects.tron">
              <template v-slot:title>{{ t('work.tron.project_name') }}</template>
              {{ t('work.tron.description') }}
            </ProjectCard>
            <ProjectCard name="projects.self_hosting">
              <template v-slot:title>
                {{ t('work.self_hosting.project_name') }}
              </template>
              {{ t('work.self_hosting.description') }}
            </ProjectCard>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
</template>
