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
  const names = ['hannan', 'manosh', 'polash', 'sakib']
  //   create object in array
  const products = [
    {name:'Photoshop', price:'$80.99'},
    {name:'Illustrator', price:'50.99'},
    {name:'PDF Reader', price:'$5.99'}
  ]
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

        {/* access object array */}
        <Product product={products[0]}></Product>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* pass dynamic data to components */}
        <Person name={names[0]} job="php"></Person>
        <Person name="Sayed" job="android"></Person>
        <Person name="lingcon" job="java"></Person>
        <Person name="nobel" job="javascript"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgrey',
    height:'200px',
    width:'200px',
    float:'left'
  }
  console.log(props);
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// declare my component
function Person(props){
  // style object
  const personStyle={
    border:'2px solid yellow',
    width: '400px',
    margin: '10px',
    padding: '10px'
  }
  // console.log(props);
  return (
    <div style={personStyle}> 
    {/* <div style={{border:'2px solid red', margin:'10px', padding:'10px'}}> */}
      <h5>Engineer: {props.name}</h5>
      <p>working with {props.job}</p>
    </div>
  )
}
export default App;