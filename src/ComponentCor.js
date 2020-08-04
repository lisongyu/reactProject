import React, { Component } from 'react'
// 不受控组件
export default class ComponentCor extends Component {

  handleClick() {
    console.log(this.refs.username.value)
  }
  render() {
    return (
      <div>
        用户名:<input type="text" ref="username" /><br /><br />

        密&nbsp;码:<input type="text" ref="password" /><br /><br />
        <input type="button" value="登录" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}
