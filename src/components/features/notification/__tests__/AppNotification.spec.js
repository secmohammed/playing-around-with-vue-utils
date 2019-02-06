import { mount } from '@vue/test-utils'
import AppNotifications from '../AppNotification'
jest.mock('axios', () => {
    return {
        get: () => ({
            data: {
                data: [
                    {
                        id: 1,
                        body: 'First notification'
                    },
                    {
                        id: 2,
                        body: 'Second notification'
                    }
                ]
            }
        })
    }
})
describe('AppNotifications', () => {
    it('renders a list of notifications', async () => {
        let wrapper = await mount(AppNotifications)
        let items = wrapper.findAll('li')
        expect(items.at(0).text()).toContain('First notification')
        expect(items.at(1).text()).toContain('Second notification')
    })
})
