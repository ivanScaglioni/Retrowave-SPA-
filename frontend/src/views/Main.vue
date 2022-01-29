<template>
  <main>
    <div class="container">
      <div>
        <transition name="component-fade" mode="out-in">
          <component :is="currentComponent"> </component>
        </transition>
      </div>
    </div>
    <div class="handle">
      <button @click="change('next'); show =!show" >next</button>
      <button @click="change('pre')">previous</button>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, defineComponent, defineAsyncComponent , markRaw} from 'vue';

const Myname =  markRaw(defineAsyncComponent(()=> import('../components/Myname.vue'))) as Component;
const Aboutme = markRaw(defineAsyncComponent(()=> import('../components/Aboutme.vue'))) as Component;
const Skills = markRaw(defineAsyncComponent(()=> import('../components/Skills.vue'))) as Component;



export default defineComponent({
  name: 'Main',
  data(){
    return{
      
      show:true as boolean ,
      pos: 0, 
      arr:[Myname, Aboutme, Skills],
      currentComponent: Myname as Component
    }
  },

  methods:{
    change(t:string){
      console.log(this.show);
      if (t =='next'){

        if (this.pos == 2){

          this.pos = 0;
          
        }else{
          this.pos++;

        }
        this.currentComponent = this.arr[this.pos];
      }else{

        if(this.pos == 0){

          this.pos=2;
          
        }else{

          this.pos--;
          
        }
        this.currentComponent = this.arr[this.pos];
      }

    }
  }


});
</script>


<style>

main{
  background-image: url('../../public/img/m3.jpg');
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: gray;
  background-image: radial-gradient(
    circle at top right,
    white,
    gray 80%
  ); */
  color: white;
  z-index: -3;
}
.handle{
  position: absolute;
  z-index: 10;
}
.container{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
}




.component-fade-enter-active,
.component-fade-leave-active {
  transition: all .3s ease-out;
}


.component-fade-enter-from,
.component-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


</style>