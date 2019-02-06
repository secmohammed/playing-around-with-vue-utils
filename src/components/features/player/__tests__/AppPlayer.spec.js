import { mount } from '@vue/test-utils'
import AppPlayer from '../AppPlayer.vue'

describe('AppPlayer', () => {
    it('clears up when destroyed', () => {
        let wrapper = mount(AppPlayer)
        wrapper.destroy()
        expect(wrapper.vm.player).toBe(null)
    })
})
