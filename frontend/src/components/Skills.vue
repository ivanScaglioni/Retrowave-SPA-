<template>
  <section  id="skills">
    
    
    <div class="title" id="skills-title">
      <h1>  Skills  </h1> 
      
    </div>

    <div class="tabs section">
      <button id="btn-skill" class="btn-skill diamond" @click="see('skill')">
        <div class="btn">all</div> 
      </button>
      <button id="btn-frontend" class="btn-skill" @click="see('frontend')">
        <div class="btn">front_end</div>
      </button>
      <button id="btn-backend" class="btn-skill" @click="see('backend')">
        <div class="btn">back_end</div> 
      </button>
    </div>

    <div id="skills-container">
      <div class="container" id="conte"></div>
    </div>
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
    const tab = document.getElementById("btn-skill") as HTMLElement;
    
    const contenedor = document.getElementById("conte") as HTMLElement;

    for (let index = 0; index < this.arrSkills.length; index++) {
      const skilldiv = document.createElement("div");
      const skillicon = document.createElement("img");
      const skillname = document.createElement("div");




      skillicon.src = this.rute + this.arrSkills[index].nameIcon;
      skillicon.setAttribute('class','skillicon')
      skillname.innerHTML = this.arrSkills[index].name;

      skilldiv.className = this.arrSkills[index].for;


      skilldiv.appendChild(skillname);
      skilldiv.appendChild(skillicon);



      contenedor.appendChild(skilldiv);
    }
  },
});
</script>


<style>

#skills{
    text-shadow:0 0 1vw #ff0000;
  color: #ffe2e2 ;
}

.skill{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  border-radius: 5%;
  width: 150px;
  padding: 10px;
  transition-duration: 1s;

  
}

.skill:hover{
  transform: scale(1.2);
}


.skillicon{
  width: 90px;
  margin: 0;
  filter: drop-shadow(0px 0px 10px rgb(255, 0, 0)) invert(15%);
      
}



#conte {
  display: flex;
  width: 100%;
  max-width: 700px;
  min-height: 500px;
  justify-content: space-around;
  gap: 80px 30px;
  align-items: baseline;
  align-items: center;
  padding-bottom: 70px;
  padding-top: 70px;
  

}

.btn-skill{
  text-align: center;
  border: none;
  background: rgba(159, 6, 136, 0);
  outline: none;
  cursor: pointer;
  font-size:20px;
  border-radius: 4px;
  
  text-shadow:0 0 1vw #ff0000;
  color: #ffe2e2 ;
  

}

.btn{
 
  
}



.tabs{
 display: flex;
 gap: 0px 30px;
}

.diamond{

  border-bottom: 5px  solid rgb(184, 249, 255);
  border-right: 5px  solid rgb(184, 249, 255);
  
  filter: drop-shadow(0 0 4px rgb(0, 110, 255));
}


#skills-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content:center;
  align-items: center;
}







</style>