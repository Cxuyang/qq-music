<template>
    <div class="mymusic">
        <div class="info-content">
            <transition name="show">
                <div class="title" v-if="showTitle">私人音乐空间,听我想听的歌</div>
            </transition>
            <transition name="show">
                <div class="sub-title" v-if="showSubTitle">登录管理我的音乐,多终端同步</div>
            </transition>
            <transition name="show">
                <button class="login" v-if="showLogin">立即登录</button>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showTitle: false,
      showSubTitle: false,
      showLogin: false
    };
  },
  mounted() {
    this.showTitle = true;
    setTimeout(()=>{
        this.showSubTitle = true;
    },100)
    setTimeout(()=>{
        this.showLogin = true;
    },100)    
  }
};
</script>
<style lang="stylus" scoped>
.mymusic 
    width: 100%;
    height: 922px;
    background: url('../../assets/img/bg_profile_unlogin.jpg') 100% no-repeat;
    background-size: 100% 100%;
    display: flex;

    .info-content 
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title 
            color: #fff;
            font-family: 'Microsoft YaHei';
            font-weight: 500;
            font-size: 60px;
            margin-bottom: 10px;
        .sub-title 
            color: #fff;
            font-family: 'Microsoft YaHei';
            font-weight: 300;
            font-size: 30px;
            margin-bottom: 20px;        
        .login 
            width: 200px;
            height: 50px;
            background-color: #31c27c;
            color: #fff;
            font-size: 24px;
            border: 0px;
            border-radius: 3px;

            &:hover 
                cursor: pointer;

/* 设置持续时间和动画函数 */
.show-enter-active 
    transition: all 1s ease;


.show-leave-active 
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);


.show-enter, .show-leave-to 
    transform: translateY(20px);
    opacity: 0;

</style>