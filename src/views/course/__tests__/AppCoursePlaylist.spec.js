import { mount } from '@vue/test-utils'
import AppCoursePlaylist from '../AppCoursePlaylist.vue'
import AppCoursePart from '../AppCoursePart.vue'
describe('AppCoursePlaylist', () => {
    it('renders a list of parts', function(){
        let wrapper = mount(AppCoursePlaylist, {
            propsData: {
                course: {
                    parts: [
                        { id: 1, title: 'One' },
                        { id: 2, title: 'Two' },

                    ]
                }
            }
        })
        expect(wrapper.findAll(AppCoursePart).length).toEqual(2)    
    });
        
});
