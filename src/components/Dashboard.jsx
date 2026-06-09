import { FaTrash, FaEdit } from "react-icons/fa";

function Dashboard({user,notes,del,edit,currId,currText,changeText,save,cancel,tasks}){
  
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
                   <li className="taskcard"key= {task.id}>
                    
                        <input type="checkbox"/>
                    {task.text}
                        
                    </li>
                    )}
                   
                  
                    </>
                )
            
            }

            
        


            
        </div>
    )
    
}
    

export default Dashboard;