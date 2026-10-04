import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LegalNoticesPage from '@/pages/LegalNoticesPage.vue'

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
    {
      path: '/legal-notices',
      name: 'legal_notices',
      meta: { title: 'Mentions légales' },
      component: LegalNoticesPage,
    },
  ],
  scrollBehavior() {
  return { top: 0 }
},
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
