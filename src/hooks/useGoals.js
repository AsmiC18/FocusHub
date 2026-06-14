import {useState} from 'react'
import useLocalStorage from './useLocalStorage.js';
function useGoals(){
     const [goals,newGoals]=useLocalStorage("goals",[]);
  
    const [currGoalId,setGoalId]=useState('');
    const [currGoalProgress,setGoalProgress]=useState('');
    const [currEditGoalId,setEditGoalId]=useState('');
    const [currGoalText,setGoalText]=useState('');
    const [currGoalTarget,setGoalTarget]=useState('');
function handleAddGoal(goal){

    const updated_goals= [...goals,goal];
    newGoals(updated_goals);

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