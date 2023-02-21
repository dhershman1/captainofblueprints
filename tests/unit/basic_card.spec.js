import { shallowMount } from '@vue/test-utils'
import BasicCard from '@/components/BasicCard'

describe('BasicCard', () => {
  it('renders props.title when passed', () => {
    const title = 'Testing'
    const wrapper = shallowMount(BasicCard, {
      props: { title }
    })

    expect(wrapper.text()).toMatch(title)
    expect(wrapper.find('div').classes()).toEqual(['card', 'card--full'])
  })
})

describe('BasicCard -- size prop', () => {
  const wrapper = shallowMount(BasicCard, {
    props: { size: 'sm' }
  })

  expect(wrapper.find('div').classes()).toEqual(['card', 'card--sm'])
})
