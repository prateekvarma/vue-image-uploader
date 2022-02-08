<template>
    <div>Wait.. retrieving token in progress</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin'])
}
</script>