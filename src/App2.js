import React ,{Component} from 'react'
import Img from "./assents/logo512.png"
 class App2 extends Component{
  render (){
    return (
        <div>
          <p style={{color:"red",fontSize:"30px"}}>jsx语法注意事项</p>
          <img src={Img} alt='' />
        </div>
      )
    
  }
}

export default App2