import React, { Component } from 'react'
import {Router,Route} from 'react-router'
import ReactDOM from 'react-dom';
// 引入对应的组件
import Index from './Index'
import List from './List'
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="#/app/index">首页</a>
          </li>
          <li> <a href="#/app/list">列表页</a></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
// 定义一个路由
let routes1=<Router history={hashHistory}>
   <Route path="/app" component={App} >
  
    <Route path="/app/index" component={Index}/>
    <Route path="/app/list" component={List}/>
    </Route>
 
  
</Router>
console.log(routes1)
ReactDOM.render(
  routes1,
  document.getElementById('root')
)
