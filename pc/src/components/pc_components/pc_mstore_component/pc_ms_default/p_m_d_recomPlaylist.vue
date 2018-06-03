<template>
  <div class="default_songlist">
    <div class="title"><h1>歌单推荐</h1></div>
    <div class="menu">
        <el-menu :default-active="activeIndex" active-text-color="#31c27c" text-color="#000" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">每日推荐</el-menu-item>
            <el-menu-item index="2">情歌</el-menu-item>
            <el-menu-item index="3">民谣</el-menu-item>
            <el-menu-item index="4">背景音乐</el-menu-item>
            <el-menu-item index="5">热门游戏</el-menu-item>
            <el-menu-item index="6">粤语精选</el-menu-item>
        </el-menu>
    </div>
    <div class="carousel">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in playList" :key="index">
              <div class="list-item">
                  <div class="listWrapper" v-for="(itemChild,childIndex) in item.jsonArray" :key="childIndex">
                      <div class="imgWrapper">
                        <a>
                          <img class="listImg" :src="itemChild.cover">
                          <div class="fidediv"></div>
                          <div class="imgPlay"></div>
                        </a>
                      </div>
                      <span class="album_name">{{itemChild.rcmdcontent}}</span>
                      <span class="listen_num">播放量:{{itemChild.listen_num}}</span>
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
    recomPlaylist: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
        activeIndex: '1',
        playList: []
    };
  },
  created() {
    this.getrecomPlayListData(this.recomPlaylist, this)
  },
  watch: {
    recomPlaylist: function() {
      this.getrecomPlayListData(this.recomPlaylist, this)
      //console.log(this.recomPlaylist)
    }
  },
  methods: {
    //recomPlayList data
    getrecomPlayListData(itemData, _this) {
      if(itemData.length <= 0){
        return;
      }
      itemData.map((item, index) => {
        if (index % 5 === 0 && itemData[index + 5]) {
          let jsonArray = [itemData[index], itemData[index + 1], itemData[index + 2], itemData[index + 3], itemData[index + 4]];
          _this.playList.push({ jsonArray });
        }
      });
    },
  }
};
</script>
<style lang="stylus" scoped>
.default_songlist
    height 532px
    background: linear-gradient(#F2F6FC, #fff)
    padding-top 50px
    .title
      h1
        text-align center
        letter-spacing 15px
        margin-top 0;
    .menu
      width 525px
      min-width 525px  
      margin 0 auto 
      ul,li
        border 0px !important 
        background-color #ebeef500 !important
        a
          font-size 15px
          &:hover
            color #31c27c
  .list-item
    display flex
    flex-direction row
    justify-content space-between
    width 1200px
    margin 0 auto
  .listWrapper
    height 236px
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
        top 65px
        left  77px
        background: url('../../../../assets/img/play.png') 100% no-repeat;
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
    .listen_num
      color: #999
      padding-top 5px
      font-size 14px
      &:hover
        color #31c27c
        cursor pointer
</style>


