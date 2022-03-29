<template>
  <div class="container">
    <div id="light-theme"></div>

    <button @click="mode()" id="btn-theme">
      <img id="icon-theme" src="public/icons/moon4.svg" alt="" />
    </button>
    
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      iconPathTheme: "public/icons/",
    };
  },
  components: {},
  methods: {
    mode() {
      const iconTheme = document.getElementById(
        "icon-theme"
      ) as HTMLImageElement;
      const mySoul = document.getElementsByTagName(
        "body"
      ) as HTMLCollectionOf<HTMLElement>;
      const lightTheme = document.getElementById(
        "light-theme"
      ) as HTMLElement;
      if (mySoul[0].classList.toggle("light")) {
        iconTheme.src = this.iconPathTheme + "sun4.svg";
        // lightTheme.style.display = "block";
      } else {
        iconTheme.src = this.iconPathTheme + "moon4.svg";
        lightTheme.style.display = "none";
      }
    },
  },
});
</script>

<style>
#light-theme {
  position: fixed;
  width: 700px;
  height: 100vh;
  /* background-color: rgba(255, 255, 255, 0.589); */
  z-index: -10;
  /* background-color: #f74843; */
  background-color: #407999;
  align-self: flex-start;
  box-shadow: 0 0 50px rgb(103 193 245 / 30%);
  display: none;
}

.container {
   width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}

#btn-theme {
  position: fixed;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: #00000085;
  outline: none;
  z-index: 121;
  align-self: flex-start;
  margin-left: 70vw;
}
:root {
  --primary-color: #1b2838;
  --secundary-color: rgba(42, 71, 94, 1);
  --contact-color: #171a21;
  --text-color: #c6e6f8;
  --text-color-2: #c6d4df;
}

.light {
  
  /* --primary-color: 		#0098D5 ; */
  --primary-color: 		#9fddf5 ;
  --secundary-color: 		#e9f9ff;
  /* --text-color:  rgb(0, 26, 41); */
  --text-color:  #091524;
  /* #2775a362  */
}

body {
  padding: 0;
  margin: 0;
  color: var(--text-color);
  background-color: var(--primary-color);
  font-size: 30px;
  display: flex;
  justify-content: center;
  transition-duration: 1s;
}
.component{
    display: flex;
    flex-direction: column;
    
    align-items: center;
}


</style>