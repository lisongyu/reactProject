import React, {
  Component
} from 'react'
export default class App4 extends Component {
  constructor(props) {
    super(props)
    // 组件的内部数据
    this.state = {
      num: 20
    }

  }
  handleClick() {
    this.setState({
      num: this.state.num + 1
    })
    console.log('点击了阿牛')
  }


  render() {
    return ( <
      div >
      <
      p > {
        this.state.num
      } < /p>  <
      button onClick = {
        this.handleClick.bind(this)
      } >
      按钮 <
      /button>   < /
      div >
    )

  }
}