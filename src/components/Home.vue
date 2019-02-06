<template>
    <div>
        <AppButton :to="{ name: 'dashboard' }" text="Go to dashboard"/>
    </div>
</template>
<script>
    import AppButton from 'elements/button/AppButton.vue'
    export default {
        components: {
            AppButton
        }
    }
</script>
