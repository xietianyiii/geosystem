import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main/index.vue' 
import Serve from '../views/serve/index.vue'
import MapServer from '../views/serve/mapServe/mapServe.vue'
import ModelServer from '../views/serve/modelServe/modelServe.vue'
import ObliquePhotographServer from '../views/serve/obliquePhotographServer/obliquePhotographServer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
{
  path:'/main',
  name: 'main',
  component:Main,
  meta: {
    title: 'DataServer-main'
  },
  redirect: '/main/serve',
  children: [{
    path: 'serve',
    name: 'serve',
    component: Serve,
    meta: {},
    redirect: '/main/serve/mapServer',
      children: [{
        path: 'mapServer',
        name: 'mapServer',
        component: MapServer
      },{
        path: 'modelServer',
        name: 'modelServer',
        component: ModelServer
      },{
        path: 'obliquePhotographServer',
        name: 'obliquePhotographServer',
        component: ObliquePhotographServer
      }]
  }]
},

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
