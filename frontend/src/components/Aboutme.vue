<template>
  <section id="aboutme">

    <div class="title-l">About me</div>
    <div id="moreinfo">
      <div>


          <p>Name:&nbsp; &nbsp; Iván Scaglioni</p>
 

 
          <p>Age:&nbsp; &nbsp; 22 years old</p>
     

  
          <p>Country:&nbsp; &nbsp; Argentina</p>
 
     
          <p>Language:&nbsp; &nbsp;Spanish</p>
     
      </div>
      <div>

        <div class="title-s">Study</div>
          
          <p>
            My first steps in programming was at the university of UNCUYO in the
            career of "bachelor's degree in computer science" (unfinished),
            there I learned about logic of algorithms, data structures,
            efficiency of algorithms (annotation O), solve problems, maths.
            <br />
            <br />
            I also like to study in a self-taught way with online courses, reading documentation, training
          </p>
          <div class="title-s">What am i intereted in?</div>

            <p>Web development</p>
 


            Software development
            
  
            <p>Artificial intelligence</p>

            Game development

            <p>Problem solving</p>
            

 
      </div>
    </div>
    
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

});
</script>




<style>
#aboutme {
  
  display: flex;
  
  text-align: justify;
  padding-top: 17vh;
  

}






#moreinfo {
 
  width: 50%;
  padding-left: 25vw;
  padding-right: 25vw;
  overflow: hidden;
  font-weight: bold;


 

}




</style>