import React from 'react';
import './CheckBox.css';

const Rounds = (props) =>{
    return (
        <label className="circleContainer">
            <input type="radio" name="selected"/>
            <span className="checkmark"></span>
            <span className='text'for={props.name}>{props.name}</span>
        </label>

    );
}
const CheckBoxCircle = (props) => {
    const data = [
        {name:'Верстать'},
        {name:'Прокачиватся в JS'},
        {name:'Менеджерство'},
        {name:'Другое'}
    ]
    return(
        <>
        <label for="xxx" className="circleContainer">
            <input id="xxx" type="radio" name="selected" />
            <span className="checkmark"></span>
            <span className='text'>Верстать</span>
        </label>
        <label className="circleContainer">
            <input type="radio" name="selected" />
            <span className="checkmark"></span>
            <span className='text'>Прокачиватся в JS</span>
        </label>
        <label className="circleContainer">
            <input type="radio" name="selected"/>
            <span className="checkmark"></span>
            <span className='text'>Менеджерство</span>
        </label>
        <label className="circleContainer">
            <input type="radio" name="selected"/>
            <span className="checkmark"></span>
            <span className='text'>Другое</span>
        </label>
        </>
    );
}

export default CheckBoxCircle;