<template>
  <section  id="skills">
    
    
    
    <div class="title" id="t-skills">  Skills  </div> 

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
  
  color: #ffe2e2 ;
  font-weight: bold;
  
}

#t-skills{
  font-size: 70px;
  font-style: oblique;
  /* font-family:'Courier New', cursive; */
  padding-bottom: 30px;
  text-shadow:  0 0 1vw #ff1010, 0 0 3vw #ff1010, 0 0 10vw #ff1010, 0 0 10vw #ff1010, 0 0 .4vw rgb(254, 127, 127);
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
  /* text-shadow:  0 0 1vw #106cff, 0 0 3vw #106cff, 0 0 10vw #106cff, 0 0 10vw #106cff, 0 0 .4vw #7faffe;
  color: #e2fcff ; */

  filter: drop-shadow(2px 2px 0px rgb(140, 0, 255)) ;
  color: #f5edff ;
}

.skill:hover{
  transform: scale(1.2);
}


.skillicon{
  width: 90px;
  margin: 0;
  filter: drop-shadow(4px 4px 0px rgb(140, 0, 255)) ;
  
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
    width: 100%;
  display: flex;
  justify-content: center;
  align-content:center;
  align-items: center;
  

}

.btn-skill{
  text-align: center;
  border: none;
  background: rgba(159, 6, 136, 0);
  outline: none;
  cursor: pointer;
  font-size:20px;
  font-style: oblique;
  /* text-shadow:0 0 1vw #8800ff; */
   filter: drop-shadow(2px 2px 0px rgb(140, 0, 255)) ;
  /* color: #ff3cf8 ; */
  color: #e6d0ff ;
  font-family:'Atomic Age', cursive;

}



.tabs{
 display: flex;
 gap: 0px 30px;
}

.diamond{

  border-bottom: 4px dashed rgb(184, 249, 255);
  /* border-right: 2px  solid rgba(184, 249, 255, 0.553); */
  text-shadow:  0 0 1vw #106cff, 0 0 3vw #106cff, 0 0 10vw #106cff, 0 0 10vw #106cff, 0 0 .4vw #7faffe;
  color: rgb(226, 255, 255);
  /* background-color: rgb(22, 22, 30); */
  filter: drop-shadow(0px 0px 2px rgb(21, 0, 255));

}





</style>