import { mount } from '@vue/test-utils'
import AppTag from '../AppTag.vue'
describe('component', () => {
    it('renders out the tag text', () => {
        let text = 'Vue'
        let wrapper = mount(AppTag,{
            propsData: {
                text
            }
        })
        expect(wrapper.html()).toContain(text)
    })

    it('renders the plain theme by default', () => {
        let text = 'Vue'
        let wrapper = mount(AppTag,{
            propsData: {
                text
            }
        })
        expect(wrapper.classes()).toEqual(['tag'])
        // expect(wrapper.classes()).not.toEqual(['tag--dark'])
        // expect(wrapper.classes().toContain('tag'))
    })
    it('renders the plain theme by default', () => {
        let text = 'Vue'
        let wrapper = mount(AppTag,{
            propsData: {
                text,
                dark: true
            }
        })
        expect(wrapper.classes()).toContain('tag--dark')
    })

})
