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

    <div class="component_container">
      <div class="component">
        <Menu />
      </div>

      <div class="component">
        <Aboutme />
      </div>
      
      <div class="component">
        <Skills />
      </div>

      <div class="component">
        <Links />
      </div>
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
  components: {
    Skills,
    Aboutme,
    Links,
    Menu,
  },
});
</script>


<style>
.component_container {
  background-color: #3403548e;
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
.road {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
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
  
  filter: brightness(1.5) blur(0.1px);

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
  gap: 2vh 0px;
  flex-direction: column;
  animation-name: downLoop;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 1, 1, 1);
}

.line{
  width: 100%;
  height: 2vh;
  background-color: #050008;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}


section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  width: 100%;
}
a {
  text-decoration: none;
}
h2 {
  padding: 0;
  margin: 0;
}

@keyframes downLoop {
  0% {
    transform: translate(0 , 0px); 
  }
  100% { 
    transform: translate(0 , 4vh);
  }
}

</style>