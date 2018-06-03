<template>
  <div class="album_list">
    <div class="title">
        <h2>全部</h2>
    </div>
    <div class="carousel" v-if="albumArray.length>0">
        <div class="list-item">
            <div class="listWrapper" v-for="(item,index) in albumArray" :key="index">
                <div class="imgWrapper">
                    <a>
                        <img class="listImg" :src="item.album_mid">
                        <div class="fidediv"></div>
                        <div class="imgPlay"></div>
                    </a>
                </div>
                <span class="album_name">{{item.album_name}}</span>
                <span class="singer_name">{{item.singers[0].singer_name}}</span>
                <span class="album_time">{{item.public_time}}</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
const albumsListLen = 20
export default {
  props: {
    albumList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      albumArray: []
    }
  },
  created() {
    this.getalbumListData()
  },
  watch: {
    albumList: function() {
      this.getalbumListData()
    }
  },
  methods: {
    //albumList data
    getalbumListData() {
      this.albumList.map((item, index) => {
          if (index > albumsListLen-1) {
            return
          }
          item.album_mid = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`
          this.albumArray.push(item)
      })
    },
  }
};
</script>
<style lang="stylus" scoped>
.album_list
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
      width 224px
      margin-bottom 20px
      display flex
      flex-direction column
      .imgWrapper
        height 224px
        width 224px
        overflow hidden
        position relative
        margin-bottom 5px
        .listImg
          height 224px
          width 224px  
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
          top 77px
          left  77px
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
      .album_name
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
      .album_time
        color: #999
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        height: 22px
        font-size 14px
        padding-top 5px
</style>


