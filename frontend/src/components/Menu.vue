<template>
    <section id="nav-bar">
      
      <div  id="nav-header" >
        <div id="name-nav">
          IVAN SCAGLIONI
        </div>
        <div class="nav-menu">


          <div id="a-menu">
            <a href="#app">About</a>
            <a href="#skills">Skills</a>
            <a href="#links">Contact</a>
          </div>

          <div @click="handleMenu(flagMenu)" id="btn-responsive" class="btn-menu">
            <img id="icon-responsive" class="icon-menu" src="public/icons/menu.svg" alt="">
          </div>

          <button @click="mode()" id="btn-theme" class="btn-menu">
            <img id="icon-theme" class="icon-menu" src="public/icons/moon4.svg" alt="theme mode" />
          </button>
        </div>
      </div>
      <div id="responsive-menu">
          <div  @click="handleMenu(false)" class="glass">
          </div>
          <div @click="handleMenu(false)" class="a-responsive">
            <a  href="#app">about</a>
            <a  href="#skills">Skills</a>
            <a  href="#links">Contact</a>
          </div>
      </div>

    </section>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      iconsPath: "public/icons/",
      flagMenu: true
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
      
      const arrow = document.getElementById('iconinfo')as HTMLImageElement;
      if (mySoul[0].classList.toggle("light")) {
        iconTheme.src = this.iconsPath + "sun4.svg";
        arrow.src = this.iconsPath + 'expand-2-black.svg';
       
        
      } else {
        arrow.src = this.iconsPath + 'expand-2-white.svg';
        iconTheme.src = this.iconsPath + "moon4.svg";
        

      }
    },
    handleMenu(boo : boolean){
      const respoMenu = document.getElementById('responsive-menu') as HTMLElement;
      const iconResponsive =document.getElementById('icon-responsive') as HTMLImageElement;
      if(boo){
        iconResponsive.src = this.iconsPath + 'close.svg';
        respoMenu.style.visibility = 'visible';
        this.flagMenu = false;

      }else{
        iconResponsive.src = this.iconsPath + 'menu.svg';
        respoMenu.style.visibility = 'hidden';
        this.flagMenu = true;
      }
    }

  },


});
</script>

<style>

#nav-bar{
  
  box-shadow: 0 1px 10px rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 70px;
  background-color: var(--contact-color);
  color: var(--text-color-2);
  
  
}


#nav-header{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  min-height: 70px;
  padding-top: 0;
  padding-bottom: 0;
}




.nav-menu{
  display: flex;
  gap: 10px 50px;
  align-items: center;
}

#name-nav{
  font-family: "Densmore", sans-serif;
}


#a-menu{
  display: flex;
  gap: 10px 30px;
  align-items: center;
  font-family: 'Julius Sans One', sans-serif;
}


#responsive-menu{
  position: sticky;
  margin-top: 0px;
  display: grid;
  width: 100vw;
  height: calc(100vh - 90px);
  grid-template-columns: 1fr auto;
  visibility: hidden;

}


.a-responsive{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width:auto;
  background-color: var(--contact-color);
  font-family: 'Julius Sans One', sans-serif;
  padding-top: 10px;
  gap: 30px 0px;
}


#btn-responsive{
  display: none;
}





.btn-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: #00000000;
  outline: none;  
}




</style>