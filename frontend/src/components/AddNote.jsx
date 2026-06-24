import {useState} from 'react'


function AddNote({add}){
    const [currval, setval]= useState('');
    const[isAdding,setIsAdding]= useState(false);

    if(isAdding){
        return(
            <div>
                <textarea
                value={currval}
                onChange={(e)=> setval(e.target.value)}
                />
                
                <button className="button" onClick= {()=> {
                    if(currval.trim()===''){
                        return;
                    }
                    add({text: currval});
                    setval('');
                    setIsAdding(false);

                }}>Add</button>
                <button className="button" onClick={()=> {
                    setIsAdding(false);
                    setval('');
                }
                }>Cancel</button>
                

            </div>
            
        
        )
    }
    else{
        return(
            <div>
        <button className="button" onClick={()=> setIsAdding(true)}>+ New Note</button>
        </div>
        )
    }

}

export default AddNote;