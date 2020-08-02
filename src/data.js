import React, { Component } from 'react'

export default class DataBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       val:'初始化值'
    }
  }
  handleChange(e) {
    // 需要改变value 用户输入的
    this.setState({
      val:e.target.value
    })
   
    
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)}/>
        <p>{this.state.val}</p>
      </div>
    )
  }
}
