import {useState} from 'react';

function AddTask({add}){
    const [currTask,setTask]=useState('');
    const [isAddingTask,setIsAddingTask]= useState(false)
    if(isAddingTask){
        return(
            <div>
                <input
                value= {currTask}
                onChange= {(e)=> setTask(e.target.value)}  
                />
                <button className="button" onClick={()=>{
                    add({
                        id: Date.now(),
                        text: currTask,
                        completed: false
                    })
                setIsAddingTask(false);
                setTask('');
                }                
                }>Add</button>
                <button className="button" onClick={()=>setIsAddingTask(false)}> Cancel</button>

               

            </div>

        )
    }
    else{
        return(
            <div>
                <button className="button" onClick={()=> setIsAddingTask(true)}>+ New Task</button>
            </div>
        )
    }

}
export default AddTask;