// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import LazzyLoading from 'vue-lazyload'
import 'common/stylus/reset.styl'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(LazzyLoading, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
