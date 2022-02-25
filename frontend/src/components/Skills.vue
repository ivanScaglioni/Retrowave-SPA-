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
    display: flex;
    flex-direction: column;
    background-color: transparent;
    overflow: auto;
    
}


.logo-skill{
    width: 50px;
    object-fit: cover;
    filter: grayscale(100%);
    transition-duration: 0.5s;
}

.logo-skill:hover{
    filter: contrast(3);
    filter: saturate(3);
    filter: brightness(0.9);
    filter: grayscale(0);
    transform: scale(1.5);
}

.ocultar{
    display: none;
}

.skill{
    display: flex;
    min-width: 90px;
    min-height: 90px;
    align-items: center;
    flex-direction: column;
    border: 2px solid red;

}

#skills-container{
    display: flex;
    border: 3px solid blue;  
    flex-wrap: wrap;
    color: yellow;
    
    padding: 15px;
    gap: 30px 30px;
    justify-content: space-around;
    
    
}
.tabs{
    border: 3px solid white;
}




</style>