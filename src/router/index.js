import Vue from 'vue'
import Router from 'vue-router'
import SubmitRate from '@/components/36hsubmit'
import MainPage from '@/components/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: MainPage},
    { path: '/36hsubmit', component: SubmitRate},
  ]
})
