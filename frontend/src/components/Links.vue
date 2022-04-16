<template>

  <section id="links">
    <h2 id="contact-title">  Let's talk </h2>
    <div id="contactme">

    </div>

  </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {

      contactSrc:'./public/icons/',


      arrLinks: [

        {
          enlace: "mailto:ivanscargentino@gmail.com",
          name: "ivanscargentino@gmail.com",
          icon: "icon-gmail.svg"
        },
        { enlace: "https://www.linkedin.com/in/ivan-sca-6b7719221/", 
          name: "Likedin", 
          icon: "icon-linkedin.svg" 
        },
        { enlace: "https://t.me/IvanScaglioni", 
          name: "t.me/IvanScaglioni", 
          icon: "icon-telegram.svg"
        },
        { enlace: "https://github.com/ivanScaglioni" ,  
          name: "ivanScaglioni", 
          icon: "icon-github.svg"
        }

      ],
      index: 0,
    };
  },
  methods: {

  },
  mounted(){

    const containerLinks = document.getElementById('contactme') as HTMLElement;
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

  
        contactDiv.appendChild(contactImg);
        contactDiv.appendChild(contactA);
        

   

      containerLinks.appendChild(contactDiv);


      
    }
    


  }

});
</script>

<style>


#contact-title{
  padding-bottom: 30px ;
  padding-top: 30px ;
}
.contacticon{
  width: 50px;

}


.contact{
  display: flex;
  gap: 20px ;
  min-width: 300px;
  align-items: center;

  
 
  
}





#contactme{
  max-width: 700px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  
  gap: 20px 20px;

}

#links{

  background-color: var(--contact-color);
  color: var(--text-color-2);
  display: flex;
  flex-direction: column;
  box-shadow: 0 -1px 10px rgb(0, 0, 0);
  padding-bottom: 90px;
 
  
  
}



</style>