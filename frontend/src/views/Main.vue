<template>
  <main >
    <div class="fondo color">
      .
    </div>
    <div class="container color" >
      <div class="search">
        <select name="" v-model="currentTab"  id="esta" >
          <option value="Home"> Home</option>
          <option value="About me"> Abount me</option>
          <option value="Skills"> Skills</option>
        </select>
        <button @click="mostra()">clikea puto</button>
        <!-- <div>
          <img class="lupe" src="../../public/lupa.svg" alt="">
        </div> -->
      </div>
      <div class="blanco">
        
      </div>
        <transition name="component-fade" mode="out-in">
          <component :is="currentComponent"> </component>
        </transition>
    </div>
    <div class="handle">
      <button @click="change('next'); show =!show" >next</button>
      <button @click="change('pre')" >previous</button>
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
      currentTab:'Home',
      show:true as boolean ,
      pos: 0, 
      arr:[Myname, Aboutme, Skills],
      currentComponent: Myname as Component
    }
  },

  methods:{
    // change(t:string){
    //   console.log(this.show);
    //   if (t =='next'){

    //     if (this.pos == 2){

    //       this.pos = 0;
          
    //     }else{
    //       this.pos++;

    //     }

    //     this.currentComponent = this.arr[this.pos];
    //   }else{

    //     if(this.pos == 0){

    //       this.pos=2;
          
    //     }else{

    //       this.pos--;
          
    //     }
    //     this.currentComponent = this.arr[this.pos];
    //   }

    // },
    mostra(){
      const sele = document.getElementById('esta') as HTMLSelectElement;
      console.log(sele.value);
    }
  },
mounted(){
      
      let alpha: number = 1;
      let r: number = 0;
      let i = 5;
      let index1 =0;
      let index2 = 1;
      const atr = [255,0,0]
      const elfondo = document.getElementsByClassName("color") as HTMLCollectionOf<HTMLElement>;
      const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
      elfondo[0].style.background = `linear-gradient(${120+r}deg, rgba(${atr[0]},${atr[1]},${atr[2]},.8), rgba(255,0,0,0) 70.71%),linear-gradient(${240+r}deg, rgba(${atr[2]},${atr[0]},${atr[1]},.8), rgba(0,255,0,0) 70.71%),linear-gradient(${360+r}deg, rgba(${atr[1]},${atr[2]},${atr[0]},.8), rgba(0,0,255,0) 70.71%)`;
      elfondo[1].style.background = `linear-gradient(${120+r}deg, rgba(${atr[0]},${atr[1]},${atr[2]},.8), rgba(255,0,0,0) 70.71%),linear-gradient(${240+r}deg, rgba(${atr[2]},${atr[0]},${atr[1]},.8), rgba(0,255,0,0) 70.71%),linear-gradient(${360+r}deg, rgba(${atr[1]},${atr[2]},${atr[0]},.8), rgba(0,0,255,0) 70.71%)`;
      
        atr[index1] -= i
        atr[index2] += i
        
        if(atr[index2] >= 255){
          if(index1 >= 2){
            index1 = 0
            index2 = 1
          }else{
            index1++;
            index2++;
          }
          if(index2 >= 3){
            index1= 2;
            index2 =0;
          }
        }
  
      r += alpha;
      if(r>=360){
        r=0

      }
      // console.log(atr+"   " + r)
      }, 100);

      setIntervalConst;

  
  },
  watch:{
    currentTab(t:string){
      const sele = document.getElementById('esta') as HTMLSelectElement;
      let i = 0;
      if(sele.value == "Home"){
        i=0
      }else if(sele.value =="About me"){
        i=1
      }else if(sele.value == "Skills"){
        i=2
      }
      this.currentComponent = this.arr[i];
    }
  }

});
</script>


<style>

#esta{
  width: 300px;
  height: 40px;
}
/* .lupe{
  position: relative;
  width: 30px;
  margin-left: 90%;
  
} */

.search{
  position: absolute;
  max-width: 500px;
  width: 80%;
  height: 40px;
  background-color: gray;
  top: 50px;
  border-radius: 30px;
}

.blanco{
  position: absolute;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  background-color: rgba(255, 255, 255, 0.835);
  border-radius: 5vh;
  
  
  z-index: -1;
  
}

main{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: -3;
  
  
}
.handle{
  position: absolute;
  z-index: 10;
}
.container{
  position: absolute;
  display: flex;

  height: calc(100% - 10px);
  width: calc(100% - 10px);
  color: black;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  border-radius: 5vh;
  z-index: 10;
  

  
 
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2) , 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: all .3s ease-out;
}

.fondo{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 5vh;
  filter: blur(10px);
  
}

.component-fade-enter-from,
.component-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}





</style>