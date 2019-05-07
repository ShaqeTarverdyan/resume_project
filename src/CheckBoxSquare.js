import React from 'react';
import styled from 'styled-components';
import './CheckBox.css';

const LabelGroup = styled.div`
margin-top:2%;
padding-bottom:20%;
`;

class Labels extends React.Component {
constructor(props) {
    super(props);
    this.state={
        name:props.name,
        checked:props.checked,
    }

}
    handleOnChange = (event) => {
        this.setState({
            checked: event.target.checked
        })
        this.props.onChange(this.props.index, event.target.checked)
    };
    render() {
        return (
            <label className="squarecontainer" onChange={this.handleOnChange}>
                <input type="checkbox" checked={this.state.checked}/>
                <span className="checkmark" ></span>
                <span className='text' for={this.state.name} >{this.state.name}</span>
            </label>
        );
    }

}

class CheckboxSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'БЭМ/OOCSS', checked: true },
                { name: 'Pug(Jade)', checked: false },
                { name: 'Stylus/LESS/SASS', checked: false },
                { name: 'worked with SVG', checked: false },
                { name: 'Accessibility(A11Y', checked: false },
                { name: 'ES2015/ES2016', checked: false },
                { name: 'ES2015/ES2016', checked: false },
                { name: 'Gulp/GRUNT', checked: false },
                { name: 'Webpack', checked: false },
                { name: 'WebGL', checked: false },
                { name: 'jQuery', checked: false },
                { name: 'VUE', checked: false },
                { name: 'React js', checked: false },
                { name: 'Node.js', checked: false },
                { name: 'use Git', checked: false },
                { name: 'I`m reading habr.com', checked: false },
                { name: 'I am lazy', checked: false },
                { name: 'Good English', checked: false },
            ],
           
             
        };
    }
handleOnChange = (id,checked) => {
console.log(id,checked);
}
    render() {
        return (
            <LabelGroup>
                {
                    this.state.data.map(((entry, index)=>
                        <Labels 
                        index={index}
                        onChange ={this.handleOnChange}
                        {...entry} />
                    ))
                }
               
            </LabelGroup >
        );
    }


}

export default CheckboxSquare;