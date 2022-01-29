<template>
    <section id="skills">
        <div class="tabs">
            <button @click="see('skill')">all</button>
            <button @click="see('frontend')" >frontend</button>
            <button @click="see('backend')">backend</button>
            <button @click="see('others')">others</button>
        </div>
        <div id="skills-container">
            <div class="skill frontend" >
                <p class="name-skill">Javascript  </p>
                <img class="logo-skill" src="../../public/img/logos/js-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">Typescript</p>
                <img class="logo-skill" src="../../public/img/logos/ts-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">Vue</p>
                <img class="logo-skill" src="../../public/img/logos/vue-logo.png" >
            </div>
            <div class="skill backend">
                <p class="name-skill">Nodejs</p>
                <img class="logo-skill" src="../../public/img/logos/node-logo.png" >
            </div>
            <div class="skill others">
                <p class="name-skill">Git</p>
                <img class="logo-skill" src="../../public/img/logos/git-logo.png" >
            </div>
            <div class="skill backend">
                <p class="name-skill">MongoDB</p>
                <img class="logo-skill" src="../../public/img/logos/mongo-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">Webpack</p>
                <img class="logo-skill" src="../../public/img/logos/wp-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">CSS</p>
                <img class="logo-skill" src="../../public/img/logos/css-logo.png" >
            </div>
            <div class="skill others">
                <p class="name-skill">Postman</p>
                <img class="logo-skill" src="../../public/img/logos/pm-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">Boostrap</p>
                <img class="logo-skill" src="../../public/img/logos/bt-logo.png" >
            </div>
            <div class="skill frontend">
                <p class="name-skill">HTML</p>
                <img class="logo-skill" src="../../public/img/logos/html-logo.png" >
            </div>
        </div>

    </section>

</template>

<script lang="ts">
import {defineComponent} from 'vue';





export default defineComponent({
    data(){
        return{
        }
    },
    methods:{
        async see(seeSkill:string){
            const skills = await document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLElement>;
            const arr = Array.from(skills, skill => skill.className );
            for (let index = 0; index < arr.length; index++) {
                if(arr[index].includes(seeSkill)){
                    skills[index].style.display="block";
                }else{
                    skills[index].style.display = "none";
                }
            }
        }
        
    },

        
    



})
</script>


<style>

#skills{
    display: grid;
    background-color: transparent;
    margin: auto;
    
}


.logo-skill{
    width: 4vw;
    
    object-fit: cover;
}

.ocultar{
    display: none;
}
.skill{
    padding: 10px;
}

#skills-container{
    display: flex;
    border: 3px solid blue;
    flex-wrap: wrap;
    color: yellow;
    justify-self: center;
    align-self: start;
    position: relative;
    
}
.tabs{
    position: absolute;
    top: 10px;
    border: 3px solid white;
    justify-self: center;
    align-self: stretch;
    height: 80px;
}




</style>