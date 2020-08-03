import React, { Component } from 'react'
// 子集组件向父级组件传递
class Child extends Component {
  handleClick(){
    // 点击按钮的时候调用父组件传递过来的方法
    this.props.fatherChange(30)
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点击</button><br/>
        {this.props.children}
      </div>
    )
  }
}




export default class ChildToParent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       num:20
    }
  }

  // 在父组件传递一个方法给与子组件去调用
  fatherChange(val){
    this.setState({
      num:val
    })
  }
  
  render() {
    return (
      <div>
        <Child fatherChange = {this.fatherChange.bind(this)}>{this.state.num}</Child>
        
      </div>
    )
  }
}
