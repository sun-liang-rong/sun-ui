import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import sunButton  from './index.vue'
describe('sun-button Test', () => {
    it("should render slot", () => {
        const sunbutton = mount(sunButton , {
            slots: {
              default: 'Hello world'
            },
            props: {
                type: 'sun-default',
                plain: true,
                disabled: false,
                square: true,
                round: false,
                size: 'sun-normal',
                color: ''
            }
          })
          expect(sunbutton.text()).toBe('Hello world')
    })
    
    
      // Assert the rendered text of the component
      
})