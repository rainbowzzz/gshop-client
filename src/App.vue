<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  //import {reqAddress,reqCategorys} from './api/index'
  export default {

     async mounted () {
     /*const result = await reqAddress('40.10038,116.36867')
     console.log(result)*/
       this.$store.dispatch('getAddress')
     },
    components:{
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

</style>
