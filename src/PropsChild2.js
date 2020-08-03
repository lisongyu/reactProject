import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildChild extends Component {

  // 获取context 里面的这个属性及类型
  static contextTypes = {
    title:PropTypes.string
  }
 
  render() {
    return (
      <div>
        {this.context.title}
      </div>
    )
  }
}


class Child extends Component {
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
        <ChildChild />
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
   // 书写父组件类型
  static childContextTypes={
    title:PropTypes.string
  }
    // 把要传递给子孙组件的属性，写到方法返回的对象中
  getChildContext(){
    
    return {
      title:'标题'
    }
  }
  
  render() {
    return (
      <div>
        <Child />
      </div>
    )
  }
}
