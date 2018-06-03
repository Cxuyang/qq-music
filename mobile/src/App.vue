<template>
  <div id="app" @touchmove.prevent>
    <MHeader></MHeader>
    <MTab></MTab>
    <router-view/>
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/mobile-components/m-header/m-header'
import MTab from 'components/mobile-components//m-tab/m-tab'
import player from 'components/mobile-components/m-player/m-player'
export default {
  components: {
    MHeader, MTab, player
  }
}
</script>

<style>
</style>
