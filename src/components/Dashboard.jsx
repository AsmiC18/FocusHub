
function Dashboard({user,notes}){
    return(
        <div>
            <h1> Dashboard </h1>
            <h3> Welcome to FocusHub, {user}!</h3>
            <h3>Notes</h3>

            {notes.map(note => <li>{note}</li>)}
        </div>
    )
}
export default Dashboard;