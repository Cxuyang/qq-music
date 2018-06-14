import Vue from 'vue'
import Router from 'vue-router'
// import PCMusicstore from './../components/pc_components/pc_musicstore'
// import PCMymusic from './../components/pc_components/pc_mymusic'
// //
// import PCMSdefault from './../components/pc_components/pc_mstore_component/pc_ms_default/pc_ms_default.vue'
// import PCMSsinger from './../components/pc_components/pc_mstore_component/pc_ms_singer/pc_ms_singer.vue'
// import PCMSalbum from './../components/pc_components/pc_mstore_component/pc_ms_album/pc_ms_album.vue'
// import PCMSSongList from './../components/pc_components/pc_mstore_component/pc_ms_songList/pc_ms_songList.vue'
// import PCMSradio from './../components/pc_components/pc_mstore_component/pc_ms_radio/pc_ms_radio.vue'
// import PCMSmv from './../components/pc_components/pc_mstore_component/pc_ms_mv/pc_ms_mv.vue'
// import PCSingerDetail from './../components/pc_components/pc_singerDetail/pc_singerDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/PCMusicstore/PCMSdefault'
    },{
      path: '/PCMusicstore',
      redirect: '/PCMusicstore/PCMSdefault'
    }
    ,{
      path: '/PCMusicstore',
      name: 'PCMusicstore',
      component: (resolve) => require(['./../components/pc_components/pc_musicstore'], resolve),
      children:[
        {
          path: '/PCMusicstore/PCMSdefault',
          name: 'PCMSdefault',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_default/pc_ms_default.vue'], resolve),
        },{
          path: '/PCMusicstore/PCMSsinger',
          name: 'PCMSsinger',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_singer/pc_ms_singer.vue'], resolve),
        },{
          path: '/PCMusicstore/PCMSalbum',
          name: 'PCMSalbum',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_album/pc_ms_album.vue'], resolve),
        },{
          path: '/PCMusicstore/PCMSSongList',
          name: 'PCMSSongList',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_songList/pc_ms_songList.vue'], resolve),
        },{
          path: '/PCMusicstore/PCMSradio',
          name: 'PCMSradio',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_radio/pc_ms_radio.vue'], resolve),
        },{
          path: '/PCMusicstore/PCMSmv',
          name: 'PCMSmv',
          component: (resolve) => require(['./../components/pc_components/pc_mstore_component/pc_ms_mv/pc_ms_mv.vue'], resolve),
        },{
          path: '/PCMusicstore/PCSingerDetail/:singermid',
          name: 'PCSingerDetail',
          component: (resolve) => require(['./../components/pc_components/pc_singerDetail/pc_singerDetail.vue'], resolve),
        }]
    },{
      path: '/PCMymusic',
      name: 'PCMymusic',
      component: (resolve) => require(['./../components/pc_components/pc_mymusic'], resolve),
    }    
  ]
})
