<template>
    <div>
        <AppHeader />
        <div class="ui container">
            <!-- router-view displays the content when some router URL is clicked -->
            <router-view></router-view>
        </div>
    </div>    
</template>

<script>
import AppHeader from './components/AppHeader';
    export default {
        name: 'App',
        components: {
            AppHeader
        }
    };
</script>