<template>
    <div class="pc_ms_album">
        <div class="albumList_content">
            <div class="albumList_filter">
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.area" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.genre" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.type" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_filter">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in tags.year" :index="`${index}`" :key="index"><a>{{item.name}}</a></el-menu-item>
                    </el-menu>
                </div>
            </div>
            <div class="albumList_list">
                <albumList :albumList="albumList"></albumList>
            </div>
        </div>
    </div>
</template>
<script>
import {getAlbumList} from '../../../../api/pc_getData.js'
import albumList from './p_m_albumList'
export default {
  data() {
    return {
      showTitle: false,
      showSubTitle: false,
      showLogin: false,
      //
      tags: {},
      albumList: [],
      //
      activeIndex: '0'
    };
  },
  created() {
    this._getalbumList()
  },
  methods: {
    // 获取专辑列表
    _getalbumList() {
      getAlbumList().then(res =>{
          if (res.code === 0){
            this.tags = res.albumlib.data.tags
            this.albumList = res.albumlib.data.list
          }
      })
    },
  },
  components: {
    albumList
  }
}
</script>
<style lang="stylus" scoped>
.pc_ms_album
  background: linear-gradient(#F2F6FC, #fff)
  .albumList_content
    display flex
    flex-direction column
    justify-content center
    .albumList_filter
      height 200px
      width 1200px
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
    .albumList_img
      margin 0 auto
    .albumList_list
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