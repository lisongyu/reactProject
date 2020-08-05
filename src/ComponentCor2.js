import React, { Component } from 'react'
// 不受控组件
export default class ComponentCor extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       usernameVal:""
    }
  }
  
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      usernameVal:e.target.value
    })
  }
  handleClick(){

  }
  
  render() {
    return (
      <div>
        用户名:<input type="text" value={this.state.usernameVal} onChange={this.handleChange.bind(this)}  /><br /><br />

        密&nbsp;码:<input type="text" /><br /><br />
        <input type="button" value="登录" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}
