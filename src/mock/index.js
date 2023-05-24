import mockjs from 'mockjs';
import echartJSon from './json/echartsJSon.js' //引入生成数据的js
const Mock = require('mockjs') // Mock函数

Mock.mock('/mock/getPieList','get',echartJSon.getPieList);
Mock.mock('/mock/getCapsuleList','get',echartJSon.getCapsuleList);
Mock.mock('/mock/getBarList','get',echartJSon.getBarList);
Mock.mock('/mock/getLineBarList','get',echartJSon.getLineBarList);
Mock.mock('/mock/getBoardist','get',echartJSon.getBoardist);

Mock.mock('/mock/getPrivince','get',echartJSon.getPrivince);


export default mockjs