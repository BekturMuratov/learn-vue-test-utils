import { mount } from '@vue/test-utils';
import Message from '@/components/Message';

describe("Message.vue", () => {
    it("render props msg when passed", () =>{
        const wrapper = mount(Message, {
            props: {
                msg: 'Hello World!'
            }
        });
        expect(wrapper.text()).toContain("Hello World!");
    })
})

