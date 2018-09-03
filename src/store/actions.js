

import {reqAddress,reqCategorys,reqShops,reqUser,reqLogOut} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATING,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
import {reqShopGoods, reqShopInfo, reqShopRating} from "../api/index";
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
  },
  async getUser({commit}){
    const result=await reqUser();
    if(result.code===0){
      const user=result.data
      commit(RECEIVE_USER,{user})
    }
  },
  async logout({commit}){
    const result=await reqLogOut();
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  async getShopInfo({commit},cb){
    const result=await reqShopInfo();
    if(result.data===0){}
     const info=result.data;
      info.score=3.5
      commit(RECEIVE_INFO,{info})

      cb&&cb()
  },
  async getShopRating({commit},cb){
    const result=await reqShopRating();
    if(result.data===0){}
    const rating=result.data;
    commit(RECEIVE_RATING,{rating})

    cb&&cb()
  },
  async getShopGoods({commit},cb){
    const result=await reqShopGoods();
    if(result.data===0){}
    const goods=result.data;
    commit(RECEIVE_GOODS,{goods})

    cb&&cb()
  },
  updateFoodCount({commit},{food,isAdd}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
    },
  clearCart({commit}){
      commit(CLEAR_CART)

  }
}

