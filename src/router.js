import Vue from 'vue';
import VueRouter from 'vue-router';

// Imports components
import Users from './views/Users.vue';
import Repositories from './views/Repositories.vue';
import RepositoryDetails from './views/RepositoryDetails.vue';

// Register VueRouter
Vue.use(VueRouter);

// Define routes
const routes = [{
    path: '',
    component: Users
  },
  {
    path: '/repositories/:userName',
    component: Repositories
  },
  {
    path: '/repositories/:repositoryId/readme',
    component: RepositoryDetails
  }
];

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
