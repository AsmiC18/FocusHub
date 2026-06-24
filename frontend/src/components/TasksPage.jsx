import { FaTrash, FaEdit, FaRegCheckSquare } from "react-icons/fa";
function TasksPage({goBack,tasks,toggleStatus,delTask,editTask, currTaskId,currTaskText,saveEditTask,changeTaskText,cancelEditTask}){
    return(
         tasks.length==0 ? (
                <>
                <h3>No tasks yet</h3>
                <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
                </>
            )
                : (
                    <>
                        <h3>Tasks</h3>
                        
                    { tasks.map(task=>
                        
                        <div className="taskcard"
                        key= {task._id}>
                            
                        {
                            task._id==currTaskId ? 
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
                                    onChange={()=>toggleStatus(task._id)}/>
                                    {task.text}
                                </div>   

                                <div className="icon">
                                    <button onClick={()=> delTask(task._id)}><FaTrash/></button>
                                    <button onClick={()=> editTask(task)}><FaEdit/></button>
                                </div>
                            </>
                        }
                            
        
                        
                            
                        </div>
                        )}
                   
                   <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
                    </>
                )
    )

}
export default TasksPage;