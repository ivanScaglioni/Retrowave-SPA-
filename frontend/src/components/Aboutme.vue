<template>
  <section id="aboutme">
    <div class="container" id="perfil">


 
        
        <h1 class="name title">IVAN SCAGLIONI</h1>

        <div class="ilike" >Web Developer</div>

    </div>

    <div class="iconinfo_container" @click="moreless()">
      <img id="iconinfo" src="public/icons/expand-2-white.svg" alt="" />
    </div>

    <div id="moreinfo">
      <div>
        <h2 class="h">About me</h2>
        <ul>
          <p>Name:&nbsp; &nbsp; Iván Scaglioni</p>
        </ul>

        <ul>
          <p>Age:&nbsp; &nbsp; 22 years old</p>
        </ul>

        <ul>
          <p>Country:&nbsp; &nbsp; Argentina</p>
        </ul>
        <ul>
          <p>Language:&nbsp; &nbsp;Spanish</p>
        </ul>
      </div>
      <div>
        <ul>
          <li><h2 class="h">Study</h2></li>

          <p>
            My first steps in programming was at the university of UNCUYO in the
            career of "bachelor's degree in computer science" (unfinished),
            there I learned about logic of algorithms, data structures,
            efficiency of algorithms (annotation O), solve problems, maths.
            <br />
            <br />
            I also like to study in a self-taught way with online courses, reading documentation, training
          </p>
          <li><h2 class="h">What am i intereted in?</h2></li>

          <ul>
            <p>Back-end</p>
            
          </ul>

          <ul>
            Software development
            
          </ul>
          <ul>
            <p>Artificial intelligence </p>
            
          </ul>
          <ul>
            Game development
          </ul>
          <ul>
            <p>Problem solving</p>
            
          </ul>
        </ul>
      </div>
    </div>
    <div class="separador"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      btnFlag: true,
      stun: false,

    };
  },

  methods: {
    moreless() {
      const moreInfo = document.getElementById("moreinfo") as HTMLElement;
      const iconInfo = document.getElementById("iconinfo") as HTMLImageElement;

      if (!this.stun) {
        this.stun = true;
        let stuntimer = setTimeout(() => {
          this.stun = !this.stun;
        }, 2000);
        stuntimer;
        if (this.btnFlag) {
          moreInfo.style.animationName = "expandir";
          iconInfo.style.animationName = "arrowUp";
        } else {
          moreInfo.style.animationName = "contraer";
          iconInfo.style.animationName = "arrowDown";
        }
        this.btnFlag = !this.btnFlag;
      }
    },
  },
  
});
</script>




<style>
#aboutme {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: justify;
  
 
}

#perfil {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
  width: auto;
}


.name {
  
  padding: 0;
  margin: 0;
  animation-name: rightLeft;
  animation-duration: 2s;
  text-shadow: 0.2vw 0.2vw 0 #106cff,  0 0 1vw #106cff, 0 0 3vw #106cff, 0 0 10vw #106cff, 0 0 10vw #106cff, 0 0 .4vw #7faffe;
  color: #e6f4ff ;
  
}

.ilike {
  font-family:'Atomic Age', cursive;
  gap: 0px 10px;
  animation-name: leftRight;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  text-shadow:0 0 1vw #f700ff;
  color: #f6c9f9 ;
  font-style: oblique;  
  align-self: flex-end;


}





.iconinfo_container{
  animation: shake 3s cubic-bezier(1, 1, 1, 1) both;
  animation-iteration-count: infinite;
}

#iconinfo {
  width: 3vw;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  cursor: pointer;
  animation-name: appear;
  animation-duration: 2s;
  filter: drop-shadow(0px 0px 10px rgb(255, 0, 0)) ;

  
}

#moreinfo {
  height: 0;
  width: 50%;
  overflow: hidden;
  font-weight: bold;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
 

}

.separador{
  width: 90%;
  border-top: .2vw solid rgb(255, 206, 206);
  animation-name: downUp ;
  animation-duration: 2s;
  box-shadow: 0 0 1vw #ff1010, 0 0 3vw #ff1010, 0 0 10vw #ff1010, 0 0 10vw #ff1010, 0 0 .4vw #fedb8b;
  margin-bottom: 10vw;
}



@keyframes shake {

  0% {transform: translate3d(0, 1vw, 0); }

  
  50% {  transform: translate3d(0, 0px, 0);}

  100%{transform: translate3d(0, 1vw, 0);}
}

@keyframes contraer {
  from {
    height: 52vw;
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
    height: 52vw;
  }
}

@keyframes arrowUp {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(180deg);
  }
}

@keyframes arrowDown {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


@keyframes upDown {
  0% {
    opacity: 0;
    transform: translate(0px, -30px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes rightLeft {
  0% {
    opacity: 0;
    transform: translate(30px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes leftRight {
  0% {
    opacity: 0;
    transform: translate(-30px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes downUp {
  0% {
    opacity: 0;
    transform: translate(0px, 30px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
</style>