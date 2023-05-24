<template>
    <!-- water -->
    <div class="water">
        <div class="main" ref="waterEcharts"></div>
    </div>
    </template>
    <script>
    import * as echarts from 'echarts'
    import 'echarts-liquidfill/src/liquidFill.js'; //在这里引入
    export default {
        data(){
            return {
                options:{},
                attrs : [{
                    'name': '总用户数',
                    'value': 518167,
                    'center_l': '20%'
                }, {
                    'name': '买家数',
                    'value': 4167,
                    'center_l': '50%'
                }, {
                    'name': '卖家数',
                    'value': 18167,
                    'center_l': '80%'
                }],
                datas : [
                    [0.6, 0.6, 0.6],
                    [0.1, 0.1, 0.1],
                    [0.2, 0.2, 0.2]
                ]
            }
        },
        mounted(){
            this.init()
        }, 
        methods:{
            init(){
            // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.getInstanceByDom(this.$refs.waterEcharts)
                if (myChart == null) {
                    myChart = echarts.init(this.$refs.waterEcharts);
                }
                //窗口尺寸改变
                window.addEventListener("resize",function(){
                    myChart.resize();
                })
                var series = [];
for (var i = 0; i < this.datas.length; i++) {
    var item = {
        type: 'liquidFill',
        radius: '70%',
        center: [this.attrs[i].center_l, '50%'],
        //  shape: 'roundRect',
        data: this.datas[i],
        backgroundStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(4,33,77, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(4,33,77, .5)'
                }, {
                    offset: 0,
                    color: 'rgba(4,33,77, 1)'
                }],
                globalCoord: false
            },
        },
        outline: {
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(50,115,233, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(50,115,233, .5)'
                    }, {
                        offset: 1,
                        color: 'rgba(50,115,233, 1)'
                    }],
                    globalCoord: false
                },
                shadowBlur: 10,
                shadowColor: '#000',
            }
        },
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 1,
                color: 'rgba(72,107,254, 0.8)'
            }, {
                offset: 0.75,
                color: 'rgba(21,216,238, .5)'
            }, {
                offset: 0,
                color: 'rgba(72,107,254, 1)'
            }],
            globalCoord: false
        }],
        label: {
            normal: { //此处没有生效，本地生效
                textStyle: {
                    fontSize: 40,
                    color: '#e6e6e6',
                },
                formatter: function(params){
                   console.log(params)
                   return 

                }

            }
        }
    }
    series.push(item);
}
                // 绘制图表
                this.options = {
                    graphic: [],
                    series: series
                }
                myChart.setOption(this.options);
            },
        }
    }
    </script>
    <style>
    .main{
        width:100%;height:260px;
        position:absolute;left:0;top:0;
    }
    </style>