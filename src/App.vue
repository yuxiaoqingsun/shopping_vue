<template>
  <div>
      <ShopHeader/>
      <router-view></router-view>
      <!-- <ShopFooter/> -->
      <!-- <ShopFooter v-show="['/home','/search'].includes($route.path)"/> -->
      <ShopFooter v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import ShopHeader from './components/ShopHeader'
import ShopFooter from './components/ShopFooter'
export default {
    name:'App',
    components:{ShopHeader, ShopFooter},
    mounted() {
      this.$store.dispatch("shophome/categoryList");
    },
}
</script>

<style>

</style>