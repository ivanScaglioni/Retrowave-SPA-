<template>
  <section class="component" id="aboutme">
    <div class="title">About me</div>

    <div class="container perfil" >
      <img id="ivanscaglioni" src="/public/img/ils.jpg" alt="" />

      <div id="greeting" class="text">
        <p>
          Iván Scaglioni <br />
          21 years old <br />
          <img src="public/icons/pin.svg" alt="" /> Argentina
        </p>
      </div>
    </div>
    <div @click="moreless()" id="drops">
      <div class="drop-container">
        <div class="contenido" >
           <button id="btninfo">{{btnText}}</button> 
        </div>
        <div class="drop drop-up">
         
        </div>
      </div>
      <div class="drop-container">
        <div class="contenido" >
           <img id="iconinfo" src="public/icons/expand.svg" alt="" /> 
        </div>
        
        <div class="drop drop-down">
          
          
        </div>
      </div>
      
      
      
      
    </div>
    <div id="moreinfo" class="text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quam in
      labore sapiente nam voluptatem quisquam et blanditiis recusandae autem
      impedit, minus nisi tempora eveniet necessitatibus eaque dolorum nemo
      assumenda corrupti esse est numquam deserunt? Animi excepturi, cumque,
      quos magni libero recusandae repellat at asperiores ratione laudantium
      consequuntur quae reprehenderit eos qui unde? Accusamus cumque non officia
      asperiores aliquam exercitationem omnis, facere quod incidunt maxime
      reiciendis quae sequi labore alias aperiam cupiditate, pariatur dolores
      temporibus ratione esse aspernatur nostrum explicabo voluptatum aut?
      Sapiente atque unde voluptate, officia doloribus dolorem accusantium
      tempore, blanditiis temporibus dolorum optio architecto fuga quis
      explicabo ratione!
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      btnFlag: true,
      stun: false,
      btnText:'Expand'

    };
  },

  methods: {
    moreless() {
      console.log(this.stun);
      const moreInfo = document.getElementById("moreinfo") as HTMLElement;
      const iconInfo = document.getElementById("iconinfo") as HTMLImageElement;
      const arrdrop = document.getElementsByClassName('drop-container')as HTMLCollectionOf<HTMLElement>;

      if (!this.stun) {
        this.stun = true;
        let stuntimer = setTimeout(() => {
          this.stun = !this.stun;
        }, 2000);
        stuntimer;
        if (this.btnFlag) {
          moreInfo.style.animationName = "expandir";
          this.btnText = 'Compress';
          iconInfo.src = "public/icons/expandless.svg";
          arrdrop[1].style.animationName = 'btnexpand';
        } else {
          this.btnText= "Expand";
          moreInfo.style.animationName = "contraer";
          iconInfo.src = "public/icons/expand.svg";
          arrdrop[1].style.animationName = 'btncompress';
        }
        this.btnFlag = !this.btnFlag;
      }
    },
  },
});
</script>




<style>


.perfil{
  gap: 20px 40px;
  text-align: center;
  padding: 50px;
}
#drops {
  filter: contrast(60);
  opacity: 0.7;
  
  background-color:transparent;
  cursor:pointer;
  
  

  
}

.contenido{
  position: absolute;
  z-index: 150;
  color: black;
}

.drop-container{

  display: flex;
  flex-direction: column;
  height: 95px;
  width:95px;
  background-color:white;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  

}
.drop{
  
  z-index: 20;
  position: relative;
  background-color: blue;
  border-radius: 50%;
  filter: blur(20px);
  margin:auto;
  
  
}

.drop-up{
  width: 90px;
  height: 90px;
}

.drop-down{
  width: 90px;
  height: 90px;
}


.drop-container:nth-child(2){
  animation-fill-mode: forwards;
  animation-duration: 2s;
  z-index: -10;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  transform: translate(0, -45px);

  
  
}
.drop-container:nth-child(1){
  z-index: 1;
  border-bottom-right-radius:0 ;
  border-bottom-left-radius:0 ;
}


#ivanscaglioni {
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

#btninfo{
  border: none;
  outline: none;
  background-color: transparent;
  color:white;
  font-size: 20px;
  text-shadow: 0 1px black;
  
  
  
}
#moreinfo {
  height: 0;
  overflow: hidden;
  max-width: 700px;
  background-color: transparent;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes contraer {
  from {
    height: 700px;
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
    height: 700px;
  }
}

@keyframes btnexpand {
  0%{
    transform: translate(0, -45px);
  }
  100%{
    transform: translate(0, 0px);
  }
}

@keyframes btncompress {
  0%{
    transform: translate(0, 0px);
  }
  100%{
    transform: translate(0, -45px);
  }
}

</style>