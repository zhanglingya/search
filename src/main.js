import Vue from 'vue'
import index from './index.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './index.css'

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(index),
}).$mount('#system')



