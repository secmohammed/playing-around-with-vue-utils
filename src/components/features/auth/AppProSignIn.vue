<template>
    <p>You must <router-link :to="{ name: 'auth-sign', query: { redirect: $router.fullPath }}">Sign in</router-link> to access this.</p>
</template>
<script>
    export default {
        //
    }
</script>
