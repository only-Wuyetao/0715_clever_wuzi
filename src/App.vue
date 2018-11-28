<template>
  <div>
    <router-view></router-view>
    <FootGuide v-show="$route.meta.isShow"></FootGuide>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
  import {reqAddress} from "./api"

  export default {
    name: "App",
    components: {
      FootGuide
    },
    async mounted(){
      const result = await reqAddress('116.36867','40.10038')
      console.log('result=',result)
    }
  }
</script>

<style scoped lang="stylus">

</style>
