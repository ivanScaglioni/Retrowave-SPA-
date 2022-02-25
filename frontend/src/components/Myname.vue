<template>

    <div >
       <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Lemonada&family=Nova+Cut&family=Oi&family=Plaster&family=Poiret+One&display=swap" rel="stylesheet">
        <audio id="st"  >
            <source id="tecla" src="../../public/tecla-001.mp3" type="audio/mpeg"> 
        </audio>

        <div class="conta">
            <div class="myname" >{{name}}<div class="barra " id="barra1">|</div></div>
            <div class="des">{{description}}<div class="barra "  id="barra2">|</div></div>
        </div>

        
        <!-- <div class="contact">
            <div>
                github
            </div>
            <div>
                instagram
            </div>
            <div>
                gmail
            </div>
        </div> -->
    </div>

</template>
<script lang="ts">
import {defineComponent} from 'vue';





export default defineComponent({
    data(){
        return{
            
            name:'',
            description:''
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        const n = 'Iván Scaglioni';
        const k = '.';
        var pos = 0;
        console.log("la puta madre harry");
        
        const mya = document.getElementById('st')  as HTMLAudioElement;
        const b1 = document.getElementById('barra1') as HTMLElement;
        const b2 = document.getElementById('barra2') as HTMLElement;
        const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
            this.name += n[pos];
            pos++;
            //mya.play();
            if (pos >= n.length){
                clearInterval(setIntervalConst);
                pos=0;
                b1.style.display= "none";
                b2.style.visibility ="visible";
                const setIntervalConst2: ReturnType<typeof setInterval> = setInterval(() => {
                    this.description += k[pos];
                    pos++;
                    if (pos >=  k.length){
                        clearInterval(setIntervalConst2);
                    }
                }, 250);
            }
        }, 250);

        // setIntervalConst;

    
    }
    
})




</script>



<style>



.myname{
    text-align: center;
    font-size: 50px;
    display: flex ;
    letter-spacing: 1vw;
    font-family: 'Nova Cut', cursive;
    color: #9aa0a6; ;


   
}


#barra2{
    visibility:hidden;
}
.des{
    display: flex;
    font-size: 2vw;
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
    visibility: hidden;
}

@keyframes parpadeo{
    0%{opacity: 0; }
    100%{opacity: 1;}
    
}

</style>