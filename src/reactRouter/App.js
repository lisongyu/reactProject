import React, { Component } from 'react';
//导入路由依赖和组件
// import { Route, Link } from "react-router-dom"
//引入路由依赖，并起一个别名，因为原先的名字太长了
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

import List from "./List"
import Index from "./Index"
import Detail from "./Detail"

// 后台首页
import AdminIndex from "./AdminIndex"
import Center from "./Center"

class App extends Component {
    render() {
        return (
            <>
              <h3>所有页面普通内容</h3>
              <Router basename='/admin'>
                 <ul>
                 <li>
                          <Link to="/">后台首页</Link>
                      </li>
                      <li>
                          <Link to="/center">后台个人中心</Link>
                      </li>
                  
                 </ul>
                 <Route path='/'  exact component={AdminIndex}></Route>
                   <Route path='/center'  component={Center}></Route>
              </Router>
                <Router basename='/app'>
                  <ul>
                      
                      <li>
                          <Link to="/list">列表页</Link>
                      </li>
                      <li>
                          <Link to="/">首页</Link>
                      </li>
                      <li>
                          <Link to="/Detail">详情页</Link>
                      </li>
                  </ul>

                {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
             
                  <Route path='/list' component={List}></Route>
                  <Route path='/' exact component={Index}></Route>
                  <Route path='/detail' component={Detail}></Route>
                  </Router>
               
                

            </>
        )
    }
}
export default App;
