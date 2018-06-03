<template>
    <div class="ms-default">
        <!--歌单推荐-->
        <div class="recomPlaylist-block">
            <defaultSongList :recomPlaylist="recomPlaylist"></defaultSongList>
        </div>
        <!--新歌首发-->
        <div class="newSong-block">
            <defaultNewSong :newSong="newsong"></defaultNewSong>
        </div>
        <!--精彩推荐-->
        <div class="recommend-block">
            <defaultRecommend :recommendData="recommends"></defaultRecommend>
        </div>
        <!--排行榜-->
        <div class="toplist-block">
            <defaultTopList :topList="topList"></defaultTopList>
        </div>
        <!--mv-->
        <div class="mv-block">
            <defaultMv></defaultMv>
        </div>
    </div>
</template>
<script>
import defaultSongList from "./p_m_d_recomPlaylist";
import defaultRecommend from "./p_m_d_recommed";
import defaultNewSong from "./p_m_d_newsong";
import defaultTopList from './p_m_d_toplist'
import defaultMv from './p_m_d_mv'
//
import { getDataForPc } from "api/pc_getData";

const ERR_OK = 0;
export default {
  data() {
    return {
      activeIndex: "1",
      pcData: "",
      recommends: [],
      newsong: {},
      newablum: [],
      topList: [],
      recomPlaylist: []
    };
  },
  created() {
    this._getDataForPc()
  },
  methods: {
    _getDataForPc() {
      getDataForPc().then(res => {
        let _this = this
        if (res.code === ERR_OK) {
          //console.log(res)
          this.pcData = res
          this.newsong = res.new_song.data
          this.newalbum = res.new_album.data.list
          this.topList = res.toplist.data.group_list
          this.recomPlaylist = res.recomPlaylist.data.v_hot
          this.recommends = res.focus.data.content
        }
      });
    },
  },
  components: {
    defaultSongList,
    defaultRecommend,
    defaultNewSong,
    defaultTopList,
    defaultMv
  }
};
</script>
<style lang="stylus" scoped>
.ms-default
    .recomPlaylist-block
      height: 532px
    .newSong-block
      height 830px
    .recommend-block
      height: 450px
    .toplist-block
      height 690px
    .mv-block
      height 660px
</style>