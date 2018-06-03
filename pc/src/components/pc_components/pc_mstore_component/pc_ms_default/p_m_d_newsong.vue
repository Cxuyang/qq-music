<template>
  <div class="default_newsong">
    <div class="title"><h1>新歌首发</h1></div>
    <div class="menu">
        <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
            <el-menu-item v-for="(item, index) in newSong.type_info" :index="`${index}`" :key="index">{{item.title}}</el-menu-item>
        </el-menu>
    </div>
    <div class="carousel">
        <el-carousel indicator-position="outside" height="600px">
            <el-carousel-item v-for="(item,index) in newSongList" :key="index">
              <div class="carouselWrapper">
                <div class="list-item">
                  <div class="listWrapper"  v-for="(itemChild,childIndex) in item.jsonArray" :key="childIndex">
                      <div class="imgWrapper">
                        <a>
                          <img class="listImg" :src="itemChild.album.mid">
                          <div class="fidediv"></div>
                          <div class="imgPlay"></div>
                        </a>
                      </div>
                      <span class="album_name">{{itemChild.album.name}}</span>
                      <span class="singer_name">{{itemChild.singer[0].name}}</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    newSong: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
        activeIndex: '0',
        newSongList: [],
    };
  },
  created() {
      this.getNewSongsData(this.newSong.song_list, this)
  },
  watch: {
      newSong: function() {
        this.getNewSongsData(this.newSong.song_list, this)       
      }
  },
  methods: {
    getNewSongsData(itemData, _this) {
      if(itemData.length <= 0){
          return;
        }
        itemData.map((item, index) => {
          item.album.mid = `//y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg?max_age=2592000`
          if (index % 10 === 0 && itemData[index + 10]) {
            let jsonArray = [itemData[index], itemData[index + 1], itemData[index + 2], itemData[index + 3], itemData[index + 4], itemData[index + 5], itemData[index + 6], itemData[index + 7], itemData[index + 8], itemData[index + 9]];
            _this.newSongList.push({ jsonArray });
          }
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
.default_newsong
    height 830px
    background: linear-gradient(#F2F6FC, #fff)
    padding-top 50px
    .title
      h1
        text-align center
        letter-spacing 15px
        margin-top 0;
    .menu
      width 350px
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
        flex-direction row
        flex-wrap wrap
        justify-content space-between
        width 1200px
        margin 0 auto
      .listWrapper
        height 250px
        width 224px
        margin-bottom 20px
        display flex
        flex-direction column
        .imgWrapper
          height 224px
          width 224px
          overflow hidden
          position relative
          .listImg
            height 224px
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
            top 70px
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
        .album_name
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
        .singer_name
          color: #999
          padding-top 5px
          font-size 14px
          &:hover
            color #31c27c
            cursor pointer
</style>


