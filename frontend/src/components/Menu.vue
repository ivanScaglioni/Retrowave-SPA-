<template>
    
    <div>
        <button  id="btn-menu" @click="handleMenu()">{{btnMenu}}</button>
        <div class="menu oculto" id="menu">
            <h1>MENUUUUUUUU</h1>
        </div>
    </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

    data(){
        return{
            btnMenu:'>',

        }
    },
  
    methods:{
        handleMenu(){
            const menu = document.getElementById('menu') as HTMLElement;
            if (menu.className != 'menu'){
                menu.className = 'menu';
                this.btnMenu = '<'
            }else{
                menu.className += ' oculto';
                this.btnMenu = '>'
            }
        }
        
    }



})
</script>


<style>

#menu{
    position:absolute;
    background-color: wheat;
    height: 100%;
    margin-top: 0;
}

.oculto{
    visibility: hidden;
}

#btn-menu{
    position: absolute;
    z-index: 10;
}
</style>