import React from 'react'
import ReactDOM from 'react-dom'

import cssImg  from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/css_logo.png'
import htmlImg from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/html_logo.png'
import jsImg from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/js_logo.png'
import reactImg from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/react_logo.png'
import asabeneh from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/asabeneh.jpg'
import verified from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/verified.png'
import clock from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-03/hello-world-react-app/src/images/clock.png'
const root = document.getElementById('root');
const myPage = {
  display : 'flex',
  alignItems: 'center',
  justifyContent : 'center',
  flexDirection : 'column',
  width : '100%',
  fontFamily: 'arial',

}

const backgroundMid = {
  backgroundColor: '#FF83BA',
  width : '100%',
  margin : 'auto'
}
const headerStyle = {
  backgroundColor : '#83D8FF',
  width : '100%',
  margin : 'auto'
}

const footerStyle = {
  position: 'absolute',
  bottom: '0',
  backgroundColor: '#83D8FF',
  width:'100%',
  display: 'flex',
  justifyContent: 'space-around'
}


const imgContainer = {
  width: '150px',
  height: 'auto',
 
}

const title = <h1>Day 03</h1>
const list = ['JSX', 'BABEL', 'REACT']
const newList = list.map(li => <li key={li}>{li}</li>)
const date = new Date().toString()
const author = {firstName: 'Raul', lastName: 'Rodriguez', country: 'Mexico', gitHubUsername: 'Leprekus'}



const header = (
  <header style = {headerStyle}>
    {title}
    
    <img style = {imgContainer} alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Space_invaders_alien.svg/1280px-Space_invaders_alien.svg.png'/>
 
    <p>Date: {date}</p>
  </header>
  )
const main = (
  <main style = {backgroundMid}>
    <h5>React Technologies</h5>
    <ul>
      {newList}
    </ul>
    <h2>Exercises</h2>
    <p>
      A module is a set of prebuilt methods that can be implemented
      as part of a larger project or library. 

      A acts as a folder. It can contain namespaces, modules, 
      or other utils. 

      NPM is the package manager that comes with node. 

      A webpack allows to compile, organize and make use of JS modules. 
      It is also known as a module bundler. 

      A new react Project is created by running on the terminal:
      "create-react-app project name"

      A project contains public, src, pakcage-lock.json and node_modules.

      Favorite code editor is VScode. although I started with sublime, then 
      hopped to atom, and finally landed in vscode. 
      

    </p>
  </main>
)
const footer = (
  <footer style = {footerStyle}>
    <h3>Hi! Here is some info about me</h3>
    <p>This was made on June 9, 2022</p>
    <p>My username in gitHub is: {author.gitHubUsername}</p>
    <p>My country of birth is {author.country}</p>
  </footer>
)


const cellContainer = {
 borderSpacing: '2rem'
}

const containedImg = {
  width: '150px',
  height: '100px',
  objectFit: 'cover'
}

const inputContainer = {
  width: '75%',
  margin: '0 0 1em 0'
}

const inputField = {
  borderRadius: '5px',
  borderStyle: 'none',
  height: '30px',
  margin: '0 10px'
}

const subscribeButton = {
  backgroundColor: 'tomato',
  width: '250px',
  height: '40px',
  color: 'white',
  borderStyle: 'none',
  borderRadius: '5px'
}

const subscribeLetterBox = {
  backgroundColor: '#acdafc', 
  borderRadius: '5px', 
  width: '800px',
  height: '250px', 
  padding: '1rem', 
  margin: 'auto',
  display: 'Flex',
  flexDirection: 'column',
  alignItems: 'center',
  
}

const userCard = {
  height: 'fitContent',
  width: '800px',
  backgroundColor: 'whiteSmoke',
  padding: '1rem',
  overflowX: 'auto',
  borderRadius: '5px',
  margin: '1rem 0'
}

const userInfo = {
  display: 'Flex',
  flexDirection: 'Column'
}

const skillsContainer = {
  display: 'Flex',
  flexWrap: 'wrap'
}

const skillsSpanCardStyle = {
  backgroundColor: '#22cdc6',
  color: 'white',
  padding: '0.5rem',
  margin: '0.5rem 0.2rem',
  borderRadius: '7px'

}
const userSkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsSpanCard = userSkills.map(skill => <span  style = {skillsSpanCardStyle} key = {skill}>{skill}</span>)

 const app = (
  <div style = {myPage}>
    <div className = "myPage">
      {header},
      {main},
      {footer}
    </div>
    <div className = "exercises"> 

    <h1>Exercise 2</h1>
    <table style = {{margin: '50px auto'}}>
      <thead>
        <tr>
          <th style = {cellContainer}><img style={containedImg}src={cssImg} alt='css'/></th>
          <th style = {cellContainer}><img style={containedImg}src={htmlImg} alt='html'/></th>
          <th style = {cellContainer}><img style={containedImg}src={jsImg} alt='js'/></th>
          <th style = {cellContainer}><img style={containedImg} src={reactImg} alt='react'/></th>
        </tr>
      </thead>
    </table>

    <div style = {subscribeLetterBox}>
      <h1>Subcribe</h1>
      <p>Sign up with your email address to receive new and updates</p>
      
      <div style = {inputContainer}>
      <input placeholder='First Name' style={inputField}/>
      <input placeholder='Last Name' style={inputField}/>
      <input placeholder='Email' style={inputField}/>
      </div>
      <button style = {subscribeButton}>Subscribe</button>
    </div>

    <div style = {userCard}>

    <div style = {userInfo}>
      <img alt = 'user profile' src={asabeneh} style = {{width: '100px', height: 'auto', borderRadius: '50%'}}/>
      <span >
        <p style = {{display: 'inline-block'}}><strong>ASABENEH YETAYEH</strong></p>
        <img alt = 'verified' src = {verified} style = {{width: '60px', height: 'auto'}}/>
      </span>
      <p>SENIOR DEVELOPER, <em>Finland</em></p>
    </div>

    <p><strong>SKILLS</strong></p>
    <div style = {skillsContainer}>
      {skillsSpanCard}
    </div>

    <img alt = 'clock' src = {clock} style = {{width: '15px', height: 'auto'}} /><span style = {{color: 'gray', fontSize: '0.8rem'}}> Joined on Aug 30, 2020</span>

    </div>
  

    <h1>Exercise 3</h1>
    </div>
  </div>


)

ReactDOM.render(app, root)