<template>
<div class="white">
    <app-sec-menu></app-sec-menu>
    <div class="col-xs-2">
    <app-third-menu></app-third-menu>
    </div>
    <div class="col-xs-10" :style="{height:height,width:width}" ref="myEchart"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
import secmenu from '@/components/secondmenu'
import thirdmenu from '@/components/thirdmenu'

var dev_url="/hyapi/hyMasServlet?action=GetHy36HMothly"
var prod_url="http://10.176.82.242:8080/HYSYS/hyMasServlet?action=GetHy36HMothly"
var curr_url=dev_url

export default {
    components: {
    appSecMenu: secmenu,
    appThirdMenu: thirdmenu
    },
    props: {
    width: {
      type: String,
      default: '1000px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      chart: null,
      rsdata:[],
      date:[],
      amount_lot:[],
      amount_qa:[],
      delivery_rate:[],
    }
  },
  ready: function(){
      alert("Hello World")
  },
  mounted() {
      axios({
            url: curr_url,
            method: 'post',
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(response => {
                    console.log(response)
                    this.rsdata=response.data.rsData
                            for(var i=0;i<this.rsdata.length;i++){
                                this.date.push(this.rsdata[i].years.replace(/(^\s*)|(\s*$)/g, "")+'/'+this.rsdata[i].months.replace(/(^\s*)|(\s*$)/g, "")+'/'+this.rsdata[i].days.replace(/(^\s*)|(\s*$)/g, ""))
                                this.delivery_rate.push(this.rsdata[i].delivery_rate)
                                this.amount_lot.push(this.rsdata[i].amount_lot)
                                this.amount_qa.push(this.rsdata[i].amount_qa)
                            }
                            var myChart = echarts.init(this.$refs.myEchart);
                            let that = this; 
                            // 把配置和数据放这里
                            var option = {
                                title: {
                                    text: '36Hour交付率'
                                    },
                                    tooltip: {
                                        trigger: 'axis'
                                        },
                                        legend: {
                                            x : 'center',
                                            borderWidth : '1',
                                            selectedMode: 'multiple',
                                            data:['Delivery_Rate','Amount_Lot','Amount_Qa']
                                        },
                                        grid: {
                                            left: '3%',
                                            right: '4%',
                                            bottom: '3%',
                                            containLabel: true
                                        },
                                        toolbox: {
                                            feature: {
                                                saveAsImage: {}
                                            }
                                        },
                                        xAxis: {
                                            type: 'category',
                                            boundaryGap: false,
                                            data: this.date
                                        },
                                        yAxis:[
                                            {
                                                name : "Delivery_Rate",
                                                type : 'value',
                                                scale : false,
                                                show : true,
                                                splitLine:{  
                                                    show:true  
                                                    }, 
                                                position : 'left',
                                            },
                                            {
                                                name : "Amount_Lot",
                                                type : 'value',
                                                scale : false,
                                                show : false,
                                                splitLine:{  
                                                    show:false  
                                                    },
                                                position : 'right',
                                            },
                                            {
                                                name : "Amount_Qa",
                                                type : 'value',
                                                scale : false,
                                                show : false,
                                                splitLine:{  
                                                    show:false  
                                                },
                                                position : 'left'
                                                },
                                            ],
                                        series: [
                                            {
                                                name:'Delivery_Rate',
                                                type:'line',
                                                yAxisIndex:0,
                                                data:this.delivery_rate
                                            },
                                            {
                                                name:'Amount_Lot',
                                                type:'line',
                                                yAxisIndex:1,
                                                data:this.amount_lot
                                            },
                                            {
                                                name:'Amount_Qa',
                                                type:'line',
                                                yAxisIndex:2,
                                                data:this.amount_qa
                                            }
                                        ]
                                    }
                                    myChart.setOption(option);
                                    myChart.on('click', function (params) {
                                    });
                            })
                .catch(function (error) {
                    console.log(error);
                });
            },
            beforeDestroy() {
                if (!this.chart) {
                    return
                }
                this.chart.dispose();
                this.chart = null;
            },
            methods: {
                Trim(str)
                { 
                    return str.replace(/(^\s*)|(\s*$)/g, ""); 
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