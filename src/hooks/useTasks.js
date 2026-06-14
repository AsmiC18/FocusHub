import {useState} from 'react'
import useLocalStorage from './useLocalStorage.js'

function useTasks(){

  const [tasks,newTasks]=useLocalStorage("tasks",[]);
  const[currTaskId,setTaskId]=useState('');
  const[currTaskText,setTaskText]=useState('');

  
   function handleAddTask(Task){
    const updated_tasks= [...tasks,Task];
    newTasks(updated_tasks);
  

   }
   function handleToggleStatus(id){
    const updated_tasks= tasks.map(task=>
      task.id=== id ? {id: task.id ,text: task.text, completed: !task.completed}
      :
      {id: task.id, text: task.text, completed: task.completed}
    

    )
    newTasks(updated_tasks);
 

   }

   function delTask(id){
    const updated_tasks= tasks.filter(task=> 
     task.id !== id
    )
    newTasks(updated_tasks);
  
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