<template>
    <footer>
        <div class="container">
            <div id="in" class="foo-a" >
                <a href="https://www.linkedin.com/">
                    <img class="foo-logo" src="../../public/img/logos/in-logo.png" alt="">
                </a>
                
            </div>
            <div id="github" class="foo-a">
                <a href="https://github.com/">
                    <img class="foo-logo" src="../../public/img/logos/github-logo-3.png" alt="">
                </a>
                
            </div>
            
        </div>

    </footer>
</template>



<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({


})
</script>




<style>

footer{
    width: 100%;
    display: inline;
    position: fixed;
    background-color: gray;
    bottom: 0px;
}

.foo-logo{
    height: 50px;
    width: 50px;
    object-fit: cover;
}
.foo-a{
    padding-right: 50px;
    padding-left: 50px;
}
.container{
    display: flex;
    justify-content: center;
}

a:hover{
    color: hotpink;
}

</style>