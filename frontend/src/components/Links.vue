<template>
  <section id="links">
    
    <h2 id="contact-title">Let's talk</h2>
    <div id="contactme"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      contactSrc: "./public/icons/",

      arrLinks: [
        {
          enlace: "mailto:ivanscargentino@gmail.com",
          name: "ivanscargentino@gmail.com",
          icon: "icon-gmail.svg",
        },
        {
          enlace: "https://www.linkedin.com/in/ivan-sca-6b7719221/",
          name: "Likedin",
          icon: "icon-linkedin.svg",
        },
        {
          enlace: "https://t.me/IvanScaglioni",
          name: "t.me/IvanScaglioni",
          icon: "icon-telegram.svg",
        },
        {
          enlace: "https://github.com/ivanScaglioni",
          name: "ivanScaglioni",
          icon: "icon-github.svg",
        },
      ],
      index: 0,
    };
  },
  methods: {},
  mounted() {
    const containerLinks = document.getElementById("contactme") as HTMLElement;
    var flag = true;
    for (let index = 0; index < this.arrLinks.length; index++) {
      const contactDiv = document.createElement("div");
      const contactImg = document.createElement("img");
      const contactA = document.createElement("a");

      contactA.setAttribute("class", "a_link");
      contactDiv.setAttribute("class", "contact");
      contactImg.src = this.contactSrc + this.arrLinks[index].icon;
      contactImg.setAttribute("class", "contacticon");

      contactA.href = this.arrLinks[index].enlace;
      contactA.setAttribute("target", "_blank");
      contactA.innerHTML = this.arrLinks[index].name;

      contactDiv.appendChild(contactImg);
      contactDiv.appendChild(contactA);

      containerLinks.appendChild(contactDiv);
    }
  },
});
</script>

<style>
#contact-title {
  padding-bottom: 30px;
  padding-top: 30px;
}

.contacticon {
  width: 50px;
  filter: drop-shadow(0px 0px 5px rgb(255, 77, 0)) invert(20%);
}

.contact {
  display: flex;
  gap: 20px;
  min-width: 100%;
  align-items: center;
  padding-bottom: 20px;

}

#contactme {
  display: flex;
  flex-direction: column;
  align-items: center;


}

#links {
  display: flex;
  flex-direction: column;
  
  padding-bottom: 80px;
  text-shadow: 0 0 1vw #fff710;
  color: #ffffc1;
  z-index: 15000;
}
.a_link{
    text-shadow:0 0 1vw #ffff10;
  color: #fff7d0 ;
}

</style>