import actions from '../actions'
import flushPromises from 'flush-promises'
jest.mock('axios', () => {
    return {
        get () {
            return Promise.resolve({
                data: {
                    data: []
                }
            })
        }
    }
})
describe('actions', () => {
    it('only returns notification that are unread', async () => {
        let commit = jest.fn()
        actions.getNotifications({ commit })
        await flushPromises()
        expect(commit).toBeCalledWith('SET_NOTIFICATIONS', [])
    })
    it('can mark a notification as read', async () => {
        let commit = jest.fn()
        let notification = {
            id: 1,
            body: 'One',
            read: false
        }
        actions.markNotificationRead({ commit }, notification)
        await flushPromises()
        expect(commit).toBeCalledWith('SET_NOTIFICATION_READ', notification)
    })
})
