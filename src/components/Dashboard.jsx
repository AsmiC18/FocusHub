import { FaTrash, FaEdit } from "react-icons/fa";

function Dashboard({user,notes,del,edit,currId,currText,changeText,save,cancel,
    tasks,toggleStatus,delTask,editTask, currTaskId,currTaskText,saveEditTask,changeTaskText,cancelEditTask,
    goals,currGoalProgress,addProgress,currGoalId,saveProgress,newProgress,cancelAddProgress,delGoal,editGoal,
    currEditGoalId,changeGoalText,currGoalText,currGoalTarget,changeGoalTarget,saveEditGoal,cancelEditGoal}){
  
    return(
        <div className="dashboard">
            <h1> Dashboard </h1>
            {user ? <h3>Hello {user}!</h3> : null}

            {notes.length!=0 ? (
                <>
                <h3> Notes</h3>

                {notes.map(
                    note =>
                        <div className="notecard"
                    key={note.id}>
                        {note.id===currId ?
                        <div>
                            <input
                            value={currText}
                            onChange= {(e)=> changeText(e.target.value)} 
                            />
                            <button onClick= {()=> save()}> Save</button>
                            <button onClick={()=>cancel()}>Cancel</button>
                        </div>
                        : 
                        <>
                        {note.text}
                        
                    
                        <div className="icon">
                            <button onClick= {()=> {del(note.id)}}><FaTrash/></button>
                            <button onClick= {()=> {edit(note)}}> <FaEdit/></button>
                        </div>
                        </>
                    }
                    </div>)
                }
                </>
            )

                : (
                <>
                  <h3>No notes yet.</h3>
                </>
                )
            }

            {tasks.length==0 ? (
                <>
                <h3>No tasks yet</h3>
                </>
            )
                : (
                    <>
                    <h3>Tasks</h3>
                    
                   { tasks.map(task=>
                    
                    <div className="taskcard"
                    key= {task.id}>
                        
                    {
                        task.id==currTaskId ? 
                        <div>
                            <input 
                            value={currTaskText}
                            onChange= {(e)=> changeTaskText(e.target.value)}
                            />
                            <button onClick={()=> saveEditTask()}>Save</button>
                            <button onClick={()=> cancelEditTask()}>Cancel</button>

                        </div>
                        :
                        <>

                        <div>
                        <input type="checkbox" 
                        checked={task.completed}
                        onChange={()=>toggleStatus(task.id)}/>
                        {task.text}
                        </div>
    

                        

                        <div className="icon">
                            <button onClick={()=> delTask(task.id)}><FaTrash/></button>
                            <button onClick={()=> editTask(task)}><FaEdit/></button>
                        </div>
                        </>
                    }
                        
    
                    
                        
                    </div>
                    )}
                   
                  
                    </>
                )
            
            }

            {goals.length==0 ? (
                <h3>No Goals yet</h3>

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
                            <p>Progress: {
                                goal.target> 0 ? (Math.round((goal.current / goal.target) *100))
                                : 
                                0
                            }%</p>
                                
                            

                            <div className="goalbuttons">
                            <button onClick={()=>addProgress(goal)}>Add Progress</button>
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
             </>  
                
            )

            }

            
        


            
        </div>
    )
    
}
    

export default Dashboard;