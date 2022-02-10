<template>
    <div>
        <a href="/">Image Storage</a>
        {{isLoggedIn}}
        <div>
            <a href="#" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: mapGetters(['isLoggedIn']),
    methods: mapActions(['login'])
};
</script>