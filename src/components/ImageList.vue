<template>
    <div>
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