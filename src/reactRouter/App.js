import React, { Component } from 'react';
//导入路由依赖和组件
// import { Route, Link } from "react-router-dom"
//引入路由依赖，并起一个别名，因为原先的名字太长了
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

import List from "./List"
import Index from "./Index"
import Detail from "./Detail"
import News from "./News"

// 后台首页
// import AdminIndex from "./AdminIndex"
// import Center from "./Center"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       detailParam:{pathname:"/Detail",search:'?id=1112',hash:'#abc'}
    }
  }
  
    render() {
        return (
            <>
              <h3>所有页面普通内容</h3>
              {/* <Router basename='/admin'>
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
              </Router> */}
                <Router basename='/' history={Router}>
                  <ul>
                      
                      <li>
                          <Link to={{pathname:"/list"}}>列表页</Link>
                      </li>
                      <li>
                          <Link to="/">首页</Link>
                      </li>
                      <li>
                          <Link to={this.state.detailParam} replace>详情页</Link>
                      </li>
                      <li>
                          <Link to="/news/12323" >新闻页</Link>
                      </li>
                  </ul>

                {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
             
                  <Route path='/list' component={List}></Route>
                  <Route path='/' exact component={Index}></Route>
                  <Route path='/detail' component={Detail}></Route>
                  <Route path='/news/:id' component={News}></Route>
                  </Router>
               
                

            </>
        )
    }
}
export default App;
