<template>
    <div class="linear">
        <!-- 环形进度 -->
        <div class="main" ref="linearEcharts">

        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    data(){
        return {
            options:{},
            serverData: {},
            timer:null,
            
        }
    },
    mounted(){
        this.init()
       
    }, 
    methods:{
        
        init(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.getInstanceByDom(this.$refs.linearEcharts)
            if (myChart == null) {
                myChart = echarts.init(this.$refs.linearEcharts);
            }
            //窗口尺寸改变
            window.addEventListener("resize",function(){
                myChart.resize();
            })
            // 绘制图表
            this.options = {
    dataZoom: [
        {
            type: 'inside',
            realtime: true,
        },
        {
            show: true,
            xAxisIndex: [0],
            realtime: true,
            height: 4,//这里可以设置dataZoom的尺寸
            bottom: '1%',
            backgroundColor: '#1d76e6', // 填充颜色
            textStyle: {
             color: '#fff' // 左右两边文字颜色
           },
        }
    ],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.63)', //设置背景颜色
        textStyle: {
            color: '#fff'
        },
        borderColor: "rgba(255,255,255, .5)",
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'dashed',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '8%',
        right: '5%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#26367A'
            }
        },
        splitArea: {
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            textStyle:{
                color: 'rgba(198, 207, 255, 1)',
                fontSize: 12
            },
            interval: 0,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ['交通', '农业农村', '水利', '能源', '社会民生', '生态环保', '城镇化'],
        boundaryGap: ['10%', '10%']

    }],

    yAxis: [{
        type: 'value',
        name: '项目数(个)',
        nameTextStyle: {
            color: '#fff',
            fontSize: '11px',
        },
        min: 0,
        max: 500,
        splitNumber: 6,
        splitLine: {
            show: true,
            interval: '0',
            lineStyle: {
                color: ['rgba(38, 54, 122, .58)'],
                type: 'dashed',
                width: 1
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            // margin: 10,
            textStyle: {
              fontSize: 12,
              color: 'rgba(198, 207, 255, 1)'
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '项目数量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "rgba(23, 174, 230, 1)",
                    shadowColor: 'rgba(0, 0, 0, 0)',
                    shadowBlur: 0,
                    shadowOffsetY:5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: false,
                position: 'top',
                textStyle: {
                    color: 'rgba(1, 251, 246, 1)',
                    fontSize: 16
                }
            },
            itemStyle: {
                color: "#fff",
                borderColor: "rgba(255, 255, 255, .2)",
                borderWidth: 10,
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetY: 1,
                shadowOffsetX: 1,
            },
            tooltip: {
                show: true
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(7, 251, 246, 0.56)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(7, 251, 246, 0)'
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: [300, 242, 260, 350, 400, 402, 360]
        }
    ]
            }
            myChart.setOption(this.options);
        }
    }
}
</script>
<style>
.main{
    width:100%;height:260px;
    position:absolute;left:0;top:0;
}
</style>