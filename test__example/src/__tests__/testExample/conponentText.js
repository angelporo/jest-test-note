import React , {Component} from 'react'
import { shallow } from 'enzyme'
import * as MyComponent from './../../testExample/conponentText.jsx'

describe('test ContainsAnyMatchingElements', () => {
  it('test anyMatching', () => {
    const wrapper = shallow(
      <div>
        <span>Hello</span>
        <div>Goodsbye</div>
        <span>Again</span>
      </div>
    );
    expect(wrapper.containsAnyMatchingElements([
      <span>zhed</span>,
      <div>Goodsbye</div>,
      <li>zhed</li>
    ])).toBe(true)
  })

  it('test context', () => {
    expect('haha').toBe('haha')
  })

  //it('context', () => {
  //const wrapper = shallow(
  //<MyComponent.MyComponent1 />,
  //{context: {foo: 10}}
  //);
  ////不太懂
  //expect( wrapper.context('foo')).toBe(10)
  //})

  it('test debug', () => {
    const wrapper = shallow(<MyComponent.Book title="this title" />);
    console.log(wrapper.debug());
  })

  it('test equals', () => {
    const wrapper = shallow(<MyComponent.MyComponent1 />)
    expect(wrapper.equals(<h1 className="foo bar" >Hello</h1>)).toBe(false)
  })

  it('test every', () => {

    const wrapper = shallow(
      <div>
        <div className="foo bar"></div>
        <div className="foo boo"></div>
        <div className="foo hoo"></div>
      </div>
    );
    expect(wrapper.find('.foo').every('.boo')).toBe(false)
  })


  it('test everyWhere', () => {
    const wrapper = shallow(
      <div>
        <div className="foo bar"></div>
        <div className="foo boo"></div>
        <div className="foo hoo"></div>
      </div>
    );
    console.log(wrapper.debug())
    //expect(wrapper.find('.foo').everyWhere(n => n.hasClass('bar'))).toBe(true)
    //expect(wrapper.find('.foo').everyWhere(n => n.hasClass('foo'))).toBe(true)
    //expect(wrapper.find('.foo').everyWhere(n => n.hasClass('hoo'))).toBe(true)
  })



  it('test filter', () => {
    const wrapper = shallow(
      <MyComponent.MyComponent1 />
    );
    expect(wrapper.find('.foo').filter('.bar').hasClass('bar')).toBe(true)
  })


  it('test filterWhere', () => {
    const wrapper = shallow(
      <div>
        <div className="foo bar"></div>
        <div className="foo boo"></div>
        <div className="foo hoo"></div>
      </div>
    );
    const complexFoo = wrapper.find('.foo').filterWhere(n => typeof n.type() === 'string')
    expect(complexFoo.length).toBe(3)
  })


  it('test find', () => {
    const wrapper = shallow(
      <div>
        <div className="foo bar"></div>
        <div className="foo boo"></div>
        <div className="foo hoo"></div>
      </div>
    );
    expect(wrapper.find('.foo').length).toBe(3)
  })

  it('test findWhere', () => {
    const wrapper = shallow(
      <div>
        <div className="foo bar"></div>
        <div className="foo boo"></div>
        <div className="foo hoo"></div>
      </div>
    );
    const complexComponents = wrapper.findWhere( n => typeof n.type() !== 'string');
    expect(complexComponents.length).toBe(0)
  })

  it('test get', () => {
    const wrapper = shallow(
      <MyComponent.MyComponent1 />
    );
    const complexComponents = wrapper.find('.foo').get(0).props.className
    expect(complexComponents).toBe('foo bar')
  })

  it('test instance', () => {
    const wrapper = shallow(
      <MyComponent.MyComponent1 />
    );
    const complexComponents = wrapper.instance();
    expect(complexComponents).toBe(complexComponents)
  })


  it('test is', () => {
    const wrapper = shallow(
      <div className="some-class other-class"></div>
    );
    const complexComponents = wrapper.is('.some-class')
    expect(complexComponents).toBe(true)
  })

  it('test key', () => {
    const wrapper = shallow(
      <ul>
        {['foo', 'bar'].map( s => <li key={s}>{s}</li>)}
      </ul>
    ).find('li')
    expect( wrapper.at(0).key()).toBe('foo');
  })

  it('test isEmpty', () => {
    const  wrapper = shallow(<div className="some-class" />)
    expect(wrapper.find('.some-class').isEmpty()).toBe(false) //说明ｗｒａｐｐｅｒ不是一个空的
  })

  it('test name', () => {
    const wrapper = shallow(<MyComponent.MyComponent1 />)
    expect(wrapper.name()).toBe('div')
  })

  it('test not', () => {
    const wrapper = shallow(<MyComponent.MyComponent1 />)
    expect(wrapper.find('.foo').not('.haha').length).toBe(1)
  })

  it('test parent', () => {
    const wrapper = shallow(
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
    expect(wrapper.find('li').parent().is('ul')).toBe(true)
  })


  const MyComponent2 = React.createClass({
    render() {
      return (
        <div className="foo bar" data-includedProp={this.props.includedProp}>Hello</div>
      )
    }
  })
  it('test prop', () => {
    const wrapper = shallow(<MyComponent2 includedProp="success" excludeProp="i'm not included" />)
    expect(wrapper.prop('data-includedProp')).toBe('success')
  })


  it('test props', () => {
    const wrapper = shallow(<MyComponent2 includedProp="success" excludeProp="i'm not included" />)
    console.log(wrapper.props())
  })

  it('test reduce', () => {
    const wrapper = shallow(<MyComponent.Foo />)
    const total = wrapper.find('.foo').reduce( (amount = 10, n) => amount + n.prop('data-bar'))
    expect(total).toBe('102 3 4 ')
  })

  it('test render', () => {
    const wrapper = shallow(<MyComponent.Bar />)
    expect(wrapper.find('.in-bar').length).toBe(1)
    expect(wrapper.find('Foo').render().find('.foo').length).toBe(3)
  })

  //it('test setContext', () => {
  //const wrapper = shallow(<MyComponent.FooB  />, {context})
  //wrapper.setContext({html: 'hehe'})
  //expect(wrapper.text()).toBe('hehe')
  //})
  it('test setProps', () => {
    const wrapper = shallow(<MyComponent.FooB html="haha" />)
    expect(wrapper.props().html)
  })

  it('test simulate', () => {
    const wrapper = shallow(<MyComponent.Foo2 />)
    expect(wrapper.find('.clicks-0').length).toBe(1)
    wrapper.find('a').simulate('click')
    //expect(wrapper.find('.clicks-1').length).toBe(1)
  })


  it('test some', () => {
    const wrapper = shallow(<MyComponent.Foo />)
    expect(wrapper.find('.foo').some('.sd')).toBe(false)
    expect(wrapper.find('span').some('.foo')).toBe(true)
  })

  it('test someWhere', () => {
    const wrapper = shallow(<MyComponent.Foo />)
    expect(wrapper.find('.foo').someWhere(n => n.hasClass('qoo'))).toBe(false)
  })

  it('test state', () => {
    const wrapper = shallow(<MyComponent.Foo2 />)
    expect(wrapper.state().count).toBe(0)
  })

  it('test tap', () => {
    const wrapper = shallow(
      <ul>
        <li>xxx</li>
        <li>yyy</li>
        <li>zzz</li>
      </ul>
    )
      .find('li')
      .tap( n　=> console.log(n.debug()))
      .map(n => n.text())
  })

  it('test type', () => {
    const wrapper = shallow(
      <MyComponent2 />
    )
    console.log(wrapper.type())
  })

  const applyToAllFlavors = (string) => {
    return 'hah'
  }

  it('works sanely with simple decimals', () => {
    expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
  });

  const fetchNewFlavorIdea = () => {
    return false
  }
  it('returns something', () => {
    expect(fetchNewFlavorIdea()).toBeDefined();
  });



  it('does not lead to errors', () => {
    expect(fetchNewFlavorIdea()).toBeFalsy(0);
  });

  const test = () => {
    return null
  }
  it('test toBeNull', () => {
    expect(test()).toBeNull()
  })

  const isTest = () => {
    if(fetchNewFlavorIdea()){
      return console.log(0)
    }else{
      return console.log(1)
    }
  }

  it('test toBeTruthy', () => {
    expect('foo').toBeTruthy()
  })

  it('test toBeUndefined', () => {
    expect(undefined).toBeUndefined()
  })

  it('test containers', () => {
    const a = ['foo', 'bar']
    expect(a).toContain('foo')
  })

  it('test toContainEqual', () => {
    const a = [{name: 'liyuan'}, {name: 'liyuan'}]
    expect(a).toContainEqual({name: 'liyuan'})
  })
  const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };

  it('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });

  it('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });

  it('test toHaveLength', () => {
    expect([1,2,3]).toHaveLength(3)
    expect('abc').toHaveLength(3)
    expect('').toHaveLength(0)
  })

  it('test toMatch', () => {
    expect('1234').toMatch('123')
  })

  it('test toMatchObject', () => {

    const houseForSale = {
      bath: true,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white'
      },
      bedrooms: 4
    }

    const desiredHouse = {
      bath: true,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        wallColor: 'white'
      }
    }
    expect(houseForSale).toMatchObject(desiredHouse);
  })

  it('test toThrow', () => {

    const theowError = () => {
      throw new DisgustingFlavorError('yuck, octopus flavor')
    }

    expect( () => {
      theowError()
    }).toThrow();
  })

})

