export default {
    notifications (state) {
        return state.notifications.filter(notification => notification.read === false)
    }
}
