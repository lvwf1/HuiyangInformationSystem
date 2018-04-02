<template>
  <div class="gray">
      <div class="container">
    <ul>
        <router-link class="btn btn-secondary" to='/' tag='li'><a>首页</a></router-link>
        <router-link class="btn btn-secondary" to='/' tag='li'><a>交付</a></router-link>
        <router-link class="btn btn-secondary" to='/36hsubmit' tag='li'><a>36H交付率</a></router-link>
        <router-link class="btn btn-secondary" to='/' tag='li'><a>加急订单</a></router-link>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #111;
  font-size: 20px
}
a:hover {
    color: #42b983;
}
a:focus{
    color: #42b983;
}
.gray{
    background-color: #fff;
}
</style>