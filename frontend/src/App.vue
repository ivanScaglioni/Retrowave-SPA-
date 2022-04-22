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
  --primary-color: #1b2838;
  --secundary-color: rgba(42, 71, 94, 1);
  --contact-color: #171a21;
  --text-color: #c6e6f8;
  --text-color-2: #c6d4df;
  --text-btn-skill: #4f94bc;

  --text-size-small:1rem;
  --text-size-medium:1.2rem;
  --text-size-large: 1.5rem;
  --title-size-l: 4rem;
  --title-size-m: 3rem;
  --title-size-s: 2.1rem;

}

.light {
  
  --primary-color: #9fd9ff ;

  --secundary-color:#d9feff;
  /* --text-color:  rgb(0, 26, 41); */
  --text-color:  #1b2325;
  /* #2775a362  */
}

body {
   
  padding: 0;
  margin: 0;
  color: var(--text-color);
  background-color: var(--primary-color);
  /* font-size: 30px; */
  transition-duration: 1s;
  font-family: 'Didact Gothic', sans-serif;
  
}

*{
  scroll-behavior:smooth;
   /* text-shadow: -1px -1px rgb(0 0 0 / 70%); */
}







</style>