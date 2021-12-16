<template>
  <div class="home">
    <Index/>
    <p>HOME</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Index from '../components/Index.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Index,
  },
});
</script>
