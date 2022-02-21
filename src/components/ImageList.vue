<template>
    <div>
        Image List
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: 'ImageList',
        //below, mapActions is the only way to call actions, and then the created() lifecycle hook will call the function every time this component will be rendered.
        methods: mapActions(['fetchImages']),
        created() {
            this.fetchImages();
        }
    };
</script>