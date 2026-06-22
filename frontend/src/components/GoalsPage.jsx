import {FaTrash,FaEdit, FaTrophy} from 'react-icons/fa'
function GoalsPage({goBack,goals,currGoalProgress,addProgress,currGoalId,saveProgress,newProgress,cancelAddProgress,delGoal,editGoal,
    currEditGoalId,changeGoalText,currGoalText,currGoalTarget,changeGoalTarget,saveEditGoal,cancelEditGoal}){
        return(
    goals.length==0 ? (
                <>
                <h3>No Goals yet</h3>
                <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
                </>

            )
            :
            (
            <>
                 <h3>Goals</h3>
                  {goals.map(goal=>

                    <div className='goalcard' 
                    key={goal.id}>
                        {goal.id==currGoalId ? 
                        (
                            <>
                            <p>{goal.text} | Target: {goal.target} | Current: {goal.current}</p>
                            <input 
                            type= "number"
                            value={currGoalProgress}
                            onChange= {(e)=> newProgress(e.target.value)}
                            />
                            <button onClick={()=>saveProgress()}>Save</button>
                            <button onClick={()=>cancelAddProgress()}>Cancel</button>

                            </>
                        )
                        : goal.id== currEditGoalId ? (
                            <>
                            <input 
                            value={currGoalText}
                            onChange={(e)=>changeGoalText(e.target.value)}
                            />
                            <input
                            type="number"
                            value= {currGoalTarget}
                            onChange={(e)=>changeGoalTarget(e.target.value)}
                            />
                            <button onClick={()=>saveEditGoal()}>Save</button>
                            <button onClick={()=>cancelEditGoal()}>Cancel</button>

                            

                            </>
                        )
                        
                        :
                        <>
                            <p>{goal.text} | Target: {goal.target} | Current: {goal.current}</p>
                            <div className="progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style ={{width: `${Math.round((goal.current / goal.target) *100)}%`} }>

                                </div>
                            </div>
                            <div className="progress-val">
                            {      
                                goal.target> 0 ? (Math.round((goal.current / goal.target) *100))
                                : 
                                0
                            }%
                    
                            </div>
                            </div>
                           
                                
                            

                            <div className="goalbuttons">
                            <button className="inner-buttons" onClick={()=>addProgress(goal)}>Add Progress</button>
                            <div className="icon">
                            <button onClick={()=>delGoal(goal.id)}><FaTrash/></button>
                            <button onClick={()=>editGoal(goal)}><FaEdit/></button>
                            </div>
                            </div>
               


            </>
                        }

                  

                    </div>
                    )
                }
                 <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
            
             </>  
                
            )
        )

}
export default GoalsPage;