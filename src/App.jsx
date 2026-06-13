import {useState, useEffect} from 'react'
import AddNote from './components/AddNote.jsx'
import AddTask from './components/AddTask.jsx'
import AddGoal from './components/AddGoal.jsx'
import NotesPage from './components/NotesPage.jsx'
import TasksPage from './components/TasksPage.jsx'
import GoalsPage from './components/GoalsPage.jsx'

import './App.css'
function App(){

  const [user,setUser]= useState('');
 

  const [notes,newnotes]=useState([]);

  const [currId,setId]=useState('');
  const [currText, setText]=useState('');

  const [tasks,newTasks]=useState([]);
  const[currTaskId,setTaskId]=useState('');
  const[currTaskText,setTaskText]=useState('');

  const [goals,newGoals]=useState([]);
  
  const [currGoalId,setGoalId]=useState('');
  const [currGoalProgress,setGoalProgress]=useState('');
  const [currEditGoalId,setEditGoalId]=useState('');
  const [currGoalText,setGoalText]=useState('');
  const [currGoalTarget,setGoalTarget]=useState('');

  const [viewState, setViewState]=useState('dashboard');

  

  

  useEffect(()=>{
    const savedNotes = localStorage.getItem("notes");
    const savedTasks= localStorage.getItem("tasks");
   const savedGoals= localStorage.getItem("goals");
    if(savedNotes!==null){
      newnotes(JSON.parse(savedNotes))
    }
    if(savedTasks!==null){
      newTasks(JSON.parse(savedTasks));
    }
    if(savedGoals!==null){
      newGoals(JSON.parse(savedGoals));
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
   function handleToggleStatus(id){
    const updated_tasks= tasks.map(task=>
      task.id=== id ? {id: task.id ,text: task.text, completed: !task.completed}
      :
      {id: task.id, text: task.text, completed: task.completed}
    

    )
    newTasks(updated_tasks);
    localStorage.setItem("tasks", JSON.stringify(updated_tasks));

   }

   function delTask(id){
    const updated_tasks= tasks.filter(task=> 
     task.id !== id
    )
    newTasks(updated_tasks);
    localStorage.setItem("tasks", JSON.stringify(updated_tasks));
   }

   function editTask(task){
    setTaskId(task.id);
    setTaskText(task.text);

   }
   function changeTaskText(text){
    setTaskText(text);
   }
   function saveEditTask(task){
    const updated_tasks= tasks.map(task=>
      task.id=== currTaskId ? {id: task.id, text: currTaskText, completed: task.completed}
      :
      {id: task.id, text: task.text, completed: task.completed}
    )
    newTasks(updated_tasks);
    localStorage.setItem("tasks",JSON.stringify(updated_tasks));
    setTaskId('');
    

   }
   function cancelEditTask(task){
    setTaskId('');
    setTaskText('');

   }

   function handleAddGoal(goal){
    const updated_goals= [...goals,goal];
    newGoals(updated_goals);
    localStorage.setItem("goals",JSON.stringify(updated_goals));

   }
   function addProgress(goal){
    setGoalId(goal.id);
    setGoalProgress(goal.current);

   }
   function saveProgress(){
    const updated_goals= goals.map(goal=>
      goal.id===currGoalId ?
      
      {id: currGoalId, text:goal.text, target: goal.target,
         current:Number(currGoalProgress) > goal.target ? goal.target : Number(currGoalProgress)}
      :
      goal
    )

    newGoals(updated_goals);
    localStorage.setItem("goals",JSON.stringify(updated_goals));
    setGoalId('');
    setGoalProgress('');

   }
   function handleNewProgress(progress){
    setGoalProgress(progress);

   }
   function cancelAddProgress(){
    setGoalId('')
    setGoalProgress('');
   }
   function delGoal(id){
    const updated_goals= goals.filter(goal=> goal.id!=id);
    newGoals(updated_goals);
    localStorage.setItem("goals",JSON.stringify(updated_goals));

   }
   function editGoal(goal){
    setEditGoalId(goal.id);
    setGoalText(goal.text);
    setGoalTarget(goal.target);
   }
   function changeGoalText(text){
    setGoalText(text);
   }
   function changeGoalTarget(target){
    setGoalTarget(target);

   }
   function saveEditGoal(){
    const updated_goals= goals.map(goal=>
      goal.id===currEditGoalId ?
      {id: goal.id, text: currGoalText, target: Number(currGoalTarget), current: Number(goal.current)> Number(currGoalTarget) ? Number(currGoalTarget) : goal.current}
      :
      goal
    )
    newGoals(updated_goals);
    localStorage.setItem("goals",JSON.stringify(updated_goals));
    setEditGoalId('')
    setGoalText('')
    setGoalTarget('')

   }
   function cancelEditGoal(){
    setEditGoalId('');
    setGoalText('');
    setGoalTarget('')
   }
   function goBack(){
    setViewState('dashboard');
   }
  

  
  return (
    <div className="app">
      <h1>FocusHub</h1>
    <div>
      Display Name:
     <input 
      onChange={(e)=> setUser(e.target.value)}
     />
    </div>
    {viewState==='dashboard' && (
      <>
       {user ? <h3>Hello {user}!</h3> : null}
      <div className="card-container">
     
        <div className="card" onClick={()=>setViewState('notes')}>
         <h2>Notes</h2>
          <p>Total:{notes.length}</p>
        </div>

        <div className="card" onClick={()=>setViewState('tasks')}>
          <h2>Tasks</h2>
          <p>Total: {tasks.length}</p> 
          <p> Pending: {tasks.filter(task => task.completed==false).length} </p>
        </div>

        <div className="card" onClick={()=>setViewState('goals')}>
          <h2>Goals</h2>
          <p>Total: {goals.length}</p> 
          <p> Active: {goals.filter(goal => goal.current<goal.target).length} </p>

        </div>
      
      </div>
      </>
    )}
    {viewState==='notes' && (
      <>
      {user ? <h3>Hello {user}!</h3> : null}
      <NotesPage
      goBack= {goBack}
      user= {user}
      notes={notes}
      del ={handleDel}
      edit={handleEdit}
      currId= {currId}
      currText= {currText}
      changeText= {handleTextChange}
      save= {handleSave}
      cancel={handleCancel}
      
      />
       <AddNote add={handleClick}/>
       </>
    )}
    {viewState==='tasks' && (
      <>
      {user ? <h3>Hello {user}!</h3> : null}
      <TasksPage
      goBack= {goBack}
      tasks={tasks}
      toggleStatus ={handleToggleStatus}
      delTask= {delTask}
      editTask= {editTask}
      currTaskId={currTaskId}
      currTaskText ={currTaskText}
      saveEditTask= {saveEditTask}
      changeTaskText ={changeTaskText}
      cancelEditTask ={cancelEditTask}
    
      />
       <AddTask add={handleAddTask}/>
      </>
    )}
    {viewState==='goals' && (
      <>
      {user ? <h3>Hello {user}!</h3> : null}
      <GoalsPage
        goBack={goBack}
        goals={goals}
        currGoalProgress={currGoalProgress}
        addProgress ={addProgress}
        currGoalId ={currGoalId}
        saveProgress= {saveProgress}
        newProgress={handleNewProgress}
        cancelAddProgress={cancelAddProgress}
        delGoal={delGoal}
        editGoal={editGoal}
        currEditGoalId={currEditGoalId}
        changeGoalText={changeGoalText}
        currGoalText={currGoalText}
        currGoalTarget={currGoalTarget}
        changeGoalTarget ={changeGoalTarget}
        saveEditGoal ={saveEditGoal}
        cancelEditGoal={cancelEditGoal}
      />
       <AddGoal add={handleAddGoal}/>
      </>
    )}
    </div>
    

  )
}

export default App
