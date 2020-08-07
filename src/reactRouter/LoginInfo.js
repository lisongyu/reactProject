import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import AdminIndex from "./AdminIndex"
function loginInfoJump(props) {
  console.log(props)
 if(props.location.state.loginState === 'success'){
   return <Redirect to="/adminIndex"></Redirect>
 }else{
  return <Redirect to="/login"></Redirect>
 }
}

let formCom=()=>{
  let pathObj={
    pathname:'/logininfo',
    state:{
      loginState:'success'
    }
  }

  return (
    <div>
      <h1>表单验证</h1>
      <Link to={pathObj}>登录验证后页面</Link>
    </div>
  )
}



export default class LoginInfo extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact  component={()=>(<h1>首页</h1>)}></Route>
          <Route path="/form" exact  component={formCom}></Route>
          <Route path="/login" exact  component={()=>(<h1>登录页</h1>)}></Route>
          <Route path="/logininfo" exact  component={loginInfoJump}></Route>
          <Route path="/adminIndex" exact  component={AdminIndex}></Route>
          
        </Router>
      </div>
    )
  }
}

