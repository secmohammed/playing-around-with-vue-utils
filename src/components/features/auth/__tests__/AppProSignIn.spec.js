import { mount, RouterLinkStub } from '@vue/test-utils'
import AppProSignIn from '../AppProSignIn'

describe('AppProSign', () => {
    const $route = {
        fullPath: '/dashboard'
    }

    it('renders a sign in link', () => {
        let wrapper = mount(AppProSignIn, {
            stubs: {
                RouterLinkStub
            },
            mocks: {
                $route
            }
        })
        expect(wrapper.find('a').props('to.name')).toEqual('auth-sign')
    })
    it('renders a sign in link and redirect to the current path', () => {
        let wrapper = mount(AppProSignIn, {
            stubs: {
                RouterLinkStub
            },
            mocks: {
                $route
            }
        })
        expect(wrapper.find('a').props('to.query.redirect')).toEqual('/dashboard')
    })
})
