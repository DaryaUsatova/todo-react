import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

export default class App extends Component {
    state = {
        arr : [],
    };

    validateText = (str) => {
        let value = str.trim();
        if(value.length !== 0){
            return true;
        } else{
            return false;
        }
    };

    onClickEnter = (e) => {
        const { arr } = this.state;
        const value = e.target.value;

            if(e.keyCode===13 && this.validateText(value)){
                arr.push ({
                    text: value,
                    checked: false,
                });
                this.setState(arr);
                e.target.value='';
            }
    };

    onClickDelete = (i) => {
        const { arr } = this.state;

        arr.splice(i,1);
        this.setState(arr);
    };

    onClickCheckbox = (i) => {
        const { arr } = this.state;

        arr[i].checked = !arr[i].checked;
        this.setState(arr);
    };

    onClickEditText = (value, i) => {
        const { arr } = this.state;
        arr[i].text = value;
        this.setState(arr);
    };

    render(){
        const { arr } = this.state;

        const todolist = arr.map((item,index) => {
            return (
                <ListItem
                    key={index}
                    index={index}
                    item={item}
                    onClickDelete={this.onClickDelete}
                    onClickEditText={this.onClickEditText}
                    onClickCheckbox={this.onClickCheckbox}
                    validate={this.validateText}
                />
            )
        });
        return (
            <div className="App-ul">
                <h1>TodoList</h1>
                <input type="text"
                       className="App-ul-input"
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
