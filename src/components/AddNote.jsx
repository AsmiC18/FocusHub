import {useState} from 'react'
function AddNote({add}){
    const [currval, setval]= useState('');

    return(
        <div>
            <input 
            value={currval}
            onChange={(e)=> setval(e.target.value)}/>

            <button onClick= {()=> {
                add({id: Date.now(), text: currval});
                setval('');

            }}>Add</button>
        </div>
        
    
    )

}

export default AddNote;