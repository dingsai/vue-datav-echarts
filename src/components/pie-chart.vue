<template>
    <!-- 环形 -->
    <div class="pie">
        <div id="main" ref="echarts_pie"></div>
    </div>
    
    </template>
    <script>
    import * as echarts from 'echarts'
    export default {
        data(){
            return {
                options:{},
                serverData: {},
                timer:null
            }
        },
        mounted(){
            this.getList()
            this.timer = window.setInterval(() => {
                setTimeout(this.getList(), 0);
                // 每三分钟执行 6000*10 * 3
            }, 180000);
        }, 
        destroyed(){
            window.clearInterval(this.timer)
        },
        methods:{
            init(){
            // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.getInstanceByDom(this.$refs.echarts_pie)
                if (myChart == null) {
                    myChart = echarts.init(this.$refs.echarts_pie);
                }
                //窗口尺寸改变
                window.addEventListener("resize",function(){
                    myChart.resize();
                })
                // 绘制图表
                this.options = {
                    tooltip:{
                        triggerOn :'mousemove',
                    },
                    legend:[{
                        icon: 'circle',
                        orient:'vertical',
                        right:"3%",
                        top:"10%",
                        textStyle:{
                            color:'#04c3df',
                            fontSize:16,
                        }
                    }],
                    series: this.serverData.seriesData
                }
                myChart.setOption(this.options);
            },
            async getList(){
                const res = await this.$axios.get('/mock/getPieList');
                if(res.status == 200){
                    this.serverData = res.data;
                }
                this.init();
                
            },
        }
    }
    </script>
    <style>
    #main{
        width:100%;height:260px;
        position:absolute;left:0;top:0;
    }
    </style>