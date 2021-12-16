<template>
    <h1>{{message}}</h1>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

    data(){
        return{
            message: 'componente random'
        }
    }
    
})
</script>

<style>
*{
    background-color: goldenrod;
    color: indigo;
}
</style>