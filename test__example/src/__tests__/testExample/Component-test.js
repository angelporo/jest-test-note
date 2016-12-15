import React from 'react'
import { shallow } from 'enzyme'
import Foo from './../../testExample/Component'
import ConnectBar, { Bar } from './../../testExample/Connector'

function setup() {
  const fooWrapper = shallow(<Foo bar="bar" />);
  const barWrapper = shallow(<Bar><Foo bar="bar" /></Bar>);
  const barChildrenLength = shallow(<Bar><Foo bar="bar"/><Foo bar="bar2"/><Foo bar="bar3"/></Bar>);
  return {
    fooWrapper,
    barWrapper,
    barChildrenLength
  }
}

describe('Foo', () => {
  it('component Foo should render', () => {
    const { fooWrapper } = setup()

    expect(fooWrapper.find('h1').text()).toBe('bar')
  })

  it('component Bar should render', () => {
    const { barWrapper } = setup()

    expect(barWrapper.contains(<Foo bar="bar" />)).toBe(true)
  })

  it('component Bar children length', () => {
    const { barChildrenLength } = setup();
    //barChildrenLength.children().length
    expect( barChildrenLength.children().length).toBe(3);
  })

  it('test contains', () => {
    const wrapper = shallow(
      <div>
        <span>hello</span>
        <span>Again</span>
      </div>
    )
    expect(wrapper.contains([
      <span>hello</span>,
      <span>Again</span>
    ])).toBe(true);
  })
})
