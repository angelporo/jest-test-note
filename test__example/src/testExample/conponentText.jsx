import React, {Component} from 'react';

export class MyComponent1 extends Component {
  HeadleClick () {
    console.log('test')
  }
  render() {
    return (
      <div>
        <h1 onclick={this.HeadleClick} className="foo bar">Hello</h1>
      </div>
      )
    }
}


export class Book extends Component {
  render () {
    const {title, cover} = this.props;
    return (
      <div>
        <h1 className="title">{title}</h1>
        {cover && <BookCover cover={cover} />}
      </div>
    );
  }
}

export  class Foo extends Component {
    render () {
      return (
        <div>
          <span className="foo qoo" data-bar="2 "></span>
          <span className="foo boo" data-bar="3 "></span>
          <span className="foo" data-bar="4 "></span>
        </div>
      )
    }
  }


export class Bar extends Component {
  render () {
    return (
      <div className="in-bar">
        <Foo />
      </div>
    )
  }
}

export class FooB extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="foo2">{this.props.html}</div>

    )
  }
}

export class Foo2 extends Component{
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render () {
    const {count} = this.state;
    return (
      <div>
        <div className={`clicks-${count}`} >{count} clicks</div>
        <a href="" onClick={() => { this.setState({count: count+1})}} >
          Increnment
        </a>
      </div>
    )
  }
}
