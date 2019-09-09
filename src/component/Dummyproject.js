import React, {Component} from 'react';
import './Dummyproject.css';
import Header from './Header';
import Usersadmin from './Usersadmin';
import Mainbody from './Mainbody';

class Dummyproject extends Component{
    render(){
        return (
            <div className="header">  
            <h1> This is my Dummy Project...</h1>
            <p>this is what i want to display in all other pages</p>
            <Header row1 = "Home" row2 = "Contact" row3 = "Support"
            row4="About Us" row5 = "Services" />
            <Usersadmin /> 
            <Mainbody />
            </div>
        )
    }
}
export default Dummyproject;