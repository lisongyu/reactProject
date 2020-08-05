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
            <a href="#/index">首页</a>
          </li>
          <li> <a href="#/list">列表页</a></li>
        </ul>
      </div>
    )
  }
}
// 定义一个路由
let router=<Router history={hashHistory}>
   <Route path="/" component={App}/>
  <Route path="/index" component={Index}/>
  <Route path="/list" component={List}/>
</Router>
ReactDOM.render(
  router,
  document.getElementById('root')
)
