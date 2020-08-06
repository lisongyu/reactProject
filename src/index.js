import React from "react"
import ReactDOM from 'react-dom'
import App from './reactRouter/App'
//引入路由依赖，并起一个别名，因为原先的名字太长了
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    //把根组件用BrowserRouter包起来，这里我用了别名
    <Router>
        <App />
    </Router>
,document.getElementById('root'))

