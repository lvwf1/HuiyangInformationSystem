<template>
    <ul class="nav nav-pills nav-stacked">
        <router-link to='/' tag='li' class="btn btn-secondary">CTO</router-link>
        <router-link to='/' tag='li' class="btn btn-secondary">BTS</router-link>
        <router-link to='/36hsubmit' tag='li' class="btn btn-secondary">单班</router-link>
        <router-link to='/' tag='li' class="btn btn-secondary">双班</router-link>
    </ul>
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
.white{
    background-color: #fff;
}
h1, h2 {
  font-weight: normal;
  text-align: left;
}
li {
  color: #111;
  font-size: 20px
}
li:hover {
    color: #42b983;
}
li:focus{
    color: #42b983;
}
</style>