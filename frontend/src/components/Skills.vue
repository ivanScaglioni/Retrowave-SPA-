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
                <h4 class="name-skill">Javascript  </h4>
                <img class="logo-skill" src="../../public/img/logos/js-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">Typescript</h4>
                <img class="logo-skill" src="../../public/img/logos/ts-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">Vue</h4>
                <img class="logo-skill" src="../../public/img/logos/vue-logo.png" >
            </div>
            <div class="skill backend">
                <h4 class="name-skill">Nodejs</h4>
                <img class="logo-skill" src="../../public/img/logos/node-logo.png" >
            </div>
            <div class="skill others">
                <h4 class="name-skill">Git</h4>
                <img class="logo-skill" src="../../public/img/logos/git-logo.png" >
            </div>
            <div class="skill backend">
                <h4 class="name-skill">MongoDB</h4>
                <img class="logo-skill" src="../../public/img/logos/mongo-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">Webpack</h4>
                <img class="logo-skill" src="../../public/img/logos/wp-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">CSS</h4>
                <img class="logo-skill" src="../../public/img/logos/css-logo.png" >
            </div>
            <div class="skill others">
                <h4 class="name-skill">Postman</h4>
                <img class="logo-skill" src="../../public/img/logos/pm-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">Boostrap</h4>
                <img class="logo-skill" src="../../public/img/logos/bt-logo.png" >
            </div>
            <div class="skill frontend">
                <h4 class="name-skill">HTML</h4>
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
    
    background-color: greenyellow;
    margin: auto;
}


.logo-skill{
    width: 70px;
    height: 70px;
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
    flex-wrap: wrap;
}



</style>