import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Header extends Component {
  static propTypes = {
    // 要验证的属性名:期望的类型
    title:PropTypes.string

  }
  static defaultProps={
    title:'我是谁'
  }
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}




export default class PropsChild extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:'我是标题'
    }
  }
  
  render() {
    return (
      <div>
        <Header title={this.state.title}/>
        <Header />
      </div>
    )
  }
}
