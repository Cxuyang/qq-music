<template>
    <div class="footer">
        <div class="footer-info">
            <div class="info-block">
                <h3>下载客户端</h3>
                <div class="info-content">
                    <div class="icon-block icon-windows"><div class="icon-div"></div>PC版</div>
                    <div class="icon-block icon-mac"><div class="icon-div"></div>Mac版</div>
                    <div class="icon-block icon-android"><div class="icon-div"></div>android版</div>
                    <div class="icon-block icon-iphone"><div class="icon-div"></div>iphone版</div>                                                                                
                </div>
            </div>
            <div class="info-block">
                <h3>联系作者</h3>
                <div class="info-content">
                    <div class="icon-block icon-github"><div class="icon-div"></div>github</div>
                    <div class="icon-block icon-weibo"><div class="icon-div"></div>微博</div>                                                                            
                </div>
            </div>
            <div class="info-block">
                <h3>开放平台</h3>
                <div class="info-content">
                    <div class="icon-block icon-windows">音乐人平台</div>
                    <div class="icon-block icon-mac">音乐号认证</div>
                    <div class="icon-block icon-android">上传视频</div>
                    <div class="icon-block icon-iphone">上传音频</div>                                                                                
                </div>
                <div class="info-content">
                    <div class="icon-block icon-windows">音乐人平台</div>
                    <div class="icon-block icon-mac">音乐号认证</div>
                    <div class="icon-block icon-android">上传视频</div>
                    <div class="icon-block icon-iphone">上传音频</div>                                                                                
                </div>
            </div>
        </div>
        <div class="about-author">
            <div><p>关于作者</p><p>|</p><p>about author</p><p>|</p><p>关于作者</p><p>|</p><p>关于作者</p><p>|</p><p>关于作者</p><p>|</p><p>关于作者</p><p>|</p></div>
            <div><p>Copyright © 2018 - 2018 Cxuyang. All Rights Reserved.</p></div>
            <div><p>非商用,仅作为个人联系项目！！！</p></div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.footer
    color #7f7f7f
    background-color #333
    height 600px
    display flex
    flex-direction column
    justify-content space-around
    .footer-info
      margin 0 auto
      display flex
      justify-content center
      flex-wrap wrap
      .info-block
        margin 0 20px
        h3
          font-size: 17px
          font-weight: 500
          padding: 80px 0 46px
        .info-content
          display flex
          justify-content space-around
          flex-direction row
          margin-bottom 10px
          .icon-block
            margin-right 50px
            text-align center
            &:hover
              color #31c27c
              cursor pointer
          .icon-windows
            .icon-div
              background-image url('../../assets/img/icon/windows_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/windows_green.svg')
          .icon-mac  
            .icon-div
              background-image url('../../assets/img/icon/mac_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/mac_green.svg')
          .icon-android  
            .icon-div
              background-image url('../../assets/img/icon/android_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/android_green.svg')
          .icon-iphone 
            .icon-div 
              background-image url('../../assets/img/icon/iphone_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/iphone_green.svg')
          .icon-github 
            .icon-div 
              background-image url('../../assets/img/icon/github_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/github_green.svg')
          .icon-weibo 
            .icon-div 
              background-image url('../../assets/img/icon/weibo_gray.svg')
            &:hover
              .icon-div
                background-image url('../../assets/img/icon/weibo_red.svg')
        .icon-div
            width 48px
            height 48px            
            margin 0 auto     
            margin-bottom 10px  
    .about-author
      display flex
      flex-direction column
      justify-content center  
      p
        font-size 12px
        margin 0 3px
        &:hover
          cursor pointer
          color #31c27c
      div
        margin 5px 0
      &>div
        display flex
        flex-direction row
        justify-content center  
</style>



