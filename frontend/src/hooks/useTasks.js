import {useState,useEffect} from 'react'
import useLocalStorage from './useLocalStorage.js'

function useTasks(){

  const [tasks,newTasks]= useState([]);
  const[currTaskId,setTaskId]=useState('');
  const[currTaskText,setTaskText]=useState('');

  useEffect(()=>{
   async function loadTasks(){
    const response = await fetch('http://localhost:3000/tasks');

    const info= await response.json();
    newTasks(info);

  }
  loadTasks();
},[]);



  
   async function handleAddTask(Task){
    const updated_tasks= [...tasks,Task];
    newTasks(updated_tasks);

    const response= await fetch('http://localhost:3000/tasks',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Task)
    })
    const info = await response.json();

    newTasks(info);

   }
   async function handleToggleStatus(id){

    const response = await fetch(`http://localhost:3000/tasks/status/${id}`,{
      method: 'PUT'
    });
    const info= await response.json();

    newTasks(info);

 

   }

   async function delTask(id){

    const response = await fetch(`http://localhost:3000/tasks/${id}`,{
      method: 'DELETE'

    })
    const info= await response.json();

    newTasks(info);
   }

   function editTask(task){
    setTaskId(task.id);
    setTaskText(task.text);

   }
   function changeTaskText(text){
    setTaskText(text);
   }
   async function saveEditTask(task){

    const response = await fetch(`http://localhost:3000/tasks/edit/${currTaskId}`,{
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: currTaskText
      })
    })
    const info= await response.json();
    newTasks(info);
    setTaskId('');
    

   }
   function cancelEditTask(task){
    setTaskId('');
    setTaskText('');

   }

   return {
    tasks,currTaskId, currTaskText, handleAddTask , handleToggleStatus,delTask,editTask,changeTaskText , saveEditTask,cancelEditTask
   };
}
export default useTasks;