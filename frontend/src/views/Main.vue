<template>
  <main>
    <div class="wall">
      <img class="road" src="../../public/img/fondo1.jpg" alt="" />
      <div id="sun">
        <div id="curtain">

        </div>
        <div id="line_container">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

      </div>
    </div>
   
    <div class="component_container" @touchstart="handleTouchComponents($event , 'start')" @touchend="handleTouchComponents($event , 'end')" @wheel="handleWheelComponents">

      <div v-if="currentComponent == 'I'" class="component">
        <Intro />
      </div>

      <div v-else-if="currentComponent == 'A'" class="component lottext">
        <Aboutme />
        <Skills />
      </div>

      <div v-else-if="currentComponent == 'L'" class="component">
        <Links />
      </div>
    </div>

  </main>
</template>


<script lang="ts">
"use strict";
import { Component, defineComponent, defineAsyncComponent, markRaw } from "vue";

const Intro = markRaw(
  defineAsyncComponent(() => import("../components/Intro.vue"))
) as Component;
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

      booltimer:true,
      boolWheel: false,
      toucheStartCoo:[-1,-1],
      lastKnownScrollY:-1,
      indexComp: 0,
      arrComp: ['I','A','L'],
      currentComponent : "I"
    }
  },

  components: {
    Intro,
    Skills,
    Aboutme,
    Links,

  },
  methods:{
    handleWheelComponents(e:WheelEvent){
      if(this.booltimer){
        this.booltimer = !this.booltimer;
        let setbootimer = setTimeout(() => {
          this.booltimer = !this.booltimer;
        }, 500);
        setbootimer;
        if(window.scrollY == this.lastKnownScrollY){
          if(e.deltaY < 0  && window.scrollY == 0 ){
            if(this.indexComp > 0){
              this.indexComp--;
            }else{
              this.indexComp = this.arrComp.length - 1;
            }
          }else if(e.deltaY > 0 ){
            if(this.indexComp < this.arrComp.length-1){
              this.indexComp++;
            }else{
              this.indexComp = 0;
            }
          }
          
          this.currentComponent = this.arrComp[this.indexComp];
          this.lastKnownScrollY = -10;
          this.boolWheel = true
          
        }
        if (this.boolWheel){
          this.boolWheel = false;
        }else{
          this.lastKnownScrollY = window.scrollY;
        }
        
      }
      
      
      

    },
    handleTouchComponents(e : TouchEvent , s :string){
      if(s == "start"){
        this.toucheStartCoo[0] = e.changedTouches[0].clientX,
        this.toucheStartCoo[1] = e.changedTouches[0].clientY
      }else{
        let sign = e.changedTouches[0].clientX - this.toucheStartCoo[0]
        let base =Math.abs(sign);
        let altura =Math.abs(e.changedTouches[0].clientY - this.toucheStartCoo[1])
        if( base > altura && base > 50){
          if(sign > 0){
            if(this.indexComp > 0){
              this.indexComp--;
            }else{
              this.indexComp = this.arrComp.length - 1;
            }
          }else{
            if(this.indexComp < this.arrComp.length-1){
              this.indexComp++;
            }else{
              this.indexComp = 0;
            }
          }
          console.log(this.indexComp)
          this.currentComponent = this.arrComp[this.indexComp];
        }
      }
      
      

    }
  },

});
</script>


<style>

main{
  display: flex;
  background-color: #1901288e;
  justify-content: center;

}
.road {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}


.component_container {
  display: flex;
  
  overflow-x:hidden;
  overflow-y: hidden;
}
.component{

  min-width: 100vw;
  animation-name: leftRight;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}

.wall {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #7209b7;
  z-index: -10;
}

#curtain{
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 188, 0, 1) 0%,
    rgb(255, 119, 0) 36%,
    rgba(255, 0, 0, 0) 36%,
    rgba(255, 0, 0, 0) 100%
  );
  z-index: 10;
}

#sun {
  
  position: absolute;
  margin-top: 1vh;
  border-radius: 50%;
  width: 45vh;
  height: 45vh;

  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  filter: brightness(1.5) blur(0.5px);
  
  box-shadow: 
  0 0 1vw #8c10ff
  , 0 0 3vw #8c10ff, 
  0 0 10vw #8c10ff
  ;
  
  background: linear-gradient(
    180deg,
    rgba(255, 188, 0, 1) 0%,
    rgba(255, 117, 0, 1) 36%,
    rgb(255, 68, 0) 70%,
    rgb(169, 0, 0) 100%
  );
  overflow: hidden;
}
#line_container{
  width: 100%;
  display:  flex;
  gap: 3vh 0px;
  flex-direction: column;
  animation-name: downLoop;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 1, 1, 1);
}

.line{
  width: 100%;
  height: 2vh;
  background-color: #050008;
}

.lottext{
  background-color: rgba(4, 3, 5, 0.485);
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}


section {
  min-width: 100vw;
  
  display: flex;
  flex-direction: column;
  
  align-items: center;
}



main {
  width: 100vw;
  min-height: 100vh;
}

a {
  text-decoration: none;
}


.title-l{
  font-family:'Atomic Age', cursive;

 
  text-shadow: 0 0 1vw #8c00ff, 0 0 3vw #8c00ff, 0 0 10vw #8c00ff, 0 0 10vw #8c00ff, 0 0 .4vw #d6a3ff;
}

.title-s{
  font-family:'Atomic Age', cursive;
   text-shadow: 0 0 1vw #8c00ff, 0 0 3vw #8c00ff, 0 0 10vw #8c00ff, 0 0 10vw #8c00ff, 0 0 .4vw #d6a3ff;
}




@keyframes downLoop {
  0% {
    transform: translate(0 , 0px); 
  }
  100% { 
    transform: translate(0 , 5vh);
  }
}

</style>