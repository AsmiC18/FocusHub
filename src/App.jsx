import Dashboard from './components/Dashboard.jsx'
import {useState} from 'react'
import AddNote from './components/AddNote.jsx'
function App(){
  const [name,setName]= useState('');

  const[notes,newnotes]=useState([]);

  function handleClick(note){
    newnotes([...notes,note]);
  
  
  }
    console.log(notes);

   function handleDel(id){
    newnotes(notes.filter((note)=> note.id !== id))


   } 
  return (
    <div>
      <h1>FocusHub</h1>
    
     <input onChange={(e)=> setName(e.target.value)}/>

     <Dashboard user= {name} notes={notes} del={handleDel}/>
     <AddNote add={handleClick}/>
     

    </div>
    

  )
}

export default App
