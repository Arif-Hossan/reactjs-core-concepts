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
    </div>
  );
}

export default App;
