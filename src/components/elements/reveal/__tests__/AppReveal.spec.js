import { mount } from '@vue/test-utils'
import AppReveal from '../AppReveal.vue'
describe('component', () => {
    it('renders the text on click', () => {
        let text = 'Hello'
        let wrapper = mount(AppReveal,{
            propsData: {
                text
            }
        })
        wrapper.find('a').trigger('click')
        expect(wrapper.html()).toContain(text)
        expect(wrapper.html()).not.toContain('Click To Reveal')
    })
    it('renders the text on click', () => {
        let text = 'Hello'
        let wrapper = mount(AppReveal,{
            propsData: {
                text
            }
        })
        wrapper.find('a').trigger('click')
        expect(wrapper.html()).not.toContain('Click To Reveal')
    })
})
