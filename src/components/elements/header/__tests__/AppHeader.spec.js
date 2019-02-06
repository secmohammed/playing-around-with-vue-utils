import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'
describe('component', () => {
    it('renders out the hello text', () => {
        let text = 'Home'
        let wrapper = mount(AppHeader,{
            propsData: {
                text
            }
        })
        expect(wrapper.html()).toContain("Home")
    })
})
