<template>
  <div id="app">
    <div class="headerbackground">
    <app-header></app-header>
    </div>
    <app-sec-header></app-sec-header>
    <router-view/>
  </div>
</template>

<script>
import topmenu from './components/topmenu';
import secondmenu from './components/secondmenu'
import thirdmenu from './components/thirdmenu'
export default {
  name: 'App',
  components: {
    appHeader: topmenu,
    appSecHeader: secondmenu,
    appThirdHeader: thirdmenu
  },
  data () {
    return {
      msg: '惠阳厂信息管理系统'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  text-align:left;
}
.headerbackground{
  background: url('./assets/background.png')
}
</style>
