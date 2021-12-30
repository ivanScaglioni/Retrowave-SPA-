<template>
    <div>
        <Menu/>
        <Nav/>
  
            
        <router-view/>

        
        <Foo/>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Foo from './components/Foo.vue';
import Nav from './components/Nav.vue';
import Menu from './components/Menu.vue';


export default defineComponent({
    name:'App',
    components:{
        Foo,
        Nav,
        Menu
    }
});
</script>

<style>

section{
    min-width: 500px;
    max-width: 1000px;
    margin: auto;

}


</style>