import logo from './logo.svg';
import './App.css';

const number = 777;
const singer = {name : "Dr Mahfuz", job:"singer"}
// styling
const singerStyle = {
  color:"Purple",
  backgroundColor:"White"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello Dude, How are you?</h3>
        </div>
        <div className="music">
          <p style={{color:"red",backgroundColor:"White"}}>Num : {number} </p>
          <p style={singerStyle}>Singer : {singer.name} , {singer.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* using person component */}
      <Person name="Kuber" nayika="Kopila"></Person>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person nayika="Chompa"></Person>
      <h3>Hello Dude, I am here to say hello</h3>
      <Friend name="Singham" phone="01777"></Friend>
      <Friend name="Bazrangi" phone="01799"></Friend>
    </div>
  );
}

function Person(props){
  // console.log(props);
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Nayika : {props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props);
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>Phone : {props.phone}</p>
    </div>
  )
}

export default App;
