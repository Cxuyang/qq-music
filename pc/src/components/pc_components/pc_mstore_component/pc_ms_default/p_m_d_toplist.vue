<template>
  <div class="default_topList">
    <div class="title"><h1>排行榜</h1></div>
    <div class="topList_content">
        <div v-for="(item, index) in QQToplist" v-if="index < topCnt" :key="index" class="toplist">
            <div class="bgImg" :class="`bgImg${index}`"></div>
            <div class="list-title">
                <h4>{{item.name[0]}}</h4>
                <h3>{{item.name[1]}}</h3>
            </div>
            <div class="splitLine"></div>
            <img class="playImg" src="../../../../assets/img/play.png">
            <div class="songList">
                <div class="singleList" v-for="(songItem, songIndex) in item.songlist" :key="songIndex">
                    <span>{{songIndex + 1}}&nbsp;&nbsp;{{songItem.track_name}}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;{{songItem.singer_name}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    topList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      QQToplist: [],
      globalToplist: [],
      topCnt: 5
    };
  },
  created() {
    this.parseTopList()
  },
  watch: {
    topList: function() {
      this.parseTopList()
    }
  },
  methods: {
    // 解析toplist
    parseTopList() {
      if (this.topList.length <= 0) {
        return
      }
      let _this = this      
      this.QQToplist = this.topList[0].list
      this.QQToplist.map(item=>{
          item.name = _this.splitTitle(item.name)
      })
      this.globalToplist = this.topList[1].list
      this.globalToplist.map(item=>{
          item.name = _this.splitTitle(item.name)
      })
    },
    // 拆分toplist title
    splitTitle(title) {
      let tempArray = []
      tempArray.push(title.split('·')[0])
      tempArray.push(title.split('·')[1])
      return tempArray
    }
  }
};
</script>
<style lang="stylus" scoped>
.default_topList 
  height: 532px
  background: linear-gradient(#F2F6FC, #fff)
  padding-top: 50px
  .title 
    h1 
      text-align: center
      letter-spacing: 15px
      margin-top: 0
  .topList_content
    display flex
    flex-direction row
    justify-content center
    .toplist
      position relative
      height 500px
      width 224px
      margin-right 20px
      overflow hidden
      .bgImg
        height 500px
        width 224px
        position absolute
        top 0
        left 0
        transform scale(1)
        transition transform 0.5s
      .bgImg0
        background: url('../../../../assets/img/bg_index_top.jpg') 100% no-repeat
        background-position: 0 0
      .bgImg1
        background: url('../../../../assets/img/bg_index_top.jpg') 100% no-repeat
        background-position: 25% 0
      .bgImg2
        background: url('../../../../assets/img/bg_index_top.jpg') 100% no-repeat
        background-position: 50% 0
      .bgImg3
        background: url('../../../../assets/img/bg_index_top.jpg') 100% no-repeat
        background-position: 75% 0
      .bgImg4
        background: url('../../../../assets/img/bg_index_top.jpg') 100% no-repeat
        background-position: 100% 0
      &:hover
        cursor pointer
        .bgImg
          transform scale(1.1)
          transition transform 0.5s
        .playImg
          opacity 1
          transition opacity 0.5s
        .splitLine
          opacity 0
          transition opacity 0.5s

    .list-title
      position absolute
      height 100px
      width 100%
      top 20px
      left 00
      h4
        color #fff
        text-align center
        font-size 20px
        font-weight 200
        margin-bottom 0px
      h3
        color #fff
        text-align center
        font-size 26px
        font-weight 400
        margin-top 0
    .splitLine
      position absolute
      background-color #fff
      border 0
      width 40px
      height 2px
      top 120px
      left 92px
      margin 20px 0
      opacity 1
      transition opacity 0.5s
    .playImg
      position absolute
      height 48px
      width 48px
      top 96px
      left 88px
      margin 20px 0
      opacity 0
      transition opacity 0.5s
    .songList
      position absolute
      height 300px
      width 100%
      bottom 30px
      left 0
      display flex
      flex-direction column
      justify-content space-around
      .singleList
        width 100%
        padding 0 30px
        span
          display block
          color #fff
          font-size 14px
</style>


