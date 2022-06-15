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
  --vw-small:1.5vw;
  --vw-small-l:1.7;
  --vw-medium-s: 2vw;

  --vw-medium-l:4vw;

  --vw-big:7vw;
  --text-size-ss:1rem;
  --text-size-small:1.2rem;
  --text-size-medium:1.3rem;
  --text-size-large: 1.7rem;
  --title-size-l: 4.7rem;
  --title-size-m: 3.2rem;
  --title-size-s: 2.1rem;
  --title-size-ss: 1.8rem;
}



body {
  overflow-y:visible;
  overflow-x:hidden;
  padding: 0;
  margin: 0;
  transition-duration: 1s;
  font-family: 'Poiret One', cursive  ;
  color: #f8e3ff;
  
  
}

*{
  scroll-behavior:smooth;
  


}






</style>