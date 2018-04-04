<template>
<div class="container-fluid headerbackground">
<div class="row-fluid">
	<hr style="height:5px;border:none;border-top:2px groove #aaa;" />
    <div class="col-lg-8 col-md-12 dashboard">
  	<div class="row">
        <div class="dashboardtitle" style="float:left;margin-left:20px; margin-top:-20px">当天生产实时看板</div>
  	</div>
  	<div class="row">
    <div class="col-md-4 col-sm-12">
				<div :style="{height:height1,width:width1}" ref="myEchart1"></div>
    </div>
    <div class="col-md-8 col-sm-12">
			<div :style="{height:height2,width:width2}" ref="myEchart2"></div>
  	</div>
  </div>
  <div class="row">
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">已运行时间：05:40:17</div> </div>
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">已入库台数：005933</div> </div>
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">故障机台数：000006</div> </div>
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">累计停线工时：00:04:22</div> </div>
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">待入库台数：014508</div> </div>
  <div class="col-md-4 col-sm-6 col-xs-12"><div class="dataLable">已修故障机：000005</div> </div>
  </div>
  </div>
  <div class="col-lg-offset-1 col-lg-3 col-md-4 dashboard" style="text-align:center"> 
  	<ul class="workflow-list">
			<div class="dashboardtitle">实时信息</div>
			<li class="workflow-item"><button class="workflow">内部来访</button></li>
			<li class="workflow-item"><button class="workflow">政府及外部客户来访</button></li>
			<li class="workflow-item"><button class="workflow">外部审核</button></li>
			<li class="workflow-item"><button class="workflow">ER Issue</button></li>
			<li class="workflow-item"><button class="workflow">Accident</button></li>
			<li class="workflow-item"><button class="workflow">重大客诉</button></li>
		</ul>
  </div>
	<div>
		<div class="col-lg-12 col-md-8 dashmenu">
	            <div class="row dashmenu">
                	<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
										<a href="#autoTools" class="tab">
											<ul class="nav navul">
												<li class="liheight">
													<div class="capacity1"></div>
												</li>
												</ul>
											</a>
                    </div>
                    <div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab">
											<ul class="nav navul">
												<router-link to='/36hsubmit' tag='li' class="liheight">
													<div class="delivery"></div>
												</router-link>
												</ul>
											</a>
                    </div>
                    <div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="effiency"></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="cost" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab">
											<ul class="nav navul">
												<li class="liheight">
													<div class="vas" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="quality" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="device" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="storage" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
										<div class="col-lg-1 col-md-4 col-sm-6" style="padding:20px">
	                	<a href="#autoTools" class="tab" style="">
											<ul class="nav navul">
												<li class="liheight">
													<div class="staff" style=""></div>
												</li>
												</ul>
											</a>
                    </div>
	            </div>
	        </div>
        </div>
</div>
</div>
</template>

<script>
import echarts from 'echarts'

export default {
	props: {
        width1: {
            type: String,
            default: '350px'
        },
        height1: {
            type: String,
            default: '325px'
				},
				width2: {
            type: String,
            default: '600px'
        },
        height2: {
            type: String,
            default: '325px'
        }
    },
  data () {
    return {
      msg: '惠阳厂信息管理系统'
    }
  },
	mounted(){
        var myChart1 = echarts.init(this.$refs.myEchart1);
				var myChart2 = echarts.init(this.$refs.myEchart2);
        let that = this; 
        // 把配置和数据放这里
        var option1 = {
    title: {
        text: '订单完成百分比',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['入库量', '待入库订单']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:29, name: '入库量'},
                {value:71, name: '待入库订单'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
      var option2= {
    title: {
        text: '各段已生产订单',
        subtext: '虚构数据'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['已生产', '目标']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['装配','测试','包装']
    },
    series: [
        {
            name: '已生产',
            type: 'bar',
            data: [7634, 6929, 6011]
        },
        {
            name: '目标',
            type: 'bar',
            data: [21641, 20571, 20441]
        }
    ]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
				myChart2.setOption(option2);
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