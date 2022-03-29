<template>

  <section class="component " id="links">
    <div id="contact-title" class="title">  Contact me </div>
    

  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {

      contactSrc:'../../public/icons/',


      arrLinks: [

        {
          enlace: "mailto:ivanscargentino@gmail.com",
          name: "ivanscargentino@gmail.com",
          icon: "icon-gmail.svg"
        },
        { enlace: "https://t.me/IvanScaglioni", 
          name: "t.me/IvanScaglioni", 
          icon: "icon-telegram.svg"
        },
        { enlace: "https://github.com/ivanScaglioni" ,  
          name: "ivanScaglioni", 
          icon: "icon-github.svg"
        },
        { enlace: "https://www.linkedin.com/in/ivan-sca-6b7719221/", 
          name: "Likedin", 
          icon: "icon-linkedin.svg" 
        }
      ],
      index: 0,
    };
  },
  methods: {

  },
  mounted(){

    const containerLinks = document.getElementById('links') as HTMLElement;
    var flag = true;
    for (let index = 0; index < this.arrLinks.length; index++) {
      const contactDiv = document.createElement('div');
      const contactImg = document.createElement('img');
      const contactA = document.createElement('a');

      contactDiv.setAttribute('class','contact')
      contactImg.src = this.contactSrc + this.arrLinks[index].icon;
      contactImg.setAttribute('class','contacticon')
      
      contactA.href= this.arrLinks[index].enlace;
      contactA.setAttribute('target','_blank')
      contactA.innerHTML = this.arrLinks[index].name

      if(flag){
        contactDiv.appendChild(contactImg);
        contactDiv.appendChild(contactA);
        contactDiv.style.justifyContent= 'flex-start';

      }else{
        contactDiv.appendChild(contactA);
        contactDiv.appendChild(contactImg);
        contactDiv.style.justifyContent= 'flex-end';

      }

      containerLinks.appendChild(contactDiv);
      flag = !flag;

      
    }
    


  }

});
</script>

<style>

.contacticon{
  width: 50px;

}


.contact{
  display: flex;
  align-items: center;
  gap:  10px;
  border-bottom: 1px solid white;

  padding: 20px;
  
  font-size: 20px;
}

a{
  color:#c6d4df;
  text-decoration: none;
}

#links{
  /* background: #171a21; */
  background-color: var(--contact-color);
  color: var(--text-color-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -1px 10px black;
  
  
}



</style>