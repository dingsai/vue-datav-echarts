<template>
    <div class="module_box">
        <div class="module box_left">
          <dv-border-box-11 class="box box1" title="创新创业团队注册分布" :titleWidth="280">
            <pieChart></pieChart>
          </dv-border-box-11>
          <dv-border-box-11 class="box box2" title="创新创业团队领导人户籍分布" :titleWidth="280">
            <capsuleChart></capsuleChart>
          </dv-border-box-11>
          <dv-border-box-11 class="box box3" title="创新创业团队注册城市分布">
            <lineBarChart></lineBarChart>
          </dv-border-box-11>
        </div>
        <div class="module box_center">
          <dv-border-box-12 class="box box3" title="地图分布">
            <mapChart></mapChart> 
          </dv-border-box-12>
          <dv-border-box-8 class="box box4">
              <waterChart></waterChart> 
          </dv-border-box-8>
        </div>
        <div class="module box_right">
          <dv-border-box-10 class="box box1" title="创新创业团队注册分布" :titleWidth="280">
            <boardList></boardList>
          </dv-border-box-10>
          <dv-border-box-1 class="box box2">
            <linearChart></linearChart>
          </dv-border-box-1>
          <dv-border-box-11 class="box box3" title="创新创业团队注册城市分布">
            <lineBarChart></lineBarChart>
          </dv-border-box-11>
        </div>
      </div>
</template>
<script>
import pieChart from '@/components/pie-chart.vue'
import capsuleChart from '@/components/capsule-chart.vue'
import lineChart from '@/components/line-chart.vue'
import lineBarChart from '@/components/line-bar-chart.vue'
import boardList from '@/components/board-list.vue'
import mapChart from '@/components/map-chart.vue'
import linearChart from '@/components/linear-chart.vue'
import waterChart from '@/components/water-chart.vue'
export default {
    components:{
        pieChart,
        capsuleChart,
        lineChart,
        lineBarChart,
        boardList,
        mapChart,
        linearChart,
        waterChart
    },
  data() {
    return {
       
    }
  },
  mounted(){
       
  },
  methods:{
      
  }
}
</script>