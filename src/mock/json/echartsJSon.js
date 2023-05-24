import Mock from 'mockjs'
const status = 200 // 状态码 项目同一
export default{
  getPieList () {
    let data = Mock.mock({
        "seriesData":[{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['35%', '50%'],
          "data|7": [{
              value: '@integer(1,500)', name: `@cname()`,
              label: {
                  color: '@color()',
                  fontSize:14
              },
          }],
          itemStyle: {
              shadowColor: '@color()',
              shadowBlur: 30,
          },
          z: 1
      }]
    })
    return {
      status,
      message:'success',
      data
    }
  },
  getCapsuleList () {
    let data = Mock.mock({
        "data|5":[{
          "name":'@province()',
          "value":"@integer(1,100)"
        }],
        "colors|5":['@color()']
    })
    return {
      status,
      message:'success',
      data
    }
  },
  getBarList () {
    let data = Mock.mock({
        "xAxisData|5": ["@city()"],
        "seriesData": [
          {
            "name": "@name",
            "type": "bar",
            "data|5": ["@integer(1,100)"]
          }
        ]
    })
    return {
      status,
      message:'success',
      data
    }
  },
  getLineBarList () {
    let data = Mock.mock({
        "xAxisData|5": ["@city()"],
        "lineData|7": ["@integer(0,300)"],
        "barData|7": ["@integer(0,300)"]
    })
    return {
      status,
      message:'success',
      data
    }
  },
  getBoardist () {
    let data = Mock.mock({
      "data|20":[
        ["@time()","@cname()","@integer(1,100)"]
      ]
    })
    return {
      status,
      message:'success',
      data
    }
  },
  getPrivince () {
    let data = Mock.mock({
      point:{
          '黑龙江': [127.9688, 45.368],
          '内蒙古': [110.3467, 41.4899],
          "吉林": [125.8154, 44.2584],
          '北京市': [116.4551, 40.2539],
          "辽宁": [123.1238, 42.1216],
          "河北": [114.4995, 38.1006],
          "天津": [117.4219, 39.4189],
          "山西": [112.3352, 37.9413],
          "陕西": [109.1162, 34.2004],
          "甘肃": [103.5901, 36.3043],
          "宁夏": [106.3586, 38.1775],
          "青海": [101.4038, 36.8207],
          "新疆": [87.611053,43.828171],
          "西藏": [91.117212,29.646922],
          "四川": [103.9526, 30.7617],
          "重庆": [108.384366, 30.439702],
          "山东": [117.1582, 36.8701],
          "河南": [113.4668, 34.6234],
          "江苏": [118.8062, 31.9208],
          "安徽": [117.29, 32.0581],
          "湖北": [114.3896, 30.6628],
          "浙江": [119.5313, 29.8773],
          "福建": [119.4543, 25.9222],
          "江西": [116.0046, 28.6633],
          "湖南": [113.0823, 28.2568],
          "贵州": [106.6992, 26.7682],
          "云南": [102.9199, 25.4663],
          "广东": [113.12244, 23.009505],
          "广西": [108.479, 23.1152],
          "海南": [110.3893, 19.8516],
          "台湾": [120.702967,24.123621],
          '上海': [121.4648, 31.2891]
      },
      data:[
          [{
              name:"北京市",
              value:0
          },{
              name: '黑龙江',
              value:0
          },{name:'上海市'}],
            [{
              name: '内蒙古',
              value: 0
          }],	[{
              name: '吉林',
              value: 0
          }],	[{
              name: '辽宁',
              value: 0
          }],	[{
              name: '河北',
              value: 0
          }],	[{
              name: '天津',
              value: 0
          }],	[{
              name: '山西',
              value: 0
          }],	[{
              name: '陕西',
              value: 0
          }],	[{
              name: '甘肃',
              value: 0
          }],	[{
              name: '新疆',
              value: 0
          }],	[{
              name: '西藏',
              value: 0
          }],	[{
              name: '台湾',
              value: 0
          }],	[{
              name: '黑龙江',
              value: 0
          }],	[{
              name: '云南',
              value: 0
          }],	[{
              name: '宁夏',
              value: 0
          }],	[{
              name: '青海',
              value: 0
          }],	[{
              name: '四川',
              value: 0
          }],	[{
              name: '重庆',
              value: 0
          }],	[{
              name: '山东',
              value: 0
          }],	[{
              name: '河南',
              value: 0
          }],	[{
              name: '江苏',
              value: 0
          }],	[{
              name: '安徽',
              value: 0
          }],	[{	
              name: '湖北',
              value: 0
          }],	[{
              name: '浙江',
              value: 0
          }],	[{
              name: '福建',
              value: 0
          }],	[{
              name: '江西',
              value: 0
          }],	[{
              name: '湖南',
              value: 0
          }],	[{
              name: '贵州',
              value: 0
          }],[{
              name: '广西',
              value: 0
          }],	[{
              name: '海南',
              value: 0
          }],	[{
              name: '上海',
              value: 0
          }]
      ],
    })
    return {
      status,
      message:'success',
      data
    }
  },
}