import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBarComp extends React.Component{
    render(){
        let activeStyle = {
            background:'yellow'
        }
        return(
            <ul style={{
                
                height:'60px', 
                background:'#ddd', 
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around'
            }}>
                <li>
                          <NavLink to="/home"
                            activeStyle ={activeStyle}
                        >
                          Home
                        </NavLink>
                </li>
                <li>
                          <NavLink to="/about"
                            activeStyle ={activeStyle}
                        >
                         About
                        </NavLink>
                </li>

                <li>
                          <NavLink to="/contact"
                            activeStyle ={activeStyle}
                        >
                         Contact
                        </NavLink>
                </li>

                <li>

                        <NavLink to='/gallery'
                        activeStyle = {activeStyle}
                        >
                            

                        Gallery
                        </NavLink>
                </li>
                  </ul>

        )
    }

}