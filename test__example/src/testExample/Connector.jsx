import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class Bar extends PureComponent {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default connect()(Bar)
