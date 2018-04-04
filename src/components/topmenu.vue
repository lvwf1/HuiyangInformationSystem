<template>
<div>
  <!-- #head start -->		
<div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
<div class="container" >
		<div class="navbar-header" >
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<router-link to='/' tag='li' class="navbar-brand" href="#" style="font-size: 30px; color: white;cursor:pointer">惠阳厂信息管理系统</router-link>
		</div>
		<div class="collapse navbar-collapse pull-right">
			<ul class="nav navbar-nav">
				<li><a href="#"><span class="glyphicon glyphicon-exclamation-sign"></span> 退出</a></li>
				<li class="active"><a href="#shop"><span class="glyphicon glyphicon-user"></span> 用户：Luowei7(三级)</a></li>
				<li><a href="#support"><span class="glyphicon glyphicon-thumbs-up"></span> 设置</a></li>
				<li><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-search text-right" ></span></a></li>
			</ul>
			
		</div><!-- /.nav-collapse -->
	</div><!-- /.container -->
</div>
			<!-- #Search模态框 start -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body1">
				<form class="form-inline" role="form">
						<input type="text" class="form-control" id="name" placeholder="Search" size="68" style="height: 50px;">
						<button type="submit" class="btn btn-default" style="border: none;height: 50px;"><span class="glyphicon glyphicon-search text-right" ></span></button>
				</form>
             </div>
        </div> 
    </div> 
</div> 
			<!-- #Search模态框 end -->
	<!-- #head end -->
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '惠阳厂信息管理系统'
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>