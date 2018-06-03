<template>
  <div class="pc-header">
      <div class="menu">
          <div class="logo"><img src="../../assets/img/music.png">球球音樂</div>
          <el-menu :default-active="activeIndex" active-text-color="#fff" text-color="#000" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="2"><router-link to="/PCMusicstore">音乐馆</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/PCMymusic">我的音乐</router-link></el-menu-item>
            <el-menu-item index="4"><a href="https://y.qq.com/download/index.html" target="_blank">客户端</a></el-menu-item>
            <el-menu-item index="5"><a href="https://y.qq.com/vip/daren_recruit/apply.html" target="_blank">音乐号</a></el-menu-item>
            <el-menu-item index="6"><a href="https://y.qq.com/portal/vipportal/index.html" target="_blank">VIP</a></el-menu-item>
          </el-menu>
          <div class="header-right">
                <el-input placeholder="搜索音乐、MV、歌单、用户" v-model="searchInput">
                    <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <div><a>登录</a></div>                             
                <el-button type="success" >开通绿砖豪华版</el-button>
                <el-button >开通付费包</el-button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            activeIndex:'2',
            searchInput:''
        }
    }  
}
</script>
<style lang="stylus" scoped>
.pc-header
  height 90px
  width 1220px
  margin 0 auto
  padding 0 50px     
  .menu
    height 100%
    display flex
    flex-direction columns
    .logo
      height 100% 
      width 190px
      flex 0 0 190px
      padding 0 10px
      border-bottom solid 1px #e6e6e6
      display flex
      align-items: center; 
      font-size 24px
      img 
        height 64px
        width 64px 
        margin-right 10px 
    ul
      height 100%
      li
        border 0px !important 
        height 100% !important
        a
          color #333
          display block
          height 90px
          line-height 90px
          text-align center
          font-size: 18px 
          &:hover
            color #31c27c
      .is-active
        background-color #31c27c !important        
        &:hover
            color  #fff !important 
            background-color  #31c27c !important 
        a
          color #fff
          &:hover
            color #fff
    .header-right
      flex 0 0 auto
      border-bottom solid 1px #e6e6e6
      display flex
      align-items center 
      a
        position: relative;
        font-size 16px;
        float left;
        width 38px;
        margin 0 10px;
        text-align center;
        &:hover
          color #31c27c
          cursor pointer

</style>



