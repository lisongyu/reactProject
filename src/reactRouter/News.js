import React, { Component } from 'react'

export default class News extends Component {
  constructor(props) {
    super(props)
    console.log('提交修改彩色')
    console.log(this.props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h1>我是新闻{this.props.match.params.id}</h1>
      </div>
    )
  }
}
