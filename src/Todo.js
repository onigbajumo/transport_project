import React, {Component} from 'react';
import Newhead from './Newhead'
class Todo extends Component{
    render(){
        return (
            <div className="header">  
            <h1> Welcome to my first Todo App</h1>
            <Newhead />
             </div>
        )
    }
}
export default Todo;