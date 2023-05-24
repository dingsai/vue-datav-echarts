<template>
    <!-- 地图-北京3D -->
    <div class="mapBJ3D">
        <div class="main" ref="bjEcharts">
    
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
                bjData: null,
                BJDatas: [],
                _data: [],
            }
        },
        async mounted(){
            //异步获取json 地图位置后 在设置Echarts
            this.bjData = await this.getJson()
            this.BJDatas = this.bjData.features.map(item =>{
                return { 
                    name : item.properties.name,
                    value: (Math.random() * 1000 + 100).toFixed(0)
                }
            })
            this.init()

        }, 
        methods:{
            getJson(){
                return this.$axios.get('../beijing.json')
            },  
            init(){
                echarts.registerMap('北京', this.bjData);//地图北京
        
            // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.getInstanceByDom(this.$refs.bjEcharts)
                if (myChart == null) {
                    myChart = echarts.init(this.$refs.bjEcharts);
                }
                //窗口尺寸改变
                window.addEventListener("resize",function(){
                    myChart.resize();
                })

                
                
                // 绘制图表
                this.options = {
                    visualMap: {
                        show: true,
                        min: 0,
                        max: 1000,
                        calculable: true,
                        realtime: false,
                        inRange: {
                            color: ['#2884db', '#244779']
                        },
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series: [{
                        tooltip: {
                            trigger: 'item'
                        },
                        zlevel:1,
                        name: '朝阳区',
                        type: 'map3D',
                        map: '朝阳区',
                        boxDepth: 120, //地图倾斜度
                        regionHeight: 3, //地图厚度
                        label: {
                            show: true, //是否显示市
                            textStyle: {
                                color: "#fff", //文字颜色
                                fontSize: 12, //文字大小
                                fontFamily: '微软雅黑',
                                backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
                            },
                        },
                        itemStyle: {
                            opacity: 0.9, // 透明度
                            borderWidth: 0.6, //分界线宽度
                            borderColor: "#207fce", //分界线颜色
                        },
                        groundplane: {
                            show: false
                        },
                        data: this.BJDatas,
                        // shading: 'realistic',
                        // 真实感材质相关配置 shading: 'realistic'时有效
                        realisticMaterial: {
                            detailTexture: '#fff', // 纹理贴图
                            textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                            roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
                            metalness: 0, // 0材质是非金属 ，1金属
                            roughnessAdjust: 0
                        },
                        viewControl:{
                            projection: 'perspective',	
                            distance: 120,	
                            center:[-5,-22,0]
                        }
                    }]
                }
                myChart.setOption(this.options, true);
            },
        }
    }
    </script>
    <style scoped>
    .main{
        width:100%;height:500px;
        position:absolute;left:0;bottom:0;
    }
    </style>