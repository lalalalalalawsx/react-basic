import React, { Component } from 'react'

class Layout extends Component {
    render () {
        return <section>{this.props.children}</section>
    }
}

export default Layout