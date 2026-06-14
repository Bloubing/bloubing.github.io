import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectIndex from '@/pages/projects/ProjectIndex.vue'
import ProjectMonEspace from '@/pages/projects/ProjectMonEspace.vue'
import ProjectInnovGuide from '@/pages/projects/ProjectInnovGuide.vue'
import ProjectPersonalWebsite from '@/pages/projects/ProjectPersonalWebsite.vue'
import ProjectRecipes from '@/pages/projects/ProjectRecipes.vue'
import ProjectSelfHosting from '@/pages/projects/ProjectSelfHosting.vue'
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
      path: '/projects/monespace',
      name: 'projects.monespace',
      meta: { title: 'Mon Espace' },
      component: ProjectMonEspace,
    },
    {
      path: '/projects/innovguide',
      name: 'projects.innovguide',
      meta: { title: 'InnovGuide' },
      component: ProjectInnovGuide,
    },
    {
      path: '/projects/personal-website',
      name: 'projects.personal_website',
      meta: { title: 'Site personnel' },
      component: ProjectPersonalWebsite,
    },
    {
      path: '/projects/self-hosting',
      name: 'projects.self_hosting',
      meta: { title: 'Auto-hébergement' },
      component: ProjectSelfHosting,
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
