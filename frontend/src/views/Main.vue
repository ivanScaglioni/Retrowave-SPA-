<template>
  
  
  <main>
    
    
    <div class="component uno">
      <Menu/>
    </div>




    <div class="component">
      <Aboutme/>
    </div>
    
  

        
    <div class="component">
      <Skills/>
    </div>
    
  
    

      
    <div class="component">
      <Links/>
    </div>
    


    

    
    
    


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
const Menu = markRaw(
  defineAsyncComponent(() => import("../components/Menu.vue"))
) as Component;

export default defineComponent({

  components:{
    Skills,
    Aboutme,
    Links,
    Menu
 
  }
});

</script>


<style>




.container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
 

}
.uno{
  position: sticky;
  top: 0px;
  z-index: 100;
  width: 100%;
  
}

section{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

main{
  width: 100%;
  
}
a{
  width: 100%;
  color:#c6d4df;
  text-decoration: none;

 

}
h2{
  padding: 0;
  margin: 0;
}


</style>