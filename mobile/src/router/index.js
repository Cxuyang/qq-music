import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/mobile-components/m-recommend/m-recommend'
import Singer from 'components/mobile-components/m-singer/m-singer'
import SingerDetail from 'components/mobile-components/m-singerdetail/m-singerdetail'
import Disc from 'components/mobile-components/m-disc/m-disc'
import Rank from 'components/mobile-components/m-rank/m-rank'
import Toplist from 'components/mobile-components/m-toplist/m-toplist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/Recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: Disc
      }]
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      component: Rank,
      children: [{
        path: ':id',
        component: Toplist
      }]
    }
  ]
})
