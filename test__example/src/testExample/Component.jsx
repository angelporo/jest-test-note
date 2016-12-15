import React, { PureComponent } from 'react'

export default class extends PureComponent {
    render() {
        return (
            <h1>{this.props.bar}</h1>
        )
    }
}
