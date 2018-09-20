import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
    state = {
        arr : [],
    };

    onClickEnter = (e) => {
        const { arr } = this.state;
        if(e.keyCode===13){
            arr.push ({
                text: e.target.value,
            });
            this.setState(arr);
            e.target.value='';
        }
    };
    onDeleteClick = (e) => {
        const { arr } = this.state;
        const idButton = e.currentTarget.getAttribute('itemnumber');
                 arr.splice(idButton,1);
        this.setState(arr);
    };

    render(){
        const { arr } = this.state;
        console.log('--------arr:', arr);
        const todolist = arr.map((item, index) => {
            return (
                <li className="App-li" key={index}>
                    {item.text}
                    <button
                        className ="App-delete"
                        itemnumber={index}
                        onClick={this.onDeleteClick}
                    >X</button>
                </li>
            )
        });
        return (
            <div className="App-ul">
                <h1>TodoList</h1>
                <input type="text"
                       placeholder="What needs to be done?"
                       onKeyUp={this.onClickEnter}
                />
                <ul>
                    {todolist}
                </ul>
            </div>
        )
    }
}
