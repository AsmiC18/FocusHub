import AddGoal from '../components/AddGoal.jsx'
import GoalsPage from '../components/GoalsPage.jsx'
import useGoals from '../hooks/useGoals.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
function Goals({goBack}){

  const {goals,currGoalId, currGoalProgress, currEditGoalId,currGoalText,currGoalTarget,
    handleAddGoal,addProgress,saveProgress,handleNewProgress,cancelAddProgress,delGoal,editGoal,
    changeGoalText,changeGoalTarget,saveEditGoal,cancelEditGoal}= useGoals();
    return(
        <>
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
    )
}
export default Goals;