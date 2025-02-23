import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import LoggingPage from '@/views/LoggingPage.vue';
import HelpPage from '@/views/HelpPage.vue';
import TouchScreenPage from '@/views/TouchScreenPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/touchScreen'
  },
  {
    path: '/touchScreen',
    component: TouchScreenPage
  },
  {
    path: '/logIn',
    component: () => import('@/views/LogInPage.vue'),
  },
  {
    path: '/help',
    component: () => import('@/views/HelpPage.vue'),
  },
  {
    path: '/logging',
    component: () => import('@/views/LoggingPage.vue'),
  },
  {
    path: '/terms',
    component: () => import('@/views/TermsOfUsePage.vue'),
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab3'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'tab1/profile',
        component: () => import('@/views/ProfilePage.vue'),
      },
      {
        path: 'tab1/settings',
        component: () => import('@/views/SettingsPage.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Tab5Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
