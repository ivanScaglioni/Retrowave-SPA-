<template>
    <h1> index {{message}} </h1>
    
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
    data(){
        return{
            message:'hola'
        }
    }
    
})
</script>