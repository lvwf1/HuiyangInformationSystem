<template>
  <div id="app">
    <div class="headerbackground">
    <app-header></app-header>
    <router-view/>
    </div>
  </div>
</template>

<script>
import topmenu from './components/topmenu'
export default {
  name: 'App',
  components: {
    appHeader: topmenu,
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
</style>
