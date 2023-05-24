<template>
    <div class="lineBar">
        <!-- 柱状折线统计图 -->
        <div id="main" ref="lineBarEcharts">

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
            let myChart = echarts.getInstanceByDom(this.$refs.lineBarEcharts)
            if (myChart == null) {
                myChart = echarts.init(this.$refs.lineBarEcharts);
            }
            //窗口尺寸改变
            window.addEventListener("resize",function(){
                myChart.resize();
            })
            // 绘制图表
            this.options = {
                grid: {
                    top: '10%',
                    left: '14%',
                    right: '14%',
                    bottom: '18%',
                    show: false
                },
                xAxis: {
                    axisLabel: {
                        color: '#0ed7f1',
                        fontSize:18
                    },
                    data: this.serverData.xAxisData
                },  
                yAxis: {
                    type:'value',
                    axisLabel: {
                        color: '#0ed7f1',
                        fontSize:16
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#0ed7f1',
                        },
                    },
                },
                series: [
                    {
                        data: this.serverData.lineData,
                        type: 'line',
                        itemStyle: {
                            color: '#0ed7f1',
                            opacity: 0,
                        }
                    },
                    {
                        data: this.serverData.barData,
                        type: 'bar',
                        barWidth: '40',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: '#00E3FE',
                                },
                                {
                                    offset: 0,
                                    color: '#0176CD',
                                },
                            ]),
                        },
                    }
                ],
                textStyle:{
                    color:'#fff',
                }
            }
            myChart.setOption(this.options);
        },
        async getList(){
            const res = await this.$axios.get('/mock/getLineBarList');
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