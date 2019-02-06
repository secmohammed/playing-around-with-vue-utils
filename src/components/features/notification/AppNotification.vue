<template>
    <ul>
        <li v-for="notification in notifications" :key="notification.id"> {{ notification.body }} </li>
        {{ notifications }}
    </ul>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                notifications: []
            }
        },
        methods: {
            async getNotifications() {
                let response = await axios.get('/notifications')
                this.notifications = response.data.data
            }
        },
        mounted () {
            this.getNotifications()
        }
    }
</script>
