<template>
    <div>
        <a href="/">Image Storage</a>
        <div>
            <a href="#" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
};
</script>