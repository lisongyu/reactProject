import React, { Component } from 'react'


class Header extends Component {
  static defaultProps = { // 给props属性添加默认值
    title: "skyblue"
  }
  // this.props.children 获取子元素
  render() {
    return (
      <header>
        {this.props.title}
        {this.props.children}
      </header>
    )
  }
}

export default class PropsLearn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '首页标题'
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Header title="列表页标题" />
        <Header>子元素</Header>
      </div>
    )
  }
}
