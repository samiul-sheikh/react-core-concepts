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
  const names = ['hannan', 'manosh', 'polash', 'sakib', 'onik'];
  //   create object in array
  const products = [
    {name:'Photoshop', price:'$80.99'},
    {name:'Illustrator', price:'50.99'},
    {name:'PDF Reader', price:'$5.99'},
    {name:'Premium EI', price:'$249.99'}
  ];

  // using maps on data
  // const productNames = products.map(product => product)
  // console.log(productNames);
  // const userNames = names.map(name => name)
  // console.log(userNames);

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

        {/* show names dynamically in UI */}
        <ul>
          {/* <li>{names[0]}</li> */}
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {/* access object array dynamically */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* access object array */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
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
    height:'300px',
    width:'300px',
    float:'left',
    margin:'10px'
  }
  // console.log(props);
  // destructure for read
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h5>{name}</h5>
      <h6>{price}</h6>
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