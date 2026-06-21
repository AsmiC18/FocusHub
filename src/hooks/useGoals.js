import {useState,useEffect} from 'react'
import useLocalStorage from './useLocalStorage.js';
function useGoals(){
    const [goals,newGoals]=useState([]);

    const [currGoalId,setGoalId]=useState('');
    const [currGoalProgress,setGoalProgress]=useState('');

    const [currEditGoalId,setEditGoalId]=useState('');
    const [currGoalText,setGoalText]=useState('');
    const [currGoalTarget,setGoalTarget]=useState('');

    useEffect(()=>{
      async function loadGoals(){
          const response = await fetch('http://localhost:3000/goals',{
            method: "GET"
          })
          const info = await response.json();
          newGoals(info);

      }
      loadGoals();
    },[]);

async function handleAddGoal(goal){
  
    const response= await fetch('http://localhost:3000/goals',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goal)
    })
    const info= await response.json();
    newGoals(info);


   }
   function addProgress(goal){
    setGoalId(goal.id);
    setGoalProgress(goal.current);

   }
   
   async function saveProgress(){

    const response = await fetch(`http://localhost:3000/goals/progress/${currGoalId}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        current: currGoalProgress
      })
    })
    const info= await response.json();
    newGoals(info);
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
   async function delGoal(id){
    
    const response = await fetch(`http://localhost:3000/goals/${id}`,{
      method: 'DELETE',
    })
    const info= await response.json();
    newGoals(info);
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
   async function saveEditGoal(){

    const response = await fetch(`http://localhost:3000/goals/edit/${currEditGoalId}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: currGoalText,
        target: currGoalTarget
      })
    })
    const info= await response.json();
    newGoals(info);

    setEditGoalId('')
    setGoalText('')
    setGoalTarget('')

   }
   function cancelEditGoal(){
    setEditGoalId('');
    setGoalText('');
    setGoalTarget('')
   }

   return {
    goals,currGoalId, currGoalProgress, currEditGoalId,currGoalText,currGoalTarget,
    handleAddGoal,addProgress,saveProgress,handleNewProgress,cancelAddProgress,delGoal,editGoal,
    changeGoalText,changeGoalTarget,saveEditGoal,cancelEditGoal
   }

}
export default useGoals;