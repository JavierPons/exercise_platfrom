import About from './About'
import Home from './Home'
import NavBarComp from './NavBarComp'
import Contact from './Contact'
import Gallery from './Gallery'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
export default class App extends React.Component {
  render(){
      return(
          <Router>
            <div>
              <NavBarComp/>
                  <Route  exact path = "/home" component = {Home}/>
                  <Route  path = '/about' component = {About}/>
                  <Route  path = '/contact' component = {Contact}/>
                  <Route  path = '/gallery/:something' component = {Gallery}/>
            </div>
          </Router>
      )
  }
}
