<template>
    <div class="musicstore">
        <div class="menu">
            <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/PCMusicstore/PCMSdefault">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/PCMusicstore/PCMSsinger">歌手</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/PCMusicstore/PCMSalbum">专辑</router-link></el-menu-item>
            <el-menu-item index="4"><a @click="message">排行榜</a></el-menu-item>
            <el-menu-item index="5"><router-link to="/PCMusicstore/PCMSSongList">分类歌单</router-link></el-menu-item>
            <el-menu-item index="6"><router-link to="/PCMusicstore/PCMSradio">电台</router-link></el-menu-item>
            <el-menu-item index="7"><router-link to="/PCMusicstore/PCMSmv">MV</router-link></el-menu-item>
            <el-menu-item index="8"><a @click="message">数字专辑</a></el-menu-item>
          </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data(){
      return {
          activeIndex:'1',
      }
  },
  methods: {
    message() {
        this.$message({
            type: 'warning',
            message: '功能暂未开放,请等待博主的完善'
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
.musicstore
    .menu
      width 630px
      min-width 630px  
      margin 0 auto 
      ul,li
        border 0px !important 
        a
          font-size 15px
          &:hover
            color #31c27c
</style>



