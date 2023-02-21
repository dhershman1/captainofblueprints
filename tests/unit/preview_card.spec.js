import { shallowMount } from '@vue/test-utils'
import PreviewCard from '@/components/PreviewCard'

describe('PreviewCard -- No Thumbnail', () => {
  it('renders props.title when passed', () => {
    const wrapper = shallowMount(PreviewCard)

    expect(wrapper.vm.photoStyles).toMatch('background-image: url(./imgs/no-image.png);')
  })
})
