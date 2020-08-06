import React, { Component } from 'react';
//导入路由依赖和组件
import { Route, Link } from "react-router-dom"

import List from "./List"
import Index from "./Index"

class App extends Component {
    render() {
        return (
            <>
                <ul>
                    
                    <li>
                        <Link to="/list">列表页</Link>
                    </li>
                    <li>
                        <Link to="/Index">首页</Link>
                    </li>
                </ul>

                {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
               
                <Route path='/list' component={List}></Route>
                <Route path='/index' component={Index}></Route>

            </>
        )
    }
}
export default App;
