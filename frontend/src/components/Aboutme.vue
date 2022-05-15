<template>
  <section id="aboutme">
    <div class="container" id="perfil">


      <div class="intro">
        
        <h1 class="name title">IVAN SCAGLIONI</h1>

        <div class="ilike" >Web Developer</div>


      </div>
    </div>

    <div class="iconinfo_container" @click="moreless()">
      <img id="iconinfo" src="public/icons/expand-2-white.svg" alt="" />
    </div>

    <div id="moreinfo" class="text">
      <div>
        <h2>ABOUT ME</h2>
        <ul>
          <p>Name:&nbsp; &nbsp; Iván Scaglioni</p>
        </ul>

        <ul>
          <p>Age:&nbsp; &nbsp; 21 years old</p>
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
          <li><h4>STUDY</h4></li>

          <p>
            My first steps in programming was at the university of UnCUYO in the
            career of "bachelor's degree in computer science" (unfinished),
            there I learned about logic of algorithms, data structures,
            efficiency of algorithms (annotation O), solve problems, maths.
            <br />
            <br />
            I like to learn in a self-taught way by reading documentation,
            watching videos, taking courses, asking in forums
          </p>
          <li><h4>WHAT AM I INTERESTED IN?</h4></li>

          <ul>
            Back-end
          </ul>
          <ul>
            Software development
          </ul>
          <ul>
            Artificial intelligence
          </ul>
          <ul>
            Game development
          </ul>
          <ul>
            Problem solving
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

      show: true,
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
  flex-direction: column-reverse;
  flex-wrap: wrap;
  max-width: 700px;
  margin-top: 10px;
  
}


.name {
  
  padding: 0;
  margin: 0;
  animation-name: rightLeft;
  animation-duration: 2s;
  text-shadow:  0 0 1vw #106cff, 0 0 3vw #106cff, 0 0 10vw #106cff, 0 0 10vw #106cff, 0 0 .4vw #7faffe;
   color: #e6f4ff ;
}

.ilike {
  font-family:'Atomic Age', cursive;
  display: flex;
  gap: 0px 10px;
  animation-name: leftRight;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  text-shadow:0 0 1vw #f700ff;
  color: #f6c9f9 ;
  font-style: oblique;  
  justify-content: flex-end;
  


}

#like{
  font-family:'Atomic Age', cursive;
}



.iconinfo_container{
  animation: shake 3s cubic-bezier(1, 1, 1, 1) both;

  animation-iteration-count: infinite;
  
}

#iconinfo {
  width: 40px;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  cursor: pointer;
  animation-name: appear;
  animation-duration: 2s;
  filter: drop-shadow(0px 0px 10px rgb(255, 247, 0)) ;

  
}

#moreinfo {
  height: 0;
  max-width: 800px;
  width: 90%;
  overflow: hidden;
  
  color: #f7fff2 ;
  font-weight: bold;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  background-color: #33005295;
}

.separador{
  width: 90%;
  border-top: 3px solid rgb(206, 213, 255);
  animation-name: downUp ;
  animation-duration: 2s;
  /* box-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE; */
  box-shadow: 0 0 1vw #ff1010, 0 0 3vw #ff1010, 0 0 10vw #ff1010, 0 0 10vw #ff1010, 0 0 .4vw #fedb8b;
  
}



@keyframes shake {

  0% {transform: translate3d(0, 14px, 0); }

  
  50% {  transform: translate3d(0, 0px, 0);}

  100%{transform: translate3d(0, 14px, 0);}
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