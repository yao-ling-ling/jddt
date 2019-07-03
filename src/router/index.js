import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Item from '@/components/Item'
import Score from '@/components/Score'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/item',
      name: 'Item',
      component: Item
    },{
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
