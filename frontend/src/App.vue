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
  /* --text-menu:
  --text-menu-2:
  --text-name:
  --text-body-2:
  --text-menu: */
  --text-size-small:1rem;
  --text-size-medium:1.2rem;
  --text-size-large: 1.5rem;
  --title-size-l: 4rem;
  --title-size-m: 3rem;
  --title-size-s: 2.1rem;

}

.light {
  
  --primary-color: 		#79c9ff ;
  /* --primary-color: 		#84c7e6 ; */
  --secundary-color: 		#e9f9ff;
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



@media all and (max-width: 1280px) {
 



    /* ----------NAV---------- */
    #responsive-menu{
        height: 160vh !important;

    }

    #nav-options{
        gap: 10px 0px !important ;
    }

    #menu-header{
        min-height: 50px;
    }

    #menu{
        max-height: 50px ;
    }

    #aboutme{
        min-height: calc(100vh - 50px) !important;
    }
    #a-menu{
        display: none !important;
    }

    #btn-responsive{
        display: flex !important;
    }


    /* ------------ ABOUT ME------------- */
    @keyframes contraer {
        from {
          height: 660px;
        }
        to {
          height: 0;
          
        }
    }
      
    @keyframes expandir {
        from {
          height: 0;
        }
        to {
          height: 660px;
          
        }
    }
    
    
    
    
    
    
    
    
    body{
        font-size: var(--text-size-medium);
    }

    .btn-skill{
        font-size: var(--text-size-medium);
    }

    .title{
        font-size: var(--title-size-m);
    }
    

}

@media all and (min-width: 1280px) {


    body{
        font-size: var(--text-size-large);
    }

    .btn-skill{
        font-size: var(--text-size-medium);
    }

    .title{
        font-size: var(--title-size-l);
    }

    #a-menu{
        font-size: var(--text-size-medium);
    }
     #responsive-menu{
        display: none  !important;

    }

}

@media all and (max-width: 600px) {
        /* ------------ ABOUT ME------------- */
        @keyframes contraer {
            from {
              height: 620px;
            }
            to {
              height: 0;
              
            }
        }
          
        @keyframes expandir {
            from {
              height: 0;
            }
            to {
              height: 620px;
              
            }
        }


    body{
        font-size: var(--text-size-small);
    }

    .btn-skill{
        font-size: var(--text-size-small);
    }

    .title{
        font-size: var(--title-size-m);
    }
    .skill{
        width: auto;
    }
    #conte {
        gap: 20px 10px;
        min-height: 200px;
        padding-top: 30px;
    }
    .skillicon{
        width: 70px;
        margin: 0;
      
    }
}

@media all and (max-width: 400px) {

/* 
    ------------ ABOUT ME------------- */
    @keyframes contraer {
        from {
        height: 720px;
        }
        to {
        height: 0;
        
        }
    }
    
    @keyframes expandir {
        from {
        height: 0;
        }
        to {
        height: 720px;
        
        }
    }
    

    ul{
        padding: 0;
    }
    body{
        font-size: var(--text-size-small);
    }

    .btn-skill{
        font-size: var(--text-size-medium);
    }

    .title{
        font-size: var(--title-size-s);
    }

    .contact{
        min-width: auto;
    }
    #contactme{
        width: 100%;
    }



}



</style>