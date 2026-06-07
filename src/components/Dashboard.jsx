
function Dashboard({user,notes,del,edit,currId,currText,changeText,save}){
    return(
        <div>
            <h1> Dashboard </h1>
            <h3> Welcome to FocusHub, {user}!</h3>
            <h3>Notes</h3>

            {notes.map(
                note => <li
                 key={note.id}>
                    {note.id===currId ?
                    <div>
                        <input
                        value={currText}
                        onChange= {(e)=> changeText(e.target.value)} 
                        />
                        <button onClick= {()=> save()}> Save</button>
                    </div>
                    : note.text
                    
                 } <button onClick= {()=> {del(note.id)}}>Delete</button> <button onClick= {()=> {edit(note)}}> Edit</button></li>)}

            
        </div>
    )
}
export default Dashboard;