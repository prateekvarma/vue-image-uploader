<template>
    <div class="dropper">
        <input type="file" />
        <span>Drop files here!</span>
    </div>
</template>

<script>
    export default {
        name: 'UploadForm'
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
    }
</style>