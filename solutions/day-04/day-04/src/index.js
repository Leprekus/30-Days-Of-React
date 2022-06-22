import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImg from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/asabeneh.jpg'
import cssLogo from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/css_logo.png'
import htmlLogo from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/html_logo.png'
import jsLogo from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/js_logo.png'
import reactLogo from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/react_logo.png'
import verified from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/clock.png'
import clock from '/Users/raulrodriguez/Desktop/counter/Fullstack/learning/30-Days-Of-React/solutions/day-04/day-04/src/images/verified.png'

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

//getUserInfo is a component
const getUserInfo = (firstName, lastName, title=false, proffession, skills) => {
  return `${firstName} ${lastName} is a ${title} ${proffession} and knows ${skills}`
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Proffession extends Person {
  constructor (firstName, lastName, title, proffession, skills='No Skills') {
    super (firstName, lastName)
    this.title = title; 
    this.proffession = proffession;
    this.skills = skills;
  } 

  getProffesionInfo () {
    return `${this.firstName} ${this.lastName} is a  ${this.title} ${this.proffession}`
  }

  getSkills () {
    let length = this.skills.length
    return `His skill(s): ${length > 1 ? skills.join(', ') : skills}`
  }

}

const skills = ['JS', 'Python', 'React', 'Dango']
const userOne = getUserInfo('John', 'Doe', 'Developer')
const userTwo = getUserInfo('John', 'Doe', 'Senior', 'Developer', skills)
const author = {
  firstName: 'Leprekus',
  lastName: 'Prekusle'
}
//const myProfile = new Proffession('Raul', 'Rodriguez', 'Jr.', 'Developer', ['React', 'JS', 'Node'])

const welcome = 'Welcome',
      title = 'Day 04 React',
      subtitle = 'React Components',
      date = 'June 22, 2022'

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor : {author.firstName} {author.lastName}</p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 60;
const numTwo = 9;
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1532
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
  {author.firstName} {author.lastName} is {age} years old. 
  </p>
  );

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
  const skillsArr = userSkills.map(skill => <span  style = {skillsSpanCardStyle} key = {skill}>{skill}</span>)


  const imgStyleOne = {width: '15px', height: 'auto'}
  const imgStyleTwo = {width: '100px', height: 'auto', borderRadius: '50%'}
  const imgStyleThree = {width: '60px', height: 'auto'}
  const pStyle = {display: 'inline-block'}
  const spanStyle = {color: 'gray', fontSize: '0.8rem'}

const UserCard = () => (
  <div style = {userCard}>

  <div style = {userInfo}>
    <img alt = 'user profile' src={asabenehImg} style = {imgStyleTwo}/>
    <span >
      <p style = {pStyle}><strong>ASABENEH YETAYEH</strong></p>
      <img alt = 'verified' src = {verified} style = {imgStyleThree}/>
    </span>
    <p>SENIOR DEVELOPER, <em>Finland</em></p>
  </div>

  <p><strong>SKILLS</strong></p>
  <div style = {skillsContainer}>
    {skillsArr}
  </div>

  <img alt = 'clock' src = {clock} style = {imgStyleOne} /><span style = {spanStyle}> Joined on Aug 30, 2020</span>

  </div>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techFormatted = techs.map(tech => <li key={tech}>{tech}</li>)

const Main = () => (
<main>
  <div className='main-wrapper'>
    <div>
      <p>Prerequisites to get started{' '}
      <strong>
        <em>react.JS</em>
      </strong>
      :
      </p>
      <ul>{techFormatted}</ul>
      {result}
      {personAge}
    </div>
  </div>
</main> 
)

const copyRight = currentYear;

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright @copy {copyRight}</p>
    </div>
  </footer>
)
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: '5px'
}

const Button = () => (
  <button> Action </button>
)
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
 

    for(let i = 0; i < 6; i++){
    const index = Math.floor(Math.random() * str.length)
    color += str[index]
    }
  return  `#${color}`
}
const HexaColor = {
  backgroundColor:hexaColor(),
  width: '100px',
  height: '100px'
}
const techBannerStyle = {
  width: '100px',
  height: '100px',
  display: 'flex',
  flexWrap: 'nowrap',
  //maintains a 1:1 ratio 
  flex:'1 1 auto',
}

const TechBanner = () => (
  <div style={{textAlign: 'center', width:'400px', fontFamily:'Arial'}}className='wrapper'>
  <h3>Front End Technologies</h3>
  <div className='img-container' style={techBannerStyle}>
  <img src={htmlLogo} alt=''/>  
  <img src={cssLogo} alt=''/>
  <img src={jsLogo} alt=''/>
  <img src={reactLogo} alt=''/>
  </div>
  </div>
)

const subscribeLetterBoxStyle = {
  width: '800px',
  height: '400px',
  backgroundColor: 'aqua',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial',
  borderRadius: '7px'
}

const inputStyle = {
  borderRadius: '5px',
  borderStyle: 'none',
  height: '30px',
  margin:'0 10px'
}

const subscribeButtonStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  borderStyle: 'none',
  borderRadius: '5px',
  height: '40px',
  minWidth:'300px',
  marginTop: '30px',
  cursor: 'pointer'
}

const SubscribeLetterBox = () => (
  <div style ={subscribeLetterBoxStyle}>
    <h1>Subscribe</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div className='input-fields'>
    <input style={inputStyle} placeholder='First Name'/>
    <input style={inputStyle} placeholder='Last Name'/>
    <input style={inputStyle} placeholder='Email'/>
    </div>
    <button style={subscribeButtonStyle}>Subscribe</button>
  </div>
)


const HexaDivs = () => (
  <div className='container' style={{height: '1000px', width: '80%', display:'flex', flex:'1 1 auto'}}>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
    <div className='hexa-div' style={{backgroundColor: hexaColor(), width: '200px', color:'white', fontFamily: 'Arial', display:'flex', justifyContent: 'center', alignItems: 'center'}}>{hexaColor()}</div>
  </div>
)
const App = () => (
  <div className="app">
    <Header/>
    <Main/>
    <Footer/>
    <Button/>
    <div className='hexa-color' style={HexaColor}></div>
    <TechBanner/>
    <SubscribeLetterBox/>
    <HexaDivs/>
    <UserCard/>
    </div>
);
root.render(<App/>)
