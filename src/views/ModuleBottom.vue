<template>
    <div class="module_box">
        <div class="box_left2">
          <dv-border-box-1 class="box box1">
            <!-- ehcarts折线图 -->
            <lineChart></lineChart>
          </dv-border-box-1>
        </div>
        <div class="box_center2">
          <dv-border-box-1 class="box box2">
            <dv-active-ring-chart :config="config6" style="width:100%;height:100%" />
          </dv-border-box-1>
        </div>
        <div class="box_right2">
          <dv-border-box-8  class="box box6">
            <dv-water-level-pond class="water-level-pond" :config="config3" />
          </dv-border-box-8>
        </div>
      </div>
</template>
<script>
import lineChart from '@/components/line-chart.vue'
export default {
  components:{
      lineChart
  },
  data() {
    return {
      config1:{
        data: [
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          }
        ],
        showValue: true
      },
      config3:{
        data: [66, 45],
        shape: 'roundRect',
        colors:["#fb7293"]
      },
      config6:{
        radius: '40%',
        activeRadius: '45%',
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        digitalFlopStyle: {
          fontSize: 20
        },
        showOriginValue: true
      }
    }
  }
}
</script>