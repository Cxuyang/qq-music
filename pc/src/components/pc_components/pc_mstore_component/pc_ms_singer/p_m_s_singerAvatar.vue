<template>
  <div class="singer_avatar">
    <div v-if="singerArray.length > 0" class="avatar_wrapper" v-for="(item, index) in singerArray" :key="index">
        <div class="avatar" @click="showDetail(item.singer_mid)"><a><img :src="item.singer_pic"></a></div>
        <span @click="showDetail(item.singer_mid)">{{item.singer_name}}</span>
    </div>
  </div>
</template>
<script>
const avatarLen = 10
export default {
  props: {
    singerlist: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
        singerArray: [],
    };
  },
  created() {
      this.setAvatar()
  },
  watch: {
      singerlist: function() {
        this.setAvatar()       
      }
  },
  methods: {
    setAvatar() {
      if(this.singerlist.length <= 0){
        return;
      }
      for (let i = 0; i < avatarLen; i++) {
        this.singerArray.push(this.singerlist[i])
      }
    },
    showDetail(singermid) {
      this.$router.push({
        path: `/PCMusicstore/PCSingerDetail/${singermid}`
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.singer_avatar
  height 550px
  width 1250px
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content space-between
  .avatar_wrapper
    height 245px
    width 224px
    margin 0 0 20px 0
    background-color #fbfbfd
    display flex
    flex-direction column
    justify-content center
    .avatar
      height 140px
      width 140px
      border-radius 50%
      overflow hidden
      margin 0 auto
      img
        transform scale(1)
        transition transform 0.5s
      &:hover
        cursor pointer
        img
          transform scale(1.1)
          transition transform 0.5s
    span
      margin 10px auto
      &:hover
        color #31c27c
        cursor pointer
</style>


