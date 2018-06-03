<template>
    <div class="singer_detail">
      <!-- 歌手信息 -->
      <div class="singer_info">
          <div class="info_left"><div class="avatar"><img :src="avatarUrl"></div></div>
          <div class="info_right">
            <span></span>
          </div>
      </div>
      <!-- 热门歌曲 -->
      <div class="hot_songs">
        <div class="title">
          <h2>热门歌曲</h2>
          <a :href="allSongsHref" target="_blank">全部 ></a>
        </div>        
        <el-table ref="hot_songs" :data="hotsongs" highlight-current-row height="520" style="width: 100%"> 
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="song" align="center" label="歌曲"></el-table-column>
          <el-table-column property="album" align="center" label="专辑"></el-table-column>
          <el-table-column property="time" align="center" label="时长"></el-table-column>
        </el-table>
      </div>
      <!-- 专辑 -->
      <div class="album">
        <div class="title">
          <h2>专辑</h2>
          <a :href="allalbumsHref" target="_blank">全部 ></a>
        </div>
        <div class="carousel">
          <div class="list-item">
              <div class="listWrapper" v-for="(item, index) in albums" :key="index">
                  <div class="imgWrapper">
                    <a>
                      <img class="listImg" :src="item.albumMID">
                      <div class="fidediv"></div>
                      <div class="imgPlay"></div>
                    </a>
                  </div>
                  <span>{{item.albumName}}</span>
                  <div>{{item.pubTime}}</div>
              </div>
          </div>  
        </div>
      </div>
      <!-- MV -->
      <div class="mv">
        <div class="title">
          <h2>MV</h2>
          <a :href="allmvsHref" target="_blank">全部 ></a>
        </div>
        <div class="carousel">
          <div class="list-item">
              <div class="listWrapper" v-for="(item, index) in mv" :key="index">
                  <div class="imgWrapper">
                    <a :href="item.vid" target="_blank">
                      <img class="listImg" :src="item.pic">
                      <div class="fidediv"></div>
                      <div class="imgPlay"></div>
                    </a>
                  </div>
                  <span>{{item.title}}</span>
                  <div class="playcount"><img src="../../../assets/img/player-o.png">{{item.listenCount}}</div>
              </div>
          </div>  
        </div>
      </div>
      <!-- 粉丝上传 -->
      <div class="mv">
        <div class="title">
          <h2>粉丝上传</h2>
          <a :href="allfansHref" target="_blank">全部 ></a>
        </div>
        <div class="carousel">
          <div class="list-item">
              <div class="listWrapper" v-for="(item, index) in fansmv" :key="index">
                  <div class="imgWrapper">
                    <a :href="item.vid" target="_blank">
                      <img class="listImg" :src="item.pic">
                      <div class="fidediv"></div>
                      <div class="imgPlay"></div>
                    </a>
                  </div>
                  <span>{{item.title}}</span>
                  <div class="playcount"><img src="../../../assets/img/player-o.png">{{item.listenCount}}</div>
              </div>
          </div>  
        </div>
      </div>
      <!-- 相似歌手 -->
    </div>
</template>
<script>
import { getDataForSingerInfo, getSingerHotSongs, getSingerAlbums, getSingerMv, getSingerFansMv } from "../../../api/pc_getData.js";
export default {
  data() {
    return {
      singerJson:{},
      hotsongs: [],
      albums: [],
      mv: [],
      fansmv: []
    }
  },
  computed: {
    singermid: function() {
      return this.$route.params.singermid
    },
    avatarUrl: function() {
      return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.singermid}.jpg?max_age=2592000`
    },
    allSongsHref: function() {
      return `https://y.qq.com/n/yqq/singer/${this.singermid}.html#tab=song`
    },
    allalbumsHref: function() {
      return `https://y.qq.com/n/yqq/singer/${this.singermid}.html#tab=album`
    },
    allmvsHref: function() {
      return `https://y.qq.com/n/yqq/singer/${this.singermid}.html#tab=mv`
    },
    allfansHref: function() {
      return `https://y.qq.com/n/yqq/singer/${this.singermid}.html#tab=fan`
    },
  },
  created() {
    this.getDataForSinger()
  },
  methods: {
    // 解析播放时间
    reWriteTime(time) {
      let mit = time / 60 | 0
      let sec = time % 60
      return `${mit}:${sec}`
    },
    // 获取歌手数据
    getDataForSinger() {
      this._getDataForSingerInfo()
      this._getSingerHotSongs()
      this._getSingerAlbums()
      this._getSingerMv()
      this._getSingerFansMv()
    },
    _getDataForSingerInfo() {
      getDataForSingerInfo(this.singermid).then(res => {
        console.log(res)
      })
    },
    // 热门歌曲
    _getSingerHotSongs() {
      getSingerHotSongs(this.singermid).then(res => {
        let _this = this
        if (res.code == 0) {
          res.data.list.map(item => {
            _this.hotsongs.push({
              song: item.musicData.songname,
              album: item.musicData.songname,
              time: _this.reWriteTime(item.musicData.interval)
            })
          })
        }
      })
    },
    // 专辑
    _getSingerAlbums() {
      getSingerAlbums(this.singermid).then(res => {
        if (res.code == 0) {
          res.data.list.map(item => {
            item.albumMID = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albumMID}.jpg?max_age=2592000`
          })
          this.albums = res.data.list
        }
      })
    },
    // MV
    _getSingerMv() {
      getSingerMv(this.singermid).then(res => {
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}`)
        tempJson.data.list.map(item => {
          item.vid = `https://y.qq.com/n/yqq/mv/v/${item.vid}.html`
        })
        this.mv = tempJson.data.list
      })
    },
    // 粉丝上传MV
    _getSingerFansMv() {
      getSingerFansMv(this.singermid).then(res => {
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}`)
        tempJson.data.list.map(item => {
          item.vid = `https://y.qq.com/n/yqq/mv/v/${item.vid}.html`
        })
        this.fansmv = tempJson.data.list
      })
    },
  }
};
</script>
<style lang="stylus" scoped>
.singer_detail
  width 100%
  padding 40px 0
  background: linear-gradient(#F2F6FC, #fff)
  .singer_info
    width 1200px
    height 250px
    margin 0 auto
    display flex
    .info_left
      flex 0 0 250px
      height 250px
      width 250px
      border-radius: 50%
      overflow hidden
      img
        height 250px
        width 250px
    .info_right
      flex 1 1 auto
  .hot_songs
    width 1200px
    height 610px
    margin 0 auto
    .title
      height 60px
      h2
        float left
        font-size 24px
        font-weight 400
        line-height 58px
        margin 0px
      a
        float right
        font-size 14px
        font-weight 400
        line-height 58px
        margin 0px
        &:hover
          color #31c27c
          cursor pointer
  .album
    width 1200px
    height 350px
    margin 0 auto
    .title
      height 60px
      h2
        float left
        font-size 24px
        font-weight 400
        line-height 58px
        margin 0px
      a
        float right
        font-size 14px
        font-weight 400
        line-height 58px
        margin 0px
        &:hover
          color #31c27c
          cursor pointer
    .carousel
      height 236px
      width 100%
      .list-item
        display flex
        justify-content space-between
        .listWrapper
          height 236px
          width 224px
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
              background: url('../../../assets/img/play.png') 100% no-repeat;
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
          span
            float: left
            color: #333
            font-size 14px
            max-width: 100%
            font-weight: 400
            overflow: hidden
            white-space nowrap
            text-overflow: ellipsis
            line-height: 22px
            max-height: 44px
          div
            color: #999
            font-size 14px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            height: 22px
  .mv
    width 1200px
    height 250px
    margin 0 auto
    .title
      height 60px
      h2
        float left
        font-size 24px
        font-weight 400
        line-height 58px
        margin 0px
      a
        float right
        font-size 14px
        font-weight 400
        line-height 58px
        margin 0px
        &:hover
          color #31c27c
          cursor pointer
    .carousel
      height 200px
      width 100%
      .list-item
        display flex
        justify-content space-between
        .listWrapper
          height 150px
          width 224px
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
              background: url('../../../assets/img/play.png') 100% no-repeat
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
          span
            float: left
            color: #333
            font-size 14px
            max-width: 100%
            font-weight: 400
            overflow: hidden
            white-space nowrap
            text-overflow: ellipsis
            line-height: 22px
            max-height: 44px
            margin-top 5px
          .playcount
            color: #999
            font-size 14px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            height: 22px
            margin-top 5px
            line-height 22px
            img
              line-height 22px
              margin-right 5px
              transform scale(0.7)
              vertical-align sub
</style>


