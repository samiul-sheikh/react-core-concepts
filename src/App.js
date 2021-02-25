import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Samiul",
    job: "Developer"
  }
  var institution = {
    university: 'American International University-Bangladesh',
    dept: 'Software Engineering'
  }
  var style = {
    color: 'white',
    backgroundColor: 'goldenrod'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        {/* access object also design via style object  */}
        <h1 className="" style={style}> Heading : {person.name + " " + person.job}</h1>
        {/* add style directly */}
        <h3 style={{backgroundColor:'salmon', color:'blue'}}>{institution.university + ", Dept of " + institution.dept}</h3>
        <p>I am a React Developer</p>
        {/* using my component */}
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

// declare my component
function Person(){
  // style object
  const personStyle={
    border:'2px solid yellow',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}> 
    {/* <div style={{border:'2px solid red', margin:'10px', padding:'10px'}}> */}
      <h5>Front End Development</h5>
      <p>working with React</p>
    </div>
  )
}
export default App;
