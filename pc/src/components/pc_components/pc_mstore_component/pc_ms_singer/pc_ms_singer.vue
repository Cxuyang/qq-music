<template>
    <div class="pc_ms_singer">
        <div class="singerList_header">
            <div class="info-content">
                <transition name="show">
                    <div class="title" v-if="showTitle">万千歌手 尽在眼前</div>
                </transition>
                <transition name="show">
                    <div class="sub-title" v-if="showSubTitle">登录查看你的关注歌手</div>
                </transition>
                <transition name="show">
                    <button class="login" v-if="showLogin">立即登录</button>
                </transition>
            </div>
        </div>
        <div class="singerList_content">
            <div class="singerList_filter">
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.index" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.area" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.sex" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.genre" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
            </div>
            <div class="singerList_img">
                <singerAvatar :singerlist="singerlist"></singerAvatar>
            </div>
            <div class="singerList_list">
                <singerList :singerlist="singerlist"></singerList>
            </div>
        </div>
    </div>
</template>
<script>
import {getDataForPcSingerList} from '../../../../api/pc_getData.js'
import singerAvatar from './p_m_s_singerAvatar'
import singerList from './p_m_s_singerList'
export default {
  data() {
    return {
      showTitle: false,
      showSubTitle: false,
      showLogin: false,
      //
      tags: {},
      singerlist: [],
      //
      activeIndex: '0'
    };
  },
  mounted() {
    this.showTitle = true;
    setTimeout(()=>{
        this.showSubTitle = true
    },100)
    setTimeout(()=>{
        this.showLogin = true
    },200)
  },
  created() {
    this._getSingerList()
  },
  methods: {
    // 获取歌手列表
    _getSingerList() {
      getDataForPcSingerList().then(res =>{
          if (res.code === 0){
            this.tags = res.singerList.data.tags
            this.reWriteSingerImg(res.singerList.data.singerlist)
          }
      })
    },
    // 拼接歌手图片(注意我用的是浅拷贝)
    reWriteSingerImg(singerlist) {
        singerlist.map(item =>{
          item.singer_pic = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${item.singer_mid}.jpg?max_age=2592000`
        })
        this.singerlist = singerlist
    }
  },
  components: {
    singerAvatar,
    singerList
  }
}
</script>
<style lang="stylus" scoped>
.pc_ms_singer
  .singerList_header
    height 376px
    width 100%
    background url(../../../../assets/img/bg_singer.jpg) 50% 0 repeat-x
    display: flex
    .info-content 
      margin: 0 auto
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
    .title 
        color: #fff;
        font-family: 'Microsoft YaHei'
        font-weight: 500
        font-size: 60px
        margin-bottom: 10px
    .sub-title 
        color: #fff;
        font-family: 'Microsoft YaHei'
        font-weight: 200
        font-size: 26px
        margin-bottom: 20px   
    .login 
        width: 174px
        height: 48px
        background-color: #fff0
        color: #fff
        font-size: 20px
        border: 1px solid #ffffff30
        transition border 0.5s
        border-radius: 3px
        &:hover 
          cursor: pointer
          border: 1px solid #fff
          transition border 0.5s
  .singerList_content
    display flex
    flex-direction column
    justify-content center
    .singerList_filter
      height 200px
      width 1200px
      background-color #fbfbfd
      margin 30px auto
      padding 34px 0 17px 40px
      .inline_filter
        height 30px
        width 100%
        margin-bottom 20px
        ul
          height 30px
          border 0px !important 
          background-color #ebeef500 !important
          li
            height 30px
            padding 0 8px
            margin 0 12px 0 0
            line-height 30px
            border 0px !important 
            background-color #ebeef500 !important
            font-size 14px
            a
              line-height 30px
              &:hover
                color #31c27c
          .is-active
            background-color #31c27c !important
            color #fff !important
    .singerList_img
      margin 0 auto
    .singerList_list
      margin 0 auto
/* 设置持续时间和动画函数 */
.show-enter-active 
    transition: all 1s ease;
.show-leave-active 
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
.show-enter, .show-leave-to 
    transform: translateY(20px);
    opacity: 0;
</style>