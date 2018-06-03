<template>
  <div class="singer_list">
    <div v-if="singerArray.length > 0" class="list_wrapper" v-for="(item, index) in singerArray" :key="index">
        <a @click="showDetail(item.singer_mid)">{{item.singer_name}}</a>
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
      for (let i = avatarLen; i < this.singerlist.length; i++) {
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
.singer_list
  height 510px
  width 1250px
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content space-between
  .list_wrapper
    height 36px
    width 224px
    display flex
    flex-direction column
    justify-content center
    a
      margin 0 auto
      font-size 14px
      &:hover
        color #31c27c
        cursor pointer
</style>


