<template>
    <div>
        player
    </div>
</template>
<script>
    export default {
        data () {
            return {
                player: null
            }
        },
        mounted () {
            this.player = 'instance'
        },
        destroyed () {
            this.player = null
        },
    }
</script>
