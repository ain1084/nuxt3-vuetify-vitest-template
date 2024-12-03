import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createVuetify } from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const vuetify = createVuetify()

  it('renders the correct message', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toContain('Hello, World!')
  })

  it('updates the message when the button is clicked', async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [vuetify]
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('Hello, Vitest!')
  })
})
