import Dashboard from './components/Dashboard.jsx'
import {useState, useEffect} from 'react'
import AddNote from './components/AddNote.jsx'
import AddTask from './components/AddTask.jsx'
import './App.css'
function App(){

  const [name,setName]= useState('');
 

  const [notes,newnotes]=useState([]);

  const [currId,setId]=useState('');
  const [currText, setText]=useState('');

  const [tasks,newTasks]=useState([]);

  

  useEffect(()=>{
    const savedNotes = localStorage.getItem("notes");
    const savedTasks= localStorage.getItem("tasks");
    if(savedNotes!==null){
      newnotes(JSON.parse(savedNotes))
    }
    if(savedTasks!==null){
      newTasks(JSON.parse(savedTasks));
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

   function handleEdit(note){
    setId(note.id);
    setText(note.text); 
   }
   
   function handleTextChange(text){
    setText(text);
   }
   function handleSave(){
    console.log("saving")
    const updated_notes= notes.map(note=> 
       note.id === currId? { id: note.id, text: currText}
       : {id: note.id, text: note.text}
    )

    
    newnotes(updated_notes);
    localStorage.setItem("notes", JSON.stringify(updated_notes));
    setId('')
    

   }

   function handleCancel(){
    setId('');
    setText('');

   }
   function handleAddTask(Task){
    const updated_tasks= [...tasks,Task];
    newTasks(updated_tasks);
    localStorage.setItem("tasks",JSON.stringify(updated_tasks))

   }
  
  
  return (
    <div className="app">
      <h1>FocusHub</h1>
    <div>
      Display Name:
     <input 
      onChange={(e)=> setName(e.target.value)}
     />
    </div>

     <Dashboard
      user= {name} 
      notes={notes} 
      del={handleDel} 
      edit={handleEdit}
      currId={currId}
      currText={currText}
      changeText={handleTextChange}
      save={handleSave}
      cancel={handleCancel}
      tasks={tasks}
      />
     <AddNote add={handleClick}/>
     <AddTask add={handleAddTask}/>

     
     

    </div>
    

  )
}

export default App
