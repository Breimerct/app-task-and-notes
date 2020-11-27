import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import { Store } from 'vuex';
import { StateInterface } from '../store';
import routes from './routes';
import firebase from 'firebase';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route<Store<StateInterface>>(function({ Vue }) {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  Router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const requireAuth = to.matched.some(r => r.meta.requireAuth);

    if (!currentUser && requireAuth) {
      next('login');
    } else if (!requireAuth && currentUser) {
      next('dashboard');
    } else {
      next();
    }
  });

  return Router;
});
