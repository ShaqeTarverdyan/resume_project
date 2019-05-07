import React, { useState, useEffect } from 'react';
import CheckBoxCircle from './CheckBoxCircle';
import CheckboxSquare from './CheckBoxSquare';
import Range from './Range';
import styled from 'styled-components';
import delo from './Images/delo.png'
import stamp from './Images/stamp.png';
import back from './Images/back.jpg';

const Row = styled.label`
display:flex;
justify-content: start;
font-size:1.5vw;
font-weight:700;
`;
const Input = styled.input`
display:flex;
flex:1;
border:none;
background: transparent;
outline: none;
border-bottom:1px solid black;
width:98%;
height:10%;
font-size:1.9vw;
// padding:0;
// margin:0;
::placeholder{
    color:#231f20;
    font-weight:100;
    font-family:Courier New;
}
`;
const P = styled.p`
margin-right:2%;
`;
const InpotFields = styled.div``;
const AboutTitle = styled.p`
font-size:1.5vw;
font-weight:700;
margin:0;
`;
const AboutText = styled.p`
font-size:1.1vw;
line-height:1.8;
color:#2f1b15;
`;
const CheckBoxField = styled.div``;

const RangeField = styled.div`
margin-top:5%;
display:inline-block;
height:10vw;
width:98%;
`;
const RangeTitle = styled.p`
font-size:1.5vw;
font-weight:700;
margin:0;
`;
const Practice = styled.div`
width:25%;
float:left;
font-size:1vw;
font-weight:500;
margin-top:1vw;
`;
const TextAreaDiv = styled.div`
display:block;
margin-top:5%;
`;
const HeaderText = styled.p`
font-size:1.5vw;
font-weight:700;
margin-top:0.5vw;
`;
const MetaText = styled.div`
font-size:1vw;
font-weight:400;
line-height:1.8;
margin:0;
padding:0;
`;
const InputTextArea = styled.input`
width:100%;
border:none;
background: transparent;
outline: none;
border-bottom:2px solid black;
font-size:1.2vw;
margin-top:2%;
::placeholder{
    color:#7A5347; 
    font-weight:200;
}
`;
const Table = styled.table`
border:collapse;
width:100%;
`;
const TR = styled.tr`
`;
const Button = styled.button`
position: relative;
top: 0;
left: 0;
height: 100%;
width: 4%;
border:none;
background-color:inherit;;
color:#2f1b15;
font-size:1.2vw;
cursor:pointer;
outline:none;
font-weight:700;
:hover{
    opacity:0.9;
    border-radius: 15%;
    border:1px solid #2f1b15;
    color:#2f1b15;
}
`;
const Buttons = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-between;
`;
const CheckRadio = styled.div`
display:block;
margin-top:5%;
`;
const AboutTextRadio = styled.p`
font-size:1.5vw;
font-weight:700;
margin:0;
`;
const AboutText1 = styled.p`
font-size:1vw;
font-weight:400;
`;
const AddedDate = styled.div`
margin-top:5%;
display:flex;
justify-content: start;
font-size:1vw;
font-weight:700;
`;
const InputAdded = styled.input`
display:flex;
width:33%;
height:1%;
border:none;
background: transparent;
outline: none;
border-bottom:1px solid black;
padding-left:2%;
font-size:1.2vw;
::placeholder{
  color:#231f20;
  font-weight:100;
  font-family:Courier New;
}
`;
const Text = styled.p`
font-size:1.5vw;
font-weight:700;
margin-right:2%;
margin-top:1%;
`;

const ImgDiv = styled.div`
width:100%;
display:block;
padding-bottom:5%;

`;
const Img = styled.img`
width:35%;
display:block;
margin: 0 auto;
`;
const Skeleton = styled.div`
width:30%;
height:auto;
padding:1%;
margin-left:70%;
`;
const ImgStamp = styled.img`
width:100%;
`;
const Main = styled.div`
display:block;
width:60%;
height:initial;
background-image:url(${back}); 
margin:auto;
background-repeat: no-repeat;
background-size: cover;
padding-left:10%;
padding-right:10%;
padding-top:3%;
padding-bottom:5%;
`;
class TextArea extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            shareholders: [{ name: "" }]
        };
    }

    handleShareholderNameChange = idx => evt => {
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });
        this.setState({ shareholders: newShareholders });
    };

    handleSubmit = evt => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    };

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: "" }])
        });
    };
    handleRemoveShareholder = () => {
        this.setState((prevState, props) => {
            return { shareholders: prevState.shareholders.slice(1) };
        });
    };
    render() {
        return (
            <TextAreaDiv>
                <HeaderText>Расскажите о себе словами</HeaderText>
                <MetaText>Напишите пару предложений, чем вам привекла наша вакансия и чего вы ожидаете от работы.Кстати, будет здорово, если при нехватке место для текста строки будут добавляться автоматически</MetaText>
                <Table>
                    <TR><Input maxLength='100' placeholder="Ну-уу-уууу..." /></TR>
                    <TR><Input maxLength='100' placeholder="Ээээээ..." /></TR>
                </Table>
                <form onSubmit={this.handleSubmit}>
                    {this.state.shareholders.map((shareholder, idx) => (
                        <Table>
                            <TR>
                                <InputTextArea
                                    maxLength='100'
                                    type="text"
                                    value={shareholder.name}
                                    onChange={this.handleShareholderNameChange(idx)}
                                />
                            </TR>
                        </Table>
                    ))}
                    <Buttons>
                        <Button
                            type="button"
                            onClick={this.handleAddShareholder}
                        >
                            +
                        </Button>
                        {Boolean(this.state.shareholders.length) && (
                            <Button
                                type="button"
                                onClick={this.handleRemoveShareholder}
                            >
                                -
                        </Button>
                        )}
                    </Buttons>
                </form>
            </TextAreaDiv>
        );
    }

}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:props.fullName,
            birthdate:props.birthdate,
            location:props.location,
            skype:props.skype,
            email:props.email,
        }


    }
    handleChange = event => {
        console.log(this.state);
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <>
                <Main>
                    <Skeleton>
                        <ImgStamp src={stamp} />
                    </Skeleton>
                    <ImgDiv> <Img src={delo} alt="delo" /></ImgDiv>
                    <InpotFields>
                        <Row>
                            <P>Полное ФИ</P>
                            <Input
                                type="text"
                                name="fullName"
                                placeholder="Shaq Tarverdyan"
                                value={this.state.fullName}
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <P>Год рождения</P>
                            <Input
                                type="date"
                                name="birthdate"
                                placeholder="01.11.1993"
                                value={this.state.birthdate}
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <P>Место жительства</P>
                            <Input
                                type="text"
                                name="location"
                                placeholder="Yerevan"
                                value={this.state.location}
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <P>Скайп</P>
                            <Input
                                type="text"
                                name="skype"
                                placeholder="Shaqe"
                                value={this.state.skype}
                                onChange={this.handleChange}
                            />
                        </Row>
                        <Row>
                            <P>Почта</P>
                            <Input
                                type="email"
                                name="email"
                                placeholder="tshaqe@gmail.com"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Row>
                    </InpotFields>
                    <CheckBoxField>
                        <AboutTitle>Расскажите о себе чекбоксами</AboutTitle>
                        <AboutText>Отметьте чекбоксами пункты которые соответствуют вашим скиллам․
                            Кстати отсутствие опыта не означает ,что у вас меньще шансов стать
                            одним товаришей․Это означaет, что вы будете получать те задачи, с
                             которими гарантированно будете справляться
                        </AboutText>
                        <CheckboxSquare />
                    </CheckBoxField>
                    <RangeField>
                        <RangeTitle> Уровень владения </RangeTitle>
                        <Range />
                        <Practice>Не знаю</Practice>
                        <Practice>Использую готовые решения</Practice>
                        <Practice>Использую готовые решения и умею их переделивать</Practice>
                        <Practice style={{ textAlign: 'right' }}>пищу сложный JS с нуля</Practice>
                    </RangeField>
                    <TextArea />
                    <CheckRadio>
                        <AboutTextRadio>Какие у вас планы на будущее?</AboutTextRadio>
                        <AboutText1>Этот ответ ни на что не повлияет.Не беда если в будущем ваши планы поменяются</AboutText1>
                        <CheckBoxCircle />
                    </CheckRadio>
                    <AddedDate>
                        <Text>Дата заполнения</Text>
                        <InputAdded placeholder="01.05.2019" type="date" />
                    </AddedDate>
                </Main>
            </>
        );
    }
}
export default MainContent;