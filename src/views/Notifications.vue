<template>
    <ul>
        <li v-for="notification in notifications" :key="notification.id">
            {{ notification.body }}
            <a href="#" @click.prevent="markNotificationRead(notification)"> Mark as Read</a>
        </li>
    </ul>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['notifications'])
        },
        methods: {
            ...mapActions([
                'getNotifications',
                'markNotificationRead'
            ])
        },
        mounted () {
            this.getNotifications()
        }
    }
</script>
