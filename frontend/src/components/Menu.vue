<template>
    <section id="menu">

        <a class="btn-a" href="#app">-</a>

        <a class="btn-a" href="#skills">-</a>
  
        <a class="btn-a" href="#links">-</a>

    </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({


});
</script>

<style>

#menu{
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: 10vw;
  width: 100%;
  justify-content: center;
  bottom: 1vh;
  z-index: 100;
  background-color: transparent;
 
}



.btn-a{
  text-align: center;
  font-family: 'Flow Rounded', cursive;
  font-size: 70px;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 2px red;
  filter: drop-shadow(0px 0px 20px rgb(255, 0, 0)) invert(20%);
  transition-duration: 0.2s;

}

.btn-a:active{
  transform: translate( 0px, -20px);
}


</style>