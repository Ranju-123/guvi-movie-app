import logo from './logo.svg';
import './App.css';

function App() {
  const names=["Nihasini","Mayuri","Nuthan","Kathyahini"];
  const students=[{
    name:"NirviVijay",
     pic:"https://www.bing.com/th?id=OIP.qbkfsNc_YEfMtW4UsBAkngHaIJ&w=150&h=165&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"

  },
  {
     name:"Manasvisumanth",
      pic:"https://www.bing.com/th?id=OIP.BYlUhGXWlMNsV1FFUisMFAHaH7&w=150&h=161&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
  },
  {
name:"Hema",
 pic:"https://th.bing.com/th/id/OIP.5e35Ud8J0pkczmoEL7Bd1wHaFj?w=259&h=194&c=7&r=0&o=5&pid=1.7"
  }
];
  
  return (
    <div className="App">
      {/*
      <Message name="NirviVijay" pic="https://www.bing.com/th?id=OIP.qbkfsNc_YEfMtW4UsBAkngHaIJ&w=150&h=165&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
      <Message name="Manasvisumanth" pic="https://www.bing.com/th?id=OIP.BYlUhGXWlMNsV1FFUisMFAHaH7&w=150&h=161&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
  <Message name="Family" pic="https://th.bing.com/th/id/OIP.5e35Ud8J0pkczmoEL7Bd1wHaFj?w=259&h=194&c=7&r=0&o=5&pid=1.7"/> */}
{/*<Welcome name="Nihasini"/>
<Welcome name="Mayuri"/>
<Welcome name="Nuthan"/>*/}
{/*component +Loop*/}
{students.map(
  (student)=>(<Message name={student.name} pic={student.pic} />)
  )}

{/* {names.map((nm)=> (
<Welcome name={nm} />
  ))} */}
    </div>
  );
}

export default App;
function Welcome(props) {
  
  return(
    <div>
   
  <h1>Hello,{props.name} </h1>
  </div>
  );
 
}

function Message(props) {
  //const name=props.name;
  
  return(
    <div>
    <img className="profile-pic" src={props.pic} alt={props.name}/> 
  <h1>Hello,{props.name}</h1>
  </div>
  );
 
}
