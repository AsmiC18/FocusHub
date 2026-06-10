import { FaTrash, FaEdit } from "react-icons/fa";

function Dashboard({user,notes,del,edit,currId,currText,changeText,save,cancel,tasks,toggleStatus,delTask,editTask,
    currTaskId,currTaskText,saveEditTask,changeTaskText,cancelEditTask}){
  
    return(
        <div className="dashboard">
            <h1> Dashboard </h1>
            {user ? <h3>Hello {user}!</h3> : null}

            {notes.length!=0 ? (
                <>
                <h3> Notes</h3>

                {notes.map(
                    note =>
                        <li className="notecard"
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
                    </li>)
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
                    
                    <li className="taskcard"
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
                        
    
                    
                        
                    </li>
                    )}
                   
                  
                    </>
                )
            
            }

            
        


            
        </div>
    )
    
}
    

export default Dashboard;