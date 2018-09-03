

export default {
  totalCount(state){
    return state.shopCount.reduce((preTotal,food)=>{
      return preTotal+food.count
    },0)

  },
  totalPrice(state){
    return state.shopCount.reduce((preTotal,food)=>{
      return preTotal+food.count*food.price
    },0)
  },

}
