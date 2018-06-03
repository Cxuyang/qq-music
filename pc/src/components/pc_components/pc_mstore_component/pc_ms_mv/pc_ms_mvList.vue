<template>
  <div class="mv_list">
    <div class="title">
        <h2>全部</h2>
    </div>
    <div class="carousel" v-if="mvlists.length>0">
        <div class="list-item">
            <div class="listWrapper" v-for="(item,index) in mvlists" :key="index">
                <div class="imgWrapper">
                    <a :href="item.vid" target="_blank">
                        <img class="listImg" :src="item.picurl">
                        <div class="fidediv"></div>
                        <div class="imgPlay"></div>
                    </a>
                </div>
                <span class="mv_name">{{item.mvtitle}}</span>
                <span class="singer_name">{{item.singername}}</span>
                <span class="mv_time">播放量:{{item.listennum}}&nbsp;{{item.publictime}}</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
const mvsListLen = 20
export default {
  props: {
    mvlists: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
};
</script>
<style lang="stylus" scoped>
.mv_list
    width 1200px
    background: linear-gradient(#F2F6FC, #fff)
    .title
      height 60px
      h2
        float left
        font-size 24px
        font-weight 400
        line-height 58px
        margin 0px
  .list-item
    display flex
    flex-direction row
    justify-content space-between
    flex-wrap wrap
    .listWrapper
      height 300px
      width 285px
      margin-bottom 20px
      display flex
      flex-direction column
      .imgWrapper
        height 162px
        width 285px
        overflow hidden
        position relative
        margin-bottom 5px
        .listImg
          height 162px
          width 285px  
          overflow hidden  
          transform: scale(1) translateZ(0)
          transition: transform 0.75s
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
          top 46px
          left 107px
          background: url('../../../../assets/img/play.png') 100% no-repeat
          opacity 0
          transition: opacity 0.75s
        &:hover
          cursor pointer
          background-color #000
          transition: transform 0.75s
          .listImg
            transform scale(1.1) translateZ(0)
            transition transform 0.75s
          .fidediv
            opacity 0.2
            transition: opacity 0.75s
          .imgPlay
            opacity 1
            transition: opacity transform 0.75s
      .mv_name
        width 100%
        height 22px
        font-size 14px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        padding-top 5px
        &:hover
          color #31c27c
          cursor pointer
      .singer_name
        color: #999
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        height: 22px
        font-size 14px
        padding-top 5px
        &:hover
          color #31c27c
          cursor pointer
      .mv_time
        color: #999
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        height: 22px
        font-size 14px
        padding-top 5px
</style>


