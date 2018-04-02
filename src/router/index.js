import Vue from 'vue'
import Router from 'vue-router'
import SubmitRate from '@/components/36hsubmit'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/36hsubmit', component: SubmitRate},
  ]
})
