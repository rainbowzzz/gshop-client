

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATING,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import Vue from 'vue'

export default {
 /* [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },*/
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USER](state,{user}){
    state.user=user
  },
  [RESET_USER](state){
    state.user={}
  },
  [RECEIVE_GOODS](state,{goods}) {
    state.goods = goods
  },
  [RECEIVE_RATING](state,{rating}) {
    state.rating =rating
  },
  [RECEIVE_INFO](state,{info}) {
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)
      state.shopCount.push(food)
    }else {
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--;
      if(food.count===0){
        state.shopCount.splice(state.shopCount.indexOf(food),1)
      }
    }
  },

}

