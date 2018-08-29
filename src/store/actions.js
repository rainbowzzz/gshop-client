

import {reqAddress,reqCategorys,reqShops} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER
} from './mutation-types'
export default {
  async getAddress ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)  // {code:0, data: address}
    // 有了结果提交mutation
    const address = result.data
    commit(RECEIVE_ADDRESS, {address})
  },
  async getCategorys({commit}){
    const result=await reqCategorys();
    const categorys=result.data
    commit(RECEIVE_CATEGORYS,{categorys})
  },
  async getShops({commit,state}){
    const {latitude,longitude}=state
    const result=await reqShops(longitude,latitude)
    const shops=result.data
    commit(RECEIVE_SHOPS,{shops})
  },
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  }
}

