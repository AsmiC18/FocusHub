import { FaTrash, FaEdit } from "react-icons/fa";

function Dashboard({user,notes,del,edit,currId,currText,changeText,save,cancel}){
    if(notes.length>0){
    return(
        <div className="dashboard">
            <h1> Dashboard </h1>
            {user ? <h3>Hello {user}!</h3> : null}
            <h3> Notes</h3>

            {notes.map(
                note =>
                    <li className="notes"
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
                 </li>)}

            
        </div>
    )
    }
    else{
        return (
              <div className="dashboard">
            <h1> Dashboard </h1>
            {user ? <h3>Hello {user}!</h3> : null}
            <p>No notes yet</p>
            </div>
        )
    }
}
export default Dashboard;