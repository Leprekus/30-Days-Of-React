import React from 'react';
import ReactDOM from 'react-dom/client';

import asabeneh from './images/asabeneh.jpg';
import clock from './images/clock.png';
import css from './images/css_logo.png';
import html from './images/html_logo.png';
import js from './images/js_logo.png';
import react from './images/react_logo.png';
import verified from './images/verified.png';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

const date = new Date().getFullYear().toString()

const Header = props => {
    console.log(props)
    return (
    <header>
        <div className='header-wrapper'>
            <h1>{props.data.welcome}</h1>
            <h2>{props.data.title}</h2>
            <h3>{props.data.subtitle}</h3>
            <p>
                {props.author.firstName} {props.author.lastName}
            </p>
            <small>{props.date}</small>
        </div>
    </header>
    )
}

const Age = props => <div>The person is {props.age} years old.</div> 
const Weight = props => <p>The weight of the object on earth is {props.weight}</p>
const Status = props => {
    let status = props.status ? 'Old enough to drive' : 'Too young to drive'
    return (
        <p>{status}</p>
    )
}

const Skill = (props) => {
    const skillList = props.skills.map(skill => <li key={skill}>{skill}</li>);
    return (
        <ul>{skillList}</ul>
    )
}

const Button = (props) => <button onClick={props.onClick} >{props.text}</button>
const HexaDiv = props => <div style = {{
    height: '100px',
    width: '100px',
    backgroundColor: `${props.backgroundColor}`
}} onMouseOver = {props.onMouseOver}></div>
const App = () => {
    const data = {
        welcome: 'Welcome to 30 Days of React',
        title: 'Getting Started React',
        subtitle: 'Javascript Library'
    }
    const author = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh'
    }
    const birthYear = 2002;
    const age = date - birthYear;
    const weight = 76.5;

    const text = ':)';
    const sayHi = () => alert('Hi!')
    const hexaColor = () => {
        let str = 'abcdef1234567890';
        let color = '';
        for(let i = 0; i < 6; i++){
            const index = str[Math.floor(Math.random() * str.length)]
            color += index
        }
        
        return '#' + color
    } 

    return ( 
   <div className='app'>
    <div className='destructured-props'>
        <Header
        data = {data} 
        author = {author}
        date = {date}/>
        <Age age = {age}/>
        <Weight weight = {weight}kg/>
        <Status status = {true}/>
        <Skill skills = {['HTML', 'CSS', 'JS', 'REACT']}/>
        <Button text = {text} onClick = {sayHi} />
        <HexaDiv backgroundColor = {hexaColor()} onMouseOver = {async (e)=>{
          const event = e.target
          event.textContent == '' ? (event.textContent = 'Zyzz Legacy') : (event.textContent = '')
        }}/>
     </div>
    </div>
    )
};
root.render(<App/>)
//psn refund case number 60733052
