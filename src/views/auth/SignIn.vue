<template>
    <form action="#" @submit.prevent="submit">
        <button type="submit">Sign in</button>
    </form>
</template>
<script>
    export default {
        methods: {
            submit () {
                this.$router.push({
                    name: 'dashboard'
                })
            }
        }
    }
</script>
