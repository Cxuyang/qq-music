<template>
    <div class="pc_ms_radio">
        <div class="pc_ms_content">
            <div class="radio_menu">
              <a class="menu_title" v-for="(item, index) in menu" :key="index">{{item}}</a>
            </div>
            <div class="radioList_content" v-if="radioList.length > 0">
                <div class="radioList_item" v-for="(item, index) in radioList" :key="index">
                    <h2 class="item_title">{{item.name}}</h2>
                    <div class="list-item">
                        <div class="listWrapper" v-for="(childItem, childIndex) in item.radioList" :key="childIndex">
                            <div class="imgWrapper">
                                <a>
                                    <img class="listImg" :src="childItem.radioImg">
                                    <div class="fidediv"></div>
                                    <div class="imgPlay"></div>
                                </a>
                            </div>
                            <span class="album_name">{{childItem.radioName}}</span>
                            <span class="album_time">播放量:{{childItem.listenNum}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
import {getRadiolist} from '../../../../api/pc_getData.js'
export default {
  data() {
    return {
      radioList: [],
      menu: [],
      //
      activeIndex: '0'
    };
  },
  created() {
    this._getradioList()
  },
  methods: {
    // 获取专辑列表
    _getradioList() {
      getRadiolist().then(res =>{
        let reg = '(?<=\{).*(?=\})'
        let tempJson =JSON.parse(`{${res.match(reg)[0]}}}`)     
        if (tempJson.code == 0){
          this.radioList = tempJson.data.data.groupList
          this.radioList.map(item => {
            this.menu.push(item.name)
          })
        }
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.pc_ms_radio 
  background: linear-gradient(#F2F6FC, #fff)
  position relative
  .pc_ms_content
    width 1200px
    margin 0 auto
    display flex
    .radio_menu
      position sticky
      position -webkit-sticky
      top 0px
      flex 0 0 100px
      width 100px
      height 600px
      margin-right 100px      
      background: url('../../../../assets/img/radio_sidebar.png') 0 0 no-repeat
      .menu_title
        position: relative
        display: block
        padding-left: 63px
        line-height: 59px
        font-size: 15px
        &:hover
          color #31c27c
          cursor pointer
    .radioList_content
      flex 1 1 auto
      display flex
      flex-direction column
      justify-content center
      margin-top 20px
      .radioList_item
        display flex
        flex-direction column
        justify-content center
        .item_title
          position: relative
          font-weight: 400
          height: 20px
          line-height: 20px
          color: #999
          margin-bottom: 38px
          font-size: 15px
          &:after
            content: ""
            position: absolute
            height: 1px
            overflow: hidden
            left: 43px
            right: 0
            top: 10px
            background-color: #ececec
        .list-item
          display flex
          flex-direction row
          flex-wrap wrap
          .listWrapper
            height 300px
            width 224px
            margin 0 25px 20px 0
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
            .album_time
                color: #999
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                height: 22px
                font-size 14px
                padding-top 5px
</style>