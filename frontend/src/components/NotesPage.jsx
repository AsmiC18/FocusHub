import { FaTrash, FaEdit, FaRegStickyNote } from "react-icons/fa";
function NotesPage({goBack,user,notes,del,edit,currId,currText,changeText,save,cancel}){
    return(
        <>
            {notes.length!=0 ? (
                                <>
                                    <div className="inner-heading">
                                    <h3> Notes</h3>
                                    </div>
        
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
                                    <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
                                </>
                                )
                
                                : (
                                <>
                                <h3>No notes yet.</h3>
                                <button className="button" onClick={()=> goBack()}>Back to Dashboard</button>
                                </>
                                )
                        
                            }
        </>
    )

}
export default NotesPage;