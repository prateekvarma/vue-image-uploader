<template>
    <div class="image-container">
        <img v-for="image in allImages" v-bind:src="image.link" v-bind:key="image.id" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'ImageList',
        //below, mapActions is the only way to call actions, and then the created() lifecycle hook will call the function every time this component will be rendered.
        methods: mapActions(['fetchImages']),
        computed: mapGetters(['allImages']),
        created() {
            this.fetchImages();
        }
    };
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0; /*This will be fixed by the image padding below */
    }
    img {
        max-width: 100%;/*This ensures the images don't fall out of the frames */
        padding: 5px;/*This takes care of the column-gap above, so that imgs wont stick together */
    }
</style>