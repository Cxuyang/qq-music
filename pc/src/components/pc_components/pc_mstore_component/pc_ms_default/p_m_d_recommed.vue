<template>
  <div class="default_recommend">
    <div class="title"><h1>精彩推荐</h1></div>
    <div class="carousel" v-loading="recommends.length <= 0">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in recommends" :key="index">
                <div class="carouse-item">
                    <div class="carouselWrapper">
                        <a :href="item.jsonArray[0].jump_info.url">
                            <img class="carouseImg" :src="item.jsonArray[0].pic_info.url">
                        </a>
                    </div>
                    <div class="carouselWrapper">
                        <a :href="item.jsonArray[1].jump_info.url">
                            <img class="carouseImg" :src="item.jsonArray[1].pic_info.url">
                        </a>
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
    recommendData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
        activeIndex: '1',
        recommends: []
    };
  },
  created() {
      this.getRecommendsData(this.recommendData, this)
  },
  watch: {
      recommendData: function() {
          this.getRecommendsData(this.recommendData, this)
      }
  },
  methods: {
    //recommends data
    getRecommendsData(itemData, _this) {
      if(itemData.length <= 0){
        return;
      }
      itemData.map((item, index) => {
        if (index % 2 === 0 && itemData[index + 1]) {
          let jsonArray = [itemData[index], itemData[index + 1]];
          _this.recommends.push({ jsonArray });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.default_recommend
    height 300px
    background: linear-gradient(#F2F6FC, #fff)
    padding-top 50px
    // background: url('/src/assets/img/bg_detail.jpg') 50% 0 repeat-x
    .title
      h1
        text-align center
        letter-spacing 15px
        margin-top 0;
    .carouse-item
      display flex
      justify-content center
      .carouselWrapper
       height 236px
       width 590px
       margin 0 10px
       .carouseImg
         height 236px
         width 590px

</style>


