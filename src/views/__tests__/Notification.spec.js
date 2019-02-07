import { mount, createLocalVue } from '@vue/test-utils'
import Notifications from '../Notifications.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)
describe('Notifications', () => {
    it('renders notifications', function(){
      let store = new Vuex.Store({
        getters: {
            notifications : () => [
                {
                    id: 1,
                    body: 'One'
                },
                {
                    id: 2,
                    body: 'Two'
                }
            ]
        },
        actions: {
            getNotifications: () => []
        }
      })
      let wrapper = mount(Notifications, {
        localVue,
        store
      })
      expect(wrapper.findAll('li').at(0).text()).toContain('One')
      expect(wrapper.findAll('li').at(1).text()).toContain('Two')
    });
    it('renders marks a notification as read', function(){
        let notification =  {
            id: 1,
            body: 'One',
            read: false
        }
        let markNotificationRead = jest.fn()
        let store = new Vuex.Store({
            getters: {
                notifications : () => [
                    notification
                ]
            },
            actions: {
                getNotifications: () => [],
                markNotificationRead
            }
        })
        let wrapper = mount(Notifications, {
            localVue,
            store
        })
        wrapper.findAll('a').at(0).trigger('click')
        expect(markNotificationRead.mock.calls[0][1]).toEqual(notification)
    });
    
})
