<template>
  <section  id="skills">
    
    
    
    <div class="title-l">  Skills </div> 

    <div class="tabs section">
      <button id="btn-skill" class="btn-skill diamond" @click="see('skill')">
        all
      </button>
      <button id="btn-frontend" class="btn-skill" @click="see('frontend')">
        front-end
      </button>
      <button id="btn-backend" class="btn-skill" @click="see('backend')">
        back-end
      </button>
    </div>

 
    <div class="container" id="conte"></div>

  </section>
</template>

<script lang="ts">
"use strict";

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      currentTap: "skill",

      rute: "./public/icons/",

      arrSkills: [
        {
          name: "Javascript",
          nameIcon: "icon-javascript.svg",
          for:'skill backend frontend'
        },
        {
          name: "Typescript",
          nameIcon: "icon-typescript.svg",
          for:'skill backend frontend'
        },
        {
          name: "MongoDB",
          nameIcon: "icon-mongodb.svg",
          for:'skill backend'
        },
        {
          name: "Node.js",
          nameIcon: "icon-node.svg",
          for:'skill backend'
        },
        {
          name: "Vue",
          nameIcon: "icon-vue.svg",
          for:'skill frontend'
        },
        {
          name: "HTML 5",
          nameIcon: "icon-html5.svg",
          for:'skill frontend'
        },
        {
          name: "CSS",
          nameIcon: "icon-css.svg",
          for:'skill frontend'
        },
        {
          name: "Webpack",
          nameIcon: "icon-webpack.svg",
          for: 'skill'
        },
        {
          name: "Git",
          nameIcon: "icon-git.svg",
          for: 'skill'
        },
      ],
    };
  },

  methods: {
    async see(seeSkill: string) {
      const skills = (await document.getElementsByClassName(
        "skill"
      )) as HTMLCollectionOf<HTMLElement>;
      const tap = (await document.getElementById(
        `btn-${this.currentTap}`
      )) as HTMLElement;
      const btn = (await document.getElementById(
        `btn-${seeSkill}`
      )) as HTMLElement;
      tap.className= 'btn-skill';
      btn.className = 'btn-skill diamond';
      this.currentTap = seeSkill;
      const arr = Array.from(skills, (skill) => skill.className);
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].includes(seeSkill)) {
          skills[index].style.display = "flex";
        } else {
          skills[index].style.display = "none";
        }
      }
    },
  },

  mounted() {
    
    
    const contenedor = document.getElementById("conte") as HTMLElement;
    this.see("skill");
    if(contenedor.childElementCount < 1){
      for (let index = 0; index < this.arrSkills.length; index++) {
        const skilldiv = document.createElement("div");
        const skillicon = document.createElement("img");
        const skillname = document.createElement("div");




        skillicon.src = this.rute + this.arrSkills[index].nameIcon;
        skillicon.setAttribute('class','skillicon icon')
        skillname.innerHTML = this.arrSkills[index].name;

        skilldiv.className = this.arrSkills[index].for;


        skilldiv.appendChild(skillname);
        skilldiv.appendChild(skillicon);



        contenedor.appendChild(skilldiv);
      }

    }
    
  },
});
</script>


<style>

#skills{
  display: flex;
  gap: 2vw 0;
  font-weight: bold;
  padding-top: 5vh;

  min-height: 50vw;

}



.skill{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 7vw;
  transition-duration: 1s;

}

.skill:hover{
  transform: scale(1.2);
}


.skillicon{
  width:6vw;
  
}



#conte {
  
  display: flex;

  width: 50%;

 

  gap: 3vw 7vw;

  padding-top: 3vw ;

  justify-content: center;

  align-items: center;
  

}

.btn-skill{
 
  text-align: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-style: oblique;
  color: #bf9ae9 ;
  font-family:'Atomic Age', cursive;


}



.tabs{
  display: flex;
  gap: 2vw;
  /* border-bottom: 0.3vw solid rgb(136, 0, 255); */
}

.diamond{

 text-decoration: underline;
  
  text-shadow:  0 0 1vw #6c10ff, 0 0 3vw #7410ff, 0 0 10vw #8c10ff, 0 0 10vw #6410ff, 0 0 .4vw #da7ffe;
  color: #e6d0ff ;
  
  filter: drop-shadow(0px 0px 2px rgb(187, 0, 255));

}





</style>