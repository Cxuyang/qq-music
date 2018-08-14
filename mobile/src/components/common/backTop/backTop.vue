<template>
    <transition name="fade">
        <div class="backTop" v-if="scrollTop>0" @click="backTop">
            <i class="el-icon-arrow-up"></i>
        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0,
    }
  },
  mounted() {
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    // 监听页面滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    backTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  }
};
</script>
<style lang="stylus">
.backTop
  position fixed
  height 40px
  width 40px
  bottom 50px
  right 50px
  background-color #fff
  border: 1px solid #c9c9c9
  display flex
  z-index 30
  &:hover
    cursor pointer
  i
    font-size 24px
    margin auto
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>


