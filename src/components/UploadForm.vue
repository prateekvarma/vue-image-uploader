<template>
    <div class="dropper">
        <!-- The ($event.target.files) below, passes the specific location on the object where the file is at. If you won't pass this, then the entire 'event' object will be passed - whose file object can later be accessed from the function - but here is better -->
        <!--The $ sign before the event, means that Vue needs to look an actual 'event', rather than a variable named event-->
        <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
        <span>Drop files here!</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        name: 'UploadForm',
        methods: mapActions(['uploadImages'])
    };
</script>

<style scoped>
    .dropper {
        height: 30vh;
        border: 2px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dropper:hover {
        background-color: #eee;
    }
    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0; /* This makes the input element invisible */
    }
</style>