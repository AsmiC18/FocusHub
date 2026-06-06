
function Dashboard({user,notes,del}){
    return(
        <div>
            <h1> Dashboard </h1>
            <h3> Welcome to FocusHub, {user}!</h3>
            <h3>Notes</h3>

            {notes.map(note => <li key={note.id}>{note.text} <button onClick= {()=> {del(note.id)}}>Delete</button></li>)}

            
        </div>
    )
}
export default Dashboard;