import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
    state = {
        edit:false,
    };

    onClickSave = () => {
        const { validate, index, onClickEditText } = this.props;

        if(validate(this.refs.newText.value)) {
            this.setState({ edit: false });
            onClickEditText(this.refs.newText.value, index);
        }
    };

    onClickEnter = (e) => {
        const { validate } = this.props;

        if(e.keyCode===13 && validate(e.target.value)){
            this.onClickSave();
        }
    };

    onClickEdit = () =>{
        this.setState({edit:true})
    };

    updateText = () =>{
        const { index,text } = this.props.item;

        return(
            <li className= "ListItem-li">

                <input type="text" ref="newText" className ="ListItem-input" defaultValue={text} onKeyUp={this.onClickEnter}/>

                <button
                    className ="ListItem-save"
                    itemnumber={index}
                    onClick={this.onClickSave}
                >
                    {'\u2713 '}
                </button>

            </li>
        );
    };

    normalLi = () => {
        const { index, onClickCheckbox, onClickDelete } = this.props;
        const { text, checked } = this.props.item;
        return (
            <li
                className={ checked ? 'ListItem-li text-through': 'ListItem-li' }
                key={index}
                onDoubleClick={this.onClickEdit}
            >
                <span>{text}</span>
                <input
                    type="checkbox"
                    className="ListItem-checkbox"
                    key={index}
                    checked={checked}
                    onChange={() =>{onClickCheckbox(index)}}
                />
                <button
                    className ="ListItem-edit"
                    itemnumber={index}
                    onClick={this.onClickEdit}
                >edit</button>
                <button
                    className ="ListItem-delete"
                    itemnumber={index}
                    onClick={() => { onClickDelete(index)}}
                >
                    {'\u00D7'}
                </button>
            </li>
        );
    };

    render(){
        const {edit} = this.state;

        if(!edit){
            return this.normalLi();
        }else{
            return this.updateText();
        }
    }
}