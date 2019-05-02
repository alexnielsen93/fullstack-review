import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {updateUserId, updateUserName} from '../../redux/reducer'
import axios from 'axios'

class LoginForm extends Component{
constructor(){
  super()
  this.state = {
    loginUserName: '',
    loginPassword: '',
    loginError: false,
    loginErrorMessage: 'Wrong info, dummy.  Try again and try not to break it this time.'

  }
}

//public class field syntax
handleFormInputUpdate=(e)=>{
  
  this.setState({
    [e.target.name]: e.target.value,
    loginError:false
  })
}

handleLoginFormSubmit = async(e) =>{
  e.preventDefault()
  const {loginUserName, loginPassword} = this.state
  try{

    const res = await axios.post('/auth/login', {loginUserName, loginPassword})
    this.props.updateUserName(loginUserName)
    this.props.updateUserId(res.data.user_id)
    this.props.history.push('/info')
    console.log('login successful')
    
  }catch(err){
    this.setState({
      loginUserName : '',
      loginPassword: '', 
      loginError: true})
  }

}
render(){
  return(
    <>
    <h1>Login</h1>
    <form onSubmit ={this.handleLoginFormSubmit}>
    <input 
    name="loginUserName" 
    placeholder = "username" 
    value={this.state.loginUserName} 
    onChange = {this.handleFormInputUpdate} 
    type="text"/>
        <input 
    name="loginPassword" 
    placeholder = "password" 
    value={this.state.loginPassword} 
    onChange = {this.handleFormInputUpdate} 
    type="text"/>
    <button>Login</button>
    </form>
    {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}
    </>
  )
}

}

const mapDispatchToProps = {
  updateUserId,
  updateUserName
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))