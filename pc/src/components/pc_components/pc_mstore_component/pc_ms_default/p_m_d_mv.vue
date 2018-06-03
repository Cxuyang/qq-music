<template>
  <div class="default_mv">
    <div class="title"><h1>MV</h1></div>
    <div class="menu">
        <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">精选</el-menu-item>
            <el-menu-item index="2">内地</el-menu-item>
            <el-menu-item index="3">韩国</el-menu-item>
            <el-menu-item index="4">港台</el-menu-item>
            <el-menu-item index="5">欧美</el-menu-item>
            <el-menu-item index="6">日本</el-menu-item>
        </el-menu>
    </div>
    <div class="carousel">
        <el-carousel indicator-position="outside" height="450px">
            <el-carousel-item v-for="(item,index) in mvlist" :key="index">
              <div class="carouselWrapper">
                <div class="list-item">
                  <div class="listWrapper" v-for="(itemChild,childIndex) in item.jsonArray" :key="childIndex">
                      <div class="imgWrapper">
                        <a target=_blank :href="itemChild.vid">
                          <img class="listImg" :src="itemChild.picurl">
                          <div class="fidediv"></div>
                          <div class="imgPlay"></div>
                        </a>
                      </div>
                      <span class="mvtitle">{{itemChild.mvtitle}}</span>
                      <span class="singername">{{itemChild.singername}}</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>
<script>
import { getDataForPcMV } from "api/pc_getData"
export default {
  data() {
    return {
      activeIndex: '1',
      mvlist: [],
    };
  },
  created() {
    this.getMvList()
  },
  watch: {
  },
  methods: {
    // 获取MV数据
    getMvList() {
      getDataForPcMV().then(response => {
        let tempStr = ''
        if (typeof response === 'string') {
          tempStr = response.replace('MusicJsonCallback(','')
          tempStr.substring(0,tempStr.length-2)
          this.reSortArray((JSON.parse(tempStr.substring(0,tempStr.length-1))).data.mvlist)
        }
      })
    },
    // 重新排列数据数组
    reSortArray(data) {
        let _this = this
        data.map((item, index) => {
        item.vid = `https://y.qq.com/n/yqq/mv/v/${item.vid}.html`
        if (index % 10 === 0 && data[index + 10]) {
          let jsonArray = [data[index], data[index + 1], data[index + 2], data[index + 3], data[index + 4], data[index + 5], data[index + 6], data[index + 7], data[index + 8], data[index + 9]];
          _this.mvlist.push({ jsonArray });
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.default_mv
    height 600px
    background: linear-gradient(#F2F6FC, #fff)
    padding-top 50px
    .title
      h1
        text-align center
        letter-spacing 15px
        margin-top 0;
    .menu
      width 410px
      min-width 350px  
      margin 0 auto 
      ul,li
        border 0px !important 
        background-color #ebeef500 !important
        a
          font-size 15px
          &:hover
            color #31c27c
    .carouselWrapper
      display flex
      flex-direction column
      .list-item
        display flex
        flex-wrap wrap
        justify-content space-between
        width 1200px
        margin 0 auto
        .listWrapper
          height 150px
          width 224px
          margin-top 30px
          display flex
          flex-direction column
          .imgWrapper
            height 127px
            width 224px
            overflow hidden
            position relative
            .listImg
              height 127px
              width 224px  
              overflow hidden  
              transform: scale(1) translateZ(0)
              transition: transform 0.75s;
            .fidediv
              position absolute
              height 100%
              width 100%
              top 0
              left 0
              background-color #000
              opacity 0
              transition: opacity 0.75s
            .imgPlay
              position absolute
              height 70px
              width 70px
              top 20px
              left  77px
              background: url('../../../../assets/img/play.png') 100% no-repeat
              opacity 0
              transition: opacity 0.75s
            &:hover
              cursor pointer
              background-color #000
              transition: transform 0.75s; 
              .listImg
                transform scale(1.1) translateZ(0)
                transition transform 0.75s
              .fidediv
                opacity 0.2
                transition: opacity 0.75s
              .imgPlay
                opacity 1
                transition: opacity transform 0.75s
          .mvtitle
            width 224px
            height 22px
            font-size 14px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            padding-top 5px
            &:hover
              color #31c27c
              cursor pointer
          .singername
            color: #999
            padding-top 5px
            font-size 14px
            &:hover
              color #31c27c
              cursor pointer
</style>


