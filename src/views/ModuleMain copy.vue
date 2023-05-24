<template>
    <div class="module_box">
        <div class="box_left1">
          <dv-border-box-11 class="box box1" title="创新创业团队注册分布">
            <!-- 胶囊组件 -->
            <capsuleChart :dataChart="capsuleChartData"></capsuleChart>
          </dv-border-box-11>
          <dv-border-box-1 class="box box2">
            <dv-water-level-pond class="water-level-pond" :config="config3" />
          </dv-border-box-1>
          <dv-border-box-1 class="box box2">
            <dv-water-level-pond class="water-level-pond" :config="config3" />
          </dv-border-box-1>
        </div>
        <div class="box_center1">
          <dv-border-box-11 class="box box3" title="地图分布">
            <dv-flyline-chart :config="config2" :dev="true" style="width:100%;height:100%;"/>
          </dv-border-box-11>
        </div>
        <div class="box_right1">
          <dv-border-box-8 class="box box4">
            <lineChart></lineChart>
          </dv-border-box-8>
          <dv-border-box-8 :reverse="true" class="box box5">
            <dv-conical-column-chart :config="config5"/>
          </dv-border-box-8>
        </div>
      </div>
</template>
<script>
import capsuleChart from './capsule-chart.vue'
import lineChart from './line-chart.vue'
export default {
    components:{
        capsuleChart,
        lineChart
    },
  data() {
    return {
      style:{
        
      },
        capsuleChartData:{},
            
      config2:{
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: '新乡'
          },
          {
            position: [0.43, 0.29],
            text: '焦作'
          },
          {
            position: [0.59, 0.35],
            text: '开封'
          },
          {
            position: [0.53, 0.47],
            text: '许昌'
          },
          {
            position: [0.45, 0.54],
            text: '平顶山'
          },
          {
            position: [0.36, 0.38],
            text: '洛阳'
          },
          {
            position: [0.62, 0.55],
            text: '周口'
          },
          {
            position: [0.56, 0.56],
            text: '漯河'
          },
          {
            position: [0.37, 0.66],
            text: '南阳'
          },
          {
            position: [0.55, 0.81],
            text: '信阳'
          },
          {
            position: [0.55, 0.67],
            text: '驻马店'
          },
          {
            position: [0.37, 0.29],
            text: '济源'
          },
          {
            position: [0.20, 0.36],
            text: '三门峡'
          },
          {
            position: [0.76, 0.41],
            text: '商丘'
          },
          {
            position: [0.59, 0.18],
            text: '鹤壁'
          },
          {
            position: [0.68, 0.17],
            text: '濮阳'
          },
          {
            position: [0.59, 0.10],
            text: '安阳'
          }
        ],
        k: -0.5, //飞线收束程度
        bgImgUrl: "http://datav.jiaminghi.com/img/flylineChart/map.jpg",
        centerPointImg: {
          url: "http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png",
        },

        pointsImg: {
          url: "http://datav.jiaminghi.com/img/flylineChart/mapPoint.png",
        }
      },
      config3:{
        data: [66, 45],
        shape: 'roundRect',
        colors:["#fb7293"]
      },
      config4:{
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          },
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位'
      },
      config5:{
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 80
          },
          {
            name: '西峡',
            value: 71
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 35
          },
          {
            name: '漯河',
            value: 15
          }
        ],
        img: [
          'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
          'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
        ],
        showValue: true
      },
      timer:null
    }
  },
  mounted(){
        this.getCapsuleChart()
        this.timer = window.setInterval(()=>{
            setTimeout(this.getCapsuleChart(),0)
        },5000)
    },
    destroyed(){
        window.clearInterval(this.timer)
    },
    methods:{
        getCapsuleChart(){
            this.$axios.get('/mock/getCapsuleList').then((res)=>{
                this.capsuleChartData= res.data;
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>