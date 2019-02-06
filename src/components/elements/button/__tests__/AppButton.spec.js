import { mount, createLocalVue } from '@vue/test-utils'
import AppButton from '../AppButton.vue'
import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'dashboard',
            path: '/dashboard'
        }
    ]
})
describe('AppButton', () => {
    it('renders button text', () => {
        let text = 'Go to dashboard'
        let wrapper = mount(AppButton,{
            localVue,
            router,
            propsData: {
                text,
                to: {
                    name: 'dashboard'
                }
            }
        })
        expect(wrapper.find('a').text()).toContain('Go to dashboard')
    })
    it('renders the link correctly', () => {
        let text = 'Go to dashboard'
        let wrapper = mount(AppButton,{
            localVue,
            router,
            propsData: {
                text,
                to: {
                    name: 'dashboard'
                }
            }
        })
        expect(wrapper.find('a').attributes('href')).toContain('/dashboard')
    })
})
