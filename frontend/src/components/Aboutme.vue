<template>
  <section id="aboutme">
    <div class="container" id="perfil">
      <img id="ivanscaglioni" src="public/img/face.png" alt="" />

      <div class="intro">
        <!-- <p class="intro-text" id="hi">Hi!, I am</p> -->
        <h1 class="name title">IVÁN SCAGLIONI</h1>
        <div class="ilike intro-text">
          <div>i like</div>
          <div class="ano" id="like">{{ like }}</div>
        </div>
      </div>
    </div>

    <div @click="moreless()">
      <img id="iconinfo" src="public/icons/expand-2-white.svg" alt="" />
    </div>

    <div id="moreinfo" class="text">
      
        
        <div>
          <h2 > About me </h2> 
          <ul>
            <p>Name:&nbsp; &nbsp; Iván Scaglioni</p>
          </ul>

          <ul>
            <p>Age:&nbsp; &nbsp; 21 years old</p>
          </ul>

          <ul>
           <p> Country:&nbsp; &nbsp; Argentina</p>
          </ul>
          <ul>
            <p>Language:&nbsp; &nbsp;Spanish</p>
          </ul>
        </div>
          <div>
            <ul>
            <h4>Study:</h4> 
            <p> 
              my first steps in programming was at
              the university of UnCUYO in the career of "bachelor's degree in computer
              science" (unfinished), there I learned about logic of algorithms, data
              structures, efficiency of algorithms (annotation O), solve problems,
              maths. <br>
              <br>
              About half a year ago I studied web development on my own. With
              what I aim to get a job to be able to sustain myself economically and
              continue with my studies
            </p>
            <h4>Where do I aim in web development?</h4>
            <p>               
              I'm clearly
              not a good web designer... but solving problems with all available tools
              is something I enjoy
            </p>
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
      arrlike: ["Aroblem solving", "Algorithm", "Web Development"],
      like: "Web Development",
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
  mounted() {
    const myspam = document.getElementById("like") as HTMLElement;
    let liketimer = setInterval(() => {
      myspam.setAttribute("class", "ani");
      this.like = this.arrlike[0];
      let aux = this.arrlike.shift() as string;
      this.arrlike.push(aux);
    }, 4000);

    liketimer;



  },
});
</script>




<style>


#aboutme {

  min-height: calc(100vh - 70px);
  display: flex;
  justify-content:center;
  text-align: justify;
  
  
}


#perfil {
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin-top: 30px;

}



.intro {
  text-align: center;
}

.intro-text {
  padding: 0;
  margin: 0;
}



.name {
  font-family: "Righteous", cursive;
  padding: 0;
  margin: 0;
  animation-name: rightLeft;
  animation-duration: 2s;

}


.ilike {
  display: flex;
  gap: 0px 10px;
  animation-name: leftRight;
  animation-duration: 2s;
  animation-timing-function: ease-in;
}



#ivanscaglioni {
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 16px;
  animation-name: appear;
  animation-duration: 4s;
  margin-bottom:20px;
  margin-top: 40px;
  box-shadow: 0px 0px 5px black;
}

#iconinfo {
  width: 40px;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  cursor: pointer;
  animation-name: appear;
  animation-duration: 2s;
}

#moreinfo {
  height: 0;  
  
  overflow: hidden;
  max-width: 800px;
  width: 90%;
 
  background-color: transparent;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}


.ani {
  animation-name: animalike;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
.ano {
  animation-name: animalike;
  animation-duration: 4s;
  animation-iteration-count: 1;
}

@keyframes contraer {
  from {
    height: 810px;
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
    height: 810px;
    
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

@keyframes animalike {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(30px);
    opacity: 0;
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