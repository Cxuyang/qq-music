<template>
    <div class="pc_ms_songList">
        <div class="songList_content">
            <div class="songList_categories">
                <div class="inline_categories" v-for="(item, index) in categories" v-if="item.items.length > 1" :key="index">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(childItem, childIndex) in item.items" :index="`${childIndex}`" :key="childIndex"><a>{{childItem.categoryName}}</a></el-menu-item>
                    </el-menu>
                </div>
            </div>
            <div class="songList_list">
                <songList :songList="songList"></songList>
            </div>
        </div>
    </div>
</template>
<script>
import {getSongListTags, getSongList} from '../../../../api/pc_getData.js'
import songList from './pc_m_s_songList'
export default {
  data() {
    return {
      showTitle: false,
      showSubTitle: false,
      showLogin: false,
      //
      categories: [],
      songList: [],
      //
      activeIndex: '0'
    };
  },
  created() {
    this._getSongListTags()
    this._getSongList()
  },
  methods: {
    // 获取歌单分类
    _getSongListTags() {
      getSongListTags().then(res => {
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}}`)
        if (tempJson.code === 0){
          this.categories = tempJson.data.categories
        }
      })
    },
    // 获取专辑列表
    _getSongList() {
      getSongList().then(res =>{
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}`)
        if (tempJson.code === 0){
          this.songList = tempJson.data.list
        }
      })
    },

  },
  components: {
    songList
  }
}
</script>
<style lang="stylus" scoped>
.pc_ms_songList
  background: linear-gradient(#F2F6FC, #fff)
  .songList_content
    display flex
    flex-direction column
    justify-content center
    .songList_categories
      height auto
      width 1200px
      margin 30px auto
      padding 34px 0 17px 40px
      .inline_categories
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
    .songList_img
      margin 0 auto
    .songList_list
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