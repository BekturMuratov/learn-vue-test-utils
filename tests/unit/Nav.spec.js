import {mount} from '@vue/test-utils';
import Nav from '@/components/Nav';


describe('Nav.vue', () => {
    it('renders a profile link',() => {
        const wrapper = mount(Nav, {
            data(){
                return {
                    isLoggedIn:true,
                }
            }
        });

        const profileLink = wrapper.get("#profile")
        expect(profileLink.text()).toEqual('My Profile')
    }),

    it('should not a render a profile link', () => {
        const wrapper = mount(Nav, {
            data(){
                return {

                }
            }
        });

        const profileLink = wrapper.find('#profile')
        expect(profileLink.exists()).toBe(false)
    })
})