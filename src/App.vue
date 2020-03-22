<template>
    <div id="app">
        <p>拡張</p>
        <chrome-ex-img />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChromeExImg from './components/ChromeExImg.vue';

@Component({
    components: {
        ChromeExImg,
    },
})
export default class App extends Vue {}
</script>

<style >
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

p{
  color: black;
}
</style>
