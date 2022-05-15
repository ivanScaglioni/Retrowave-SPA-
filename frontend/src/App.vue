<template>

    
  <Main/>

</template>

<script lang="ts">
import { Component, defineComponent, defineAsyncComponent, markRaw } from "vue";

const Main= markRaw(
  defineAsyncComponent(() => import("./views/Main.vue"))
) as Component;
export default defineComponent({
  name: "app",
  components:{
    Main
  }

});
</script>

<style>





:root {


  --text-size-small:1rem;
  --text-size-medium:1.2rem;
  --text-size-large: 1.5rem;
  --title-size-l: 4rem;
  --title-size-m: 3rem;
  --title-size-s: 2.1rem;
}



body {
   
  padding: 0;
  margin: 0;
  transition-duration: 1s;
  font-family: 'Poiret One', cursive  ;

  
}

*{
  scroll-behavior:smooth;
  


}







</style>