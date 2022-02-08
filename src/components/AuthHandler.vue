<template>
    <div>Wait.. retrieving token in progress</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
        //this "this" keyword is important to use when calling an action from a lifecycle hook
        this.finalizeLogin(window.location.hash);
        //the 'window.location.hash' above will look into the URL, and take everything from starting of the # until the end of the URL
    }
}
</script>