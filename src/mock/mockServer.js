

import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/rating',{code:0,data:data.rating})
Mock.mock('/info',{code:0,data:data.info})
