<template>
  <div id="app">
    <router-view/>
    <Btm></Btm>
  </div>
</template>

<script>
  import Btm from "@/components/bottom";

  export default {
    name: 'App',
   components:{
      Btm
   }
  }
</script>

<style src="../../style/common.css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
