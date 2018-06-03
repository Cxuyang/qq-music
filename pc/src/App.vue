<template>
  <div id="app">
    <el-container>
      <pcHeader style="height:90px;padding:0"><pcHeader></pcHeader></pcHeader>
      <el-main style="padding:0"><router-view/></el-main>
      <el-footer style="height:600px;padding:0"><pcFooter></pcFooter></el-footer>
      <backTop></backTop>
    </el-container>
  </div>
</template>

<script>
import pcHeader from './components/pc_components/pc_header'
import pcFooter from './components/pc_components/pc_footer'
import backTop from './components/common/backTop/backTop'
export default {
  name: 'App',
  components:{
    pcHeader,
    pcFooter,
    backTop
  }
}
</script>

<style>
</style>
