<template>
  
  
  <main>
    
    
    
    <Aboutme/>
  

    
  
    <Skills/>

  


    <Links/>


  </main>

 
</template>


<script lang="ts">
"use strict";
import { Component, defineComponent, defineAsyncComponent, markRaw } from "vue";


const Links = markRaw(
  defineAsyncComponent(() => import("../components/Links.vue"))
) as Component;
const Aboutme = markRaw(
  defineAsyncComponent(() => import("../components/Aboutme.vue"))
) as Component;
const Skills = markRaw(
  defineAsyncComponent(() => import("../components/Skills.vue"))
) as Component;

export default defineComponent({
  data(){

    return{  
      
    }

  },
  components:{
    Skills,
    Aboutme,
    Links
 
  }
});

</script>


<style>


main{
  width: 100%;
}


.component{
  width: 100%;
  text-align: center;
  margin: auto;
  
  
}

/* background-color: #171a21 */

.title{


  width: max-content;
  padding: 20px;
  padding-bottom: 0;
 
  margin: auto;
  font-size: 100px;
}


/* .contact{

  display: flex;
  justify-content: center;
  align-items: center;

} */


</style>