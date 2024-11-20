<template>
  <div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/quiz">Start Quiz</router-link>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
