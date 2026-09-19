import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ExperienceIndex from '@/pages/experiences/ExperienceIndex.vue'
import ExperienceDjangoAngularInternship from '@/pages/experiences/ExperienceDjangoAngularInternship.vue'
import ExperienceLaravelInternship from '@/pages/experiences/ExperienceLaravelInternship.vue'
import ProjectIndex from '@/pages/projects/ProjectIndex.vue'
import ProjectRecipes from '@/pages/projects/ProjectRecipes.vue'
import ProjectSelfHosting from '@/pages/projects/ProjectSelfHosting.vue'
import ProjectTron from '@/pages/projects/ProjectTron.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/experiences',
      name: 'experiences.index',
      component: ExperienceIndex,
      meta: { title: 'Expériences' },
    },
    {
      path: '/experiences/django-angular-internship',
      name: 'experiences.django-angular-internship',
      meta: { title: 'Stage Django Angular' },
      component: ExperienceDjangoAngularInternship,
    },
    {
      path: '/experiences/laravel-internship',
      name: 'experiences.laravel-internship',
      meta: { title: 'Stage Laravel' },
      component: ExperienceLaravelInternship,
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: ProjectIndex,
      meta: { title: 'Projets' },
    },
    {
      path: '/projects/recipes',
      name: 'projects.recipes',
      component: ProjectRecipes,
      meta: { title: 'Recettes' },
    },
    {
      path: '/projects/self-hosting',
      name: 'projects.self_hosting',
      meta: { title: 'Auto-hébergement' },
      component: ProjectSelfHosting,
    },
    {
      path: '/projects/tron',
      name: 'projects.tron',
      meta: { title: 'Jeu TRON' },
      component: ProjectTron,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'À propos' },
      component: AboutPage,
    },
  ],
})

router.beforeEach((to, from, next) => {
  // Default title
  let pageTitle = 'Bloubing'

  if (to.meta.title) {
    let dynamicTitle = to.meta.title
    pageTitle = `${dynamicTitle} - ${pageTitle}`
  }

  document.title = pageTitle

  next()
})

export default router
