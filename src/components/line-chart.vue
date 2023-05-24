<template>
<!-- 折线 -->
<div class="main" ref="echarts">

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
            let myChart = echarts.getInstanceByDom(this.$refs.echarts)
            if (myChart == null) {
                myChart = echarts.init(this.$refs.echarts);
            }
            // 绘制图表
            this.options = {
                title: {
                    text: 'ECharts_line_chart',
                    textStyle:{
                        color:'#fff'
                    }
                },
                tooltip: {},
                xAxis: {
                    data: this.serverData.xAxisData
                },  
                yAxis: {
                    type:'value'
                },
                series: this.serverData.seriesData,
                textStyle:{
                    color:'#fff',
                }
            }
            myChart.setOption(this.options);
        },
        async getList(){
            const res = await this.$axios.get('/mock/getBarList');
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