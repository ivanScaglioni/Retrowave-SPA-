<template>
    <section id="intro">
        <div class="container" id="perfil">
 
        
            <h1 class="title" id="name">IVAN SCAGLIONI</h1>

            <div class="ilike" >Web Developer</div>

        </div>
    </section>
</template>
<style>

#intro{
    display: flex;
    justify-content: center;
}

#perfil {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
}

    
#name {
  font-family: 'Comfortaa', cursive;
  padding: 0;
  margin: 0;
  animation-name: rightLeft;
  animation-duration: 2s;
  text-shadow: 0.2vw 0.2vw 0 #106cff,  0 0 1vw #106cff, 0 0 3vw #106cff, 0 0 10vw #106cff, 0 0 10vw #106cff, 0 0 .4vw #7faffe;
  color: #e6f4ff ;
  
}

.ilike {
  font-family:'Atomic Age', cursive;
  gap: 0px 10px;
  animation-name: leftRight;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  text-shadow:0 0 1vw #f700ff;
  color: #f6c9f9 ;
  font-style: oblique;  
  align-self: flex-end;


}




@keyframes upDown {
  0% {
    opacity: 0;
    transform: translate(0px, -30px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes rightLeft {
  0% {
    opacity: 0;
    transform: translate(30px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes leftRight {
  0% {
    opacity: 0;
    transform: translate(-30px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes downUp {
  0% {
    opacity: 0;
    transform: translate(0px, 30px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

</style>