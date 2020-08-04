// 4组件生命周期更新
import React, { Component } from 'react'

export default class Lift extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 20
    }
    this.handleClick = this.handleClick.bind(this)
    console.log('1.1 constructor 初始化组件')
  }
  // 第二阶段，更新期
  UNSAFE_componentWillReceiveProps() {
    console.log('2.1 componentWillReceiveProps 接收props属性之前')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('2.2 shouldComponentUpdate')
    console.log('num的旧值为', this.state.num);
    console.log('num的新值为', nextState)
    return (this.state.num !== nextState.num)
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('2.3 componentWillUpdate 更新之前执行的')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('2.5 componentDidUpdate')
  }
  handleClick() {

    this.setState({
      num: 21
    })
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  UNSAFE_componentWillMount() {
    console.log('1.2 在挂载数据之前需要执行的代码')
  }
  componentDidMount() {
    console.log('1.4 在挂载数据之后需要执行的代码')
    // 异步请求
  }
  render() {
    console.log('1.3渲染标签到也买呢上，填充数据到标签中')
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>点击按钮</button>
      </div>
    )
  }
}
