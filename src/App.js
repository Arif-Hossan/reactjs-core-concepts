import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const number = 777;
const singer = {name : "Dr Mahfuz", job:"singer"};
const singers = [
  {name : "Dr Mahfuz", job:"singer"},
  {name : "Agun", job:"Jontrona"},
  {name : "Shubrata", job:"Pathor"}
]
// styling
const singerStyle = {
  color:"Purple",
  backgroundColor:"White"
}
function App() {
  const nayoks = ["Razzak","Rubel","Anwar","BappaRaz","Joshim"]
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
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
    {/* using array of objects */}

    {
      singers.map(singer=> <Person name={singer.name}></Person>)
    }


     {/* using array */}

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {/* using person component normally */}

      {/* <Person name="Kuber" nayika="Kopila"></Person>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person nayika="Chompa"></Person> */}

      <h3>Hello Dude, I am here to say hello</h3>
      <Friend name="Singham" phone="01777"></Friend>
      <Friend name="Bazrangi" phone="01799"></Friend>


      {/* state */}
     <Counter></Counter>

     <ExternalUsers></ExternalUsers>

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
  // console.log(props);
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>Phone : {props.phone}</p>
    </div>
  )
}

function Counter (){
  const [count,setCount] =useState(10);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // console.log(abc);
 return (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>
 )
}

function ExternalUsers () {
  const [users,setUsers]=useState([]);
  // useEffect(()=>{},[]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);
  return (
    <div>
      <h2>External Users</h2>
      <p>Total {users.length} users</p>
      {/* {
        users.map(user => <li>{user.name}</li>)
      } */}

      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
return (
  <div style={{border:"2px solid red",margin:"10px" }}>
    <h1>Name: {props.name}</h1>
    <p>Email : {props.email}</p>
  </div>
)
}
export default App;
