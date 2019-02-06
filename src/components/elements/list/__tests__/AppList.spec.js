import { mount } from '@vue/test-utils'
import AppList from '../AppList.vue'
import AppHeader from '../../header/AppHeader.vue'
describe('AppList', () => {
    it('renders content within the default slot', () => {
        let text = 'Content'
        let wrapper = mount(AppList, {
            slots: {
                default: text
            }
        })
        expect(wrapper.html()).toContain(text)
    })
    it('renders component within the default slot', () => {
        let text = 'Content'
        let headerWrapper = {
            render (h) {
                return h(AppHeader, {
                    props: {
                        text
                    }
                })
            }
        }
        // let header = mount(AppHeader, {
        //     propsData: {
        //         text
        //     }
        // })
        // returns a wrapper vue instance, not an actual component, we tweak it around using render.
        let wrapper = mount(AppList, {
            slots: {
                default: headerWrapper
            }
        })
        expect(wrapper.html()).toContain(text)
    })
    it('renders content within the named slot', () => {
        let text = 'Content'
        let wrapper = mount(AppList, {
            slots: {
                items: text
            }
        })
        expect(wrapper.html()).toContain(text)
    })
})
