<template>
    <div>
        <audio id="st"  >
            <source id="tecla" src="../../public/tecla-001.mp3" type="audio/mpeg"> 
        </audio>

        <div class="myname">{{name}} <div class="barra">|</div> </div>

        
        <div class="contact">
            <div>
                github
            </div>
            <div>
                instagram
            </div>
            <div>
                gmail
            </div>
        </div>
    </div>

</template>
<script lang="ts">
import {defineComponent} from 'vue';





export default defineComponent({
    data(){
        return{
            
            name:''
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        const n = 'Iván_Scaglioni';
        var pos = 0;
        console.log("la puta madre harry");
        const mya = document.getElementById('st')  as HTMLAudioElement
        const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
            this.name += n[pos];
            pos++;
            mya.play();
            if (pos >= 14){
                clearInterval(setIntervalConst);
                
            }
        }, 100);

        setIntervalConst;

    
    }
    
})




</script>



<style>
.myname{
    font-size: 7vw;
    display: flex;
    letter-spacing: 1vw;
    font-family: 'Courier New', Courier, monospace;
    
}

#tecla{
    display: none;
}
.contact{
    text-align:  center;
}
.barra{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    position: relative;
    bottom: 10px;
    animation-name: parpadeo;
    animation-duration: .5s;
    animation-direction: alternate; 
    animation-iteration-count: infinite;
    animation-timing-function: ease;
}

@keyframes parpadeo{
    0%{opacity: 0; }
    100%{opacity: 1;}
    
}

</style>