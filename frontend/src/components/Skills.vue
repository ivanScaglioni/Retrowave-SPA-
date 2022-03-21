<template>
  <section id="skills">
    <!-- <div class="title">Skills</div> -->
    <div class="tabs section ">
      <button id="btn-skill" @click="see('skill')">all</button>
      <button id="btn-frontend" @click="see('frontend')">frontend</button>
      <button id="btn-backend" @click="see('backend')">backend</button>
    </div>

    <div id="skills-container">
      <div id="conte">

      </div>
    </div>
  </section>
</template>

<script lang="ts">
"use strict"


import * as icon from '../../public/icons/icon-vue.png';

import {  defineComponent } from "vue";






export default defineComponent({
  data() {
    return {
      currentTap: "skill",

      rute: 'public/icons/',

      arrSkills: [
        {
          name:'Javascript',
          nameIcon:'icon-gmail.svg' 
        },
        {
          name: 'Typescript',
          nameIcon: 'icon-typescript.svg'
        },
        {
          name:'MongoDB',
          nameIcon:'icon-mongodb.svg'
        },
        {
          name:'Node.js',
          nameIcon:'icon-node.svg'
        },
        {
          name:'Vue',
          nameIcon:'icon-vue.png'
        },
        {
          name:'HTML 5',
          nameIcon: 'icon-html5.svg'
        },
        {
          name:'CSS',
          nameIcon:'icon-css.svg'
        },
        {
          name:'Webpack',
          nameIcon:'icon.webpack.svg'
        },
        {
          name:'Git',
          nameIcon:'icon-git.svg'
        }
        
      ]

      
      
    }
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
      tap.style.backgroundColor = "rgba(42,71,94,0)";
      btn.style.backgroundColor = "rgba(42,71,94,1.0)";
      this.currentTap = seeSkill;
      const arr = Array.from(skills, (skill) => skill.className);
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].includes(seeSkill)) {
          skills[index].style.display = "block";
        } else {
          skills[index].style.display = "none";
        }
      }
    },
  },

  mounted() {
    const tab = document.getElementById("btn-skill") as HTMLElement;
    tab.style.backgroundColor = "rgba(42,71,94,1.0)";
    const contenedor= document.getElementById('conte') as HTMLElement;
    
    for (let index = 0; index < this.arrSkills.length; index++) {
      const skilldiv = document.createElement("div");
      const skillicon = document.createElement("img");
      const skillname = document.createElement("p");
      
      skillicon.src = this.rute + this.arrSkills[index].nameIcon;
      skillname.innerHTML = this.arrSkills[index].name
      
      skilldiv.appendChild(skillname);
      skilldiv.appendChild(skillicon);

      contenedor.appendChild(skilldiv);

    }
    




  },
  

  


});
</script>


<style>
#skills {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  
}

.conta {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  align-self: flex-start;
  width: 90vw;
  min-width: 400px;
  max-width: 1000px;
  min-height: 1000px;
  justify-content: center;
  
}

.logo-skill {
  width: 5vw;
  min-width: 70px;
  /* #1b2838 */


  border: 1px solid #b3dfff;

  /* filter: grayscale(100%); */
  transition-duration: 0.8s;
}

/* .logo-skill:hover{
    filter: contrast(2);
    filter: saturate(2);
    transform: scale(1.5);
    opacity: 1;
    z-index: 100;
    
} */

.ocultar {
  display: none;
}

.skill {
  display: block;
  padding: 20px;
  min-width: 130px;
  min-height: 120px;
  flex-direction: column;
  border: 1px solid rebeccapurple;
  text-align: center;
}

#skills-container {
  width: 100%;
  display: flex;
  min-height: 500px;
  flex-wrap: wrap;
  color: yellow;
  background: linear-gradient(
    to bottom,
    rgba(42, 71, 94, 1) 5%,
    rgba(42, 71, 94, 0) 70%
  );
  
  justify-content: center;
}


button {
  background-color: transparent;
  border: none;
  color: lightblue;
  font-size: 30px;
}
</style>