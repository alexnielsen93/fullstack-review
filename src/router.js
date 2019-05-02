import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Login from './components/forms/login'
import LoginForm from './components/forms/loginForm'

export default(

  <Switch>
    <Route exact path='/' component= {Home}/>
    <Route path = '/login' component ={()=>(

      <Login>
        <LoginForm/>
      </Login>
    )} />
  </Switch>
)