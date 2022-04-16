<template>
  <section  id="skills">

    
    <div class="title" id="skills-title">
      <h1>  Skills  </h1> 
    </div>
    <div class="tabs section">
      <button id="btn-skill" class="btn-skill" @click="see('skill')">all</button>
      <button id="btn-frontend" class="btn-skill" @click="see('frontend')">frontend</button>
      <button id="btn-backend" class="btn-skill" @click="see('backend')">backend</button>
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
      tap.style.backgroundColor = "transparent";
      btn.style.backgroundColor = "var(--secundary-color)";
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
    tab.style.backgroundColor = "var(--secundary-color)";
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


.skill{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -3px 2px 5px rgba(0, 0, 0, 0.363);
  border-radius: 5%;
  width: 150px;
  padding: 10px;
  
}

#skills{
  padding-top: 90px;
}

.skillicon{
  width: 90px;
  margin: 0;

}

.separador{
  width: 90%;
  border-top: 1px solid var(--text-color);
  animation-name: downUp ;
  animation-duration: 2s;
  
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
  border: none;
  background: transparent;
  outline: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  padding-right: 12px;
  padding-left: 12px;

  color: var(--text-color);
}






#skills-container {
  width: 100%;
  display: flex;
  background: linear-gradient(
    to bottom,
    var(--secundary-color) 5%,
    rgba(42, 71, 94, 0) 70%
  );
  justify-content: center;
  align-content:center;
  align-items: center;
}







</style>