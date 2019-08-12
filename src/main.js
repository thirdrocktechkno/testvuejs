import Vue from 'vue';
import App from './App.vue';

// Import Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import router
import {
  router
} from './router';

// Imports Shared Global components
import Search from './shared/components/Search.vue';
import List from './shared/components/List.vue';

// Registers Shared Global components
Vue.component('app-search', Search);
Vue.component('app-list', List);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
