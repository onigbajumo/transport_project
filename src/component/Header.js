import React, {Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div className="header">  
            <nav>
                <ul>
                    <li><a href="#"></a>{this.props.row1}</li>
                    <li><a href="#"></a>{this.props.row2}</li>
                    <li><a href="#"></a>{this.props.row3}</li>
                    <li><a href="#"></a>{this.props.row4}</li>
                    <li><a href="#"></a>{this.props.row5}</li>
                </ul>
            </nav>
             </div>
        )
    }
}
export default Header;