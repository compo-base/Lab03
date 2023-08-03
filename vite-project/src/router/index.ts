import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import OrganizerView from '../views/OrganizerView.vue'
import StudentView from '../views/StudentView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt((route.query?.page as string) || '1') })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/organizer',
      name: 'Organize',
      component: OrganizerView
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
