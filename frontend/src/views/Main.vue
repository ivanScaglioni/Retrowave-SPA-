<template>
  <main  @click="mostro()">
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Monoton&family=Sigmar+One&display=swap" rel="stylesheet">
    <div class="container-rgb"  > 
      <div class="fondo"></div>        
      <div class="luz-rgb color"></div>
    </div>

    <div class="mega-container"  >
      <div class="search-container">

          <div id="bar" class="search" @mouseenter="this.show=true" @mouseleave="this.show=false" >
            <input id="putin" class="texto" @keyup="handlebar"   v-model="currentTab" role="combobox">
          </div>
          <div id="options"  >
            <div class="l"></div>
              <ul role="listbox" >
                <div class="option" ></div>
                <li role="presentation" class="option null">
                  <div @click="change(0)"  >home</div>
                </li>
                <li class="option null">
                  <div @click="change(1)" >about me</div>
                </li>
                <li class="option null">
                  <div @click="change(2)" >skills</div>
                </li>
              </ul>
            </div>

      </div>
      <div class="tab">
        <transition name="component-fade" mode="out-in">
          <component :is="currentComponent"> </component>
        </transition>
      </div>
    </div>
  </main>
</template>


<script lang="ts">
"use strict";
import { Component, defineComponent, defineAsyncComponent , markRaw, InputHTMLAttributes} from 'vue';

const Myname =  markRaw(defineAsyncComponent(()=> import('../components/Myname.vue'))) as Component;
const Aboutme = markRaw(defineAsyncComponent(()=> import('../components/Aboutme.vue'))) as Component;
const Skills = markRaw(defineAsyncComponent(()=> import('../components/Skills.vue'))) as Component;

export default defineComponent({

  name: 'Main',
  data(){
    return{
      arrtab:['','home','about me','skills'],
      indec: 0,
      currentTab:'',
      show : false,
      pos: 0, 
      arr:[Myname, Aboutme, Skills],
      currentComponent: Myname as Component
    }
  },

  methods:{
   
    mostra(){
      
      console.log('chulapa jastin');
    },
    change(n:number){
      this.currentComponent = this.arr[n];
      const barcito = document.getElementsByClassName('search-container')  as HTMLCollectionOf<HTMLElement>;
      if ( n==0){
        barcito[0].style.order = '2';
      }else{
        barcito[0].style.order = '0';
      }
      const opts = document.getElementsByClassName('option') as HTMLCollectionOf<HTMLElement>;
      n++
      opts[n].className += ' visto';
      this.mostro();
    },

    mostro(){
      const opt = document.getElementById('options') as HTMLElement;
      const bar = document.getElementById('bar') as HTMLElement;
      const opts = document.getElementsByClassName('option') as HTMLCollectionOf<HTMLElement>;
      if (this.show){
        opt.style.display='block';
        bar.className='focusbar';
      }else{
        opt.style.display='none';
        bar.className='search';
        opts[this.indec].className = opts[this.indec].className.replace('lifocus', 'null');
        this.indec=0;
        this.currentTab = '';
      }
      
    },

    handlebar(e:KeyboardEvent){
      const bar = document.getElementById('bar') as HTMLElement;
      if(e.key == 'ArrowDown' || e.key == 'ArrowUp'){
        if( bar.className == "focusbar" ){
          const opts = document.getElementsByClassName('option') as HTMLCollectionOf<HTMLElement>;
          if( e.key =='ArrowUp' && this.indec > 0){
            opts[this.indec].className =  opts[this.indec].className.replace('lifocus', 'null');
            this.indec--;
            this.currentTab = this.arrtab[this.indec];
            opts[this.indec].className = opts[this.indec].className.replace('null', 'lifocus');
          }else if( e.key =='ArrowDown' && this.indec < 3){
            opts[this.indec].className = opts[this.indec].className.replace('lifocus', 'null');
            this.indec++;
            this.currentTab = this.arrtab[this.indec];
            opts[this.indec].className= opts[this.indec].className.replace('null', 'lifocus');
          }
        }  
      }else if(e.key =='Enter'){
        console.log('la puta madressssssssssssss');
        const inp = document.getElementById('putin') as HTMLInputElement;
        const entrada = inp.value.toLowerCase()
        let n = this.arrtab.indexOf(entrada,0);
        if ( n > 0){
          const opts = document.getElementsByClassName('option') as HTMLCollectionOf<HTMLElement>;
          opts[n].className += ' visto';
          console.log(n);
          this.change(n-1);
        }
      }
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

});
</script>


<style>

.mega-container{
  display: flex;
  justify-content: center;
  

}

.fondo{
  position: absolute;
  /* height: calc(100% - 20px);
  width: calc(100% - 20px); */
  background-image: url('../../public/img/ram2.png');
  object-fit:cover;
  z-index: 10;
  height: 100%;
  width: 100%;
}


.tab{
  position: absolute;
  height: calc(100% - 82px);
  width: calc(100% - 20px);
  border: 1px solid black;
  margin-top: 70px;
  overflow: auto ;
  overFlow-x: none;
  
  
 
 
  
}

.search-container{
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 700px;
  color: #e8eaed;
  font-size: 16px;

  z-index: 200;
  top: 20px;

}




li:hover{
  background: #3c4043;
}

.lifocus{
  background: #3c4043;
}

li{
  padding: 10px 8px 5px 0px;
}




.l {
  border-top: 1px solid #5f6368;
  margin: 0 20px 0 14px;
  padding-bottom: 4px;
}

.texto{
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
  max-width: 500px;
  text-rendering: auto;
  color: #e8eaed;
  font-size: 16px;
  padding: 0px 0px 0 20px;
  overflow: auto;

}


.search{
  border: 1px solid #5f6368;
  background: #202124;
  border-radius: 24px;
}



#options {
  width: 100%;
  display: none;
  flex-direction: column;
  overflow: hidden;
  background: #303134;
  border-radius: 0 0 24px 24px;
  border: 0;
  box-shadow: 0 4px 6px 0 #171717;
  cursor: default;
  font-family: arial,sans-serif;
  margin-bottom: 12px;
    
}

#bar{
  height: 44px;
  
  
  
}
#bar:hover{
  background-color: #303134;
  box-shadow: 0 1px 6px 0 #171717;
  border-color: rgba(223,225,229,0);

}

.focusbar{
  border-radius: 24px;
  background-color: #303134;
  border-color: rgba(223,225,229,0);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: none;
  box-shadow: 0 1px 6px 0 #171717;
}


.container-rgb{
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: -100; 
}



main{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x:hidden;
  overflow-y:hidden;
}

.luz-rgb{
  position: absolute;
  width: 60%;
  height: 80%;
  filter: brightness(3);
  filter: saturate(3);
  
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

.visto{

  color: #C58AF9;

}



</style>