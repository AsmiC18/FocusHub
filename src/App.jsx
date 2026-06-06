import Dashboard from './components/Dashboard.jsx'
import {useState} from 'react'
import AddNote from './components/AddNote.jsx'
function App(){
  const [name,setName]= useState('');
  const[notes,newnotes]=useState([]);
  function HandleClick(currval){
    newnotes([...notes,currval]);
  
  
  }
    console.log(notes)
  return (
    <div>
      <h1>FocusHub</h1>
    
     <input onChange={(e)=> setName(e.target.value)}/>

     <Dashboard user= {name} notes={notes}/>
     <AddNote add={HandleClick}/>
     

    </div>
    

  )
}

export default App
