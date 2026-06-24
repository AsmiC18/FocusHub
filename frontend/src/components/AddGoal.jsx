import {useState} from 'react'

function AddGoal({add}){
    const [currGoalText,setGoalText]=useState('');
    const [currTarget, setTarget]=useState('');
    const [isAdding,setIsAdding]=useState(false);


    if(isAdding){
    return(
        <div>
            <p>
            Goal title:
            <input 
            value={currGoalText}
            onChange={(e)=>setGoalText(e.target.value)}
            />
            </p>
            
            <p>Target:
            <input
            value={currTarget}
            onChange={(e)=>setTarget(e.target.value)}
            />
            </p>
            <button className="button" onClick={()=>{add({
                text: currGoalText,
                target: Number(currTarget),
                current: 0
            }      
            )
            setGoalText('');
            setTarget('');
            setIsAdding(false);

            }
            }
            >Add</button>
            <button className="button" onClick={()=>
            {
                setIsAdding(false)
                setTarget('');
                setGoalText('');

                }
            }>Cancel</button>
            

        </div>
    )
    }
    else{
        return(
            <button className="button" onClick={()=> setIsAdding(true)}>+ New Goal</button>
        )
    }
}
export default AddGoal;
