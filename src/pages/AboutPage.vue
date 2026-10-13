<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Heading from '../components/Heading.vue'
import Layout from '../shared/DefaultLayout.vue'

const { t } = useI18n({
  messages: {
    en: {
      heading: 'About',
      in_short: {
        title: 'In short',
        text_1: "Hi! I have a Master's degree in Computer Science as well as a Bachelor's degree in English literature.",
        text_2: "I speak English and Spanish fluently and I have a basic knowledge of German."
      },
      what_else:  {
        title: 'What else?',
        text: "If not in front of the computer, I spend my time outside exercising, biking or running.",
      },
      opportunity_question:  {
        title: 'An opportunity? A question?',
        text: "I'm currently open to new opportunities: contact me with the button at the bottom of the page!",
      }
    },
    fr: {
      heading: 'About',
        in_short: {
        title: 'En bref',
        text_1: "Bonjour ! Je suis diplômé d'un master en informatique et d'une licence d'anglais.",
        text_2: "Je parle anglais et espagnol couramment et j'ai des bases en allemand.",
      },
      what_else:  {
        title: 'Et à part ça ?',
        text: "Si je ne suis pas devant l'ordinateur, je suis sûrement dehors, en train de faire du sport. Mes sports du moment ? La callisthénie, le vélo et la course à pied.",
      },
      opportunity_question:  {
        title: 'Une opportunité ? Une question ?',
        text: "Je suis actuellement ouvert à de nouvelles opportunités, contactez-moi en cliquant sur le bouton de bas de page !",
      }
    },
  }
})
</script>

<template>
  <Layout back="/">
    <div class="mx-5 flex">
      <div class="mx-auto max-w-[50ch] space-y-5 sm:max-w-[65ch]">
        <Heading>{{t('heading')}}</Heading>
        <h3 class="text-lg font-bold sm:text-xl">
          {{t('in_short.title')}}
        </h3>
        <p>
          {{t('in_short.text_1')}}
        </p>
        <p>
          {{t('in_short.text_2')}}
        </p>

        <h3 class="text-lg font-bold sm:text-xl">
          {{t('what_else.title')}}
        </h3>
        <p>
          {{t('what_else.text')}}
        </p>

        <h3 class="text-lg font-bold sm:text-xl">
          {{t('opportunity_question.title')}}
        </h3>
        <p>
          {{t('opportunity_question.text')}}
        </p>
      </div>
    </div>
  </Layout>
</template>
