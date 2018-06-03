<template>
    <div class="pc_ms_mv">
        <div class="mv_content">
            <div class="mv_categories">
                <div class="inline_categories">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in categories.area" :index="`${index}`" :key="index"><a>{{item.title}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_categories">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in categories.tag" :index="`${index}`" :key="index"><a>{{item.title}}</a></el-menu-item>
                    </el-menu>
                </div>
                <div class="inline_categories">
                    <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
                        <el-menu-item v-for="(item, index) in categories.year" :index="`${index}`" :key="index"><a>{{item.title}}</a></el-menu-item>
                    </el-menu>
                </div>
            </div>
            <div class="mv_list">
                <mvlistComponent :mvlists="mvlist"></mvlistComponent>
            </div>
        </div>
    </div>
</template>
<script>
import {getAllMv} from '../../../../api/pc_getData.js'
import mvlistComponent from './pc_ms_mvList'
const categoriesLen = 15
export default {
  data() {
    return {
      categories: {},
      mvlist: [],
      //
      activeIndex: '0'
    };
  },
  created() {
    this._getAllMv()
  },
  methods: {
    // 获取mv数据
    _getAllMv() {
      getAllMv().then(res => {
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}}`)
        if (tempJson.code === 0){                    
          let tempArray = []
          tempJson.data.taglist.tag.map((item, index) => {
            if(index > categoriesLen) {
              return
            }
            tempArray.push(item)
          })
          tempJson.data.taglist.tag = tempArray
          this.categories = tempJson.data.taglist
          tempJson.data.mvlist.map(item => {
            item.vid = `https://y.qq.com/n/yqq/mv/v/${item.vid}.html`
          })
          this.mvlist = tempJson.data.mvlist
        }
      })
    },
  },
  components: {
    mvlistComponent
  }
}
</script>
<style lang="stylus" scoped>
.pc_ms_mv
  background: linear-gradient(#F2F6FC, #fff)
  .mv_content
    display flex
    flex-direction column
    justify-content center
    .mv_categories
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
    .mv_img
      margin 0 auto
    .mv_list
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