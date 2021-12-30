<template>
  <main>
    <Skills/>
    <Info/>
  </main>
 


  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Skills from '../components/Skills.vue';
import Info from '../components/Info.vue';

export default defineComponent({
  name: 'Main',
  components:{
    Skills,
    Info
  }


});
</script>


