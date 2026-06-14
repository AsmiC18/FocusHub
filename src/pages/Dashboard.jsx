import {useNavigate} from 'react-router-dom'
import {FaRegStickyNote,FaRegCheckSquare, FaTrophy} from 'react-icons/fa';

import useNotes from '../hooks/useNotes.js';
import useGoals from '../hooks/useGoals.js';
import useTasks from '../hooks/useTasks.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

function Dashboard(){
    const {notes}= useNotes();
    const {tasks}= useTasks();
    const {goals}=useGoals();
    const navigate= useNavigate();
    return(
     <>
       
      <div className="card-container">
     
        <div className="card" onClick={()=>navigate('/notes')}>
         <div style={{color:'purple'}}><FaRegStickyNote size={32}/></div>
         <h2>Notes</h2>
         Total:{notes.length}
        </div>

        <div className="card" onClick={()=>navigate('/tasks')}>
          <div style={{color:'green'} }><FaRegCheckSquare size={32}/></div>
          <h2>Tasks</h2>
          Total: {tasks.length}<br/>
          Pending: {tasks.filter(task => task.completed==false).length} 
        </div>

        <div className="card" onClick={()=>navigate('/goals')}>
          <div style={{color:'goldenrod'}}><FaTrophy size={32}/></div>
          <h2>Goals</h2>
          Total: {goals.length}<br/>
          Active: {goals.filter(goal => goal.current<goal.target).length} 

        </div>
      
      </div>
    
      <div className="recents">
        <h3>Recents:</h3>
        <div className="recent-box">
          <h4>Notes</h4>
        { notes.slice(-2).reverse().map(
          note => 
            <li key={note.id}>{note.text}</li>
          )
        }
        </div>
        <div className="recent-box">
          <h4>Tasks</h4>
        { tasks.slice(-2).reverse().map(
          task => 
            
            <li key={task.id} style={{background: `${task.completed ? 'green' : 'beige'}`}}>{task.text}</li>
          )
        }
        </div>
         <div className="recent-box">
          <h4>Goals</h4>
        { goals.slice(-2).reverse().map(
          goal => 
            
            <li key={goal.id}style={{background: `${goal.current<goal.target ? 'beige' : 'green'}`}}>{goal.text}</li>
          )
        }
        </div>
      </div>

      

      </>
    )
}
export default Dashboard;