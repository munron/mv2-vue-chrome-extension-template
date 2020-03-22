<template>
    <div>
        <img :src="imageUrl">
    </div>
</template>

<script lang="ts">
/* eslint-disable class-methods-use-this */
import {
    Component, Vue, Prop,
} from 'vue-property-decorator';
import { getUrl } from '../utils';

@Component
export default class ExImage extends Vue {
    public imageUrl = '';

    @Prop({ default: 'logo.png' })
    public imagePath!: string

    public mounted() {
        // eslint-disable-next-line no-undef
        this.imageUrl = getUrl(this.imagePath);
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>>
