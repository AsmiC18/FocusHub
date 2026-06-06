import Dashboard from './components/Dashboard.jsx'
import {useState, useEffect} from 'react'
import AddNote from './components/AddNote.jsx'
function App(){

  const [name,setName]= useState('');

  const[notes,newnotes]=useState([]);

  useEffect(()=>{
    const savedNotes = localStorage.getItem("notes");
    if(savedNotes!==null){
      newnotes(JSON.parse(savedNotes))
    }

    
  },[])

  function handleClick(note){
    const updated_notes= ([...notes,note]);
    newnotes(updated_notes)
    localStorage.setItem("notes", JSON.stringify(updated_notes));
   
  
  
  }
  
    console.log(notes);

   function handleDel(id){
    const updated_notes= (notes.filter((note)=> note.id !== id));
    newnotes(updated_notes);
     localStorage.setItem("notes", JSON.stringify(updated_notes));
    

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
