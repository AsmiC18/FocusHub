import {useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'


import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

import useNotes from './hooks/useNotes.js';
import useTasks from './hooks/useTasks.js';
import useGoals from './hooks/useGoals.js';

import Notes from './pages/Notes.jsx';
import Tasks from './pages/Tasks.jsx';
import Goals from './pages/Goals.jsx';
import Dashboard from './pages/Dashboard.jsx';

import AddNote from './components/AddNote.jsx'
import AddTask from './components/AddTask.jsx'
import AddGoal from './components/AddGoal.jsx'
import NotesPage from './components/NotesPage.jsx'
import TasksPage from './components/TasksPage.jsx'
import GoalsPage from './components/GoalsPage.jsx'

import {FaRegStickyNote,FaRegCheckSquare, FaTrophy} from 'react-icons/fa'

import './App.css'
function App(){
  const navigate=useNavigate();

  const [user,setUser]= useState('');
  
   function goBack(){
    navigate('/');
   }

  return (
    <>
     <div className="header">
        <h1>FocusHub</h1>
        <div>
          Display Name:
        <input 
          onChange={(e)=> setUser(e.target.value)}
        />
         </div>
        {user ? <h3>Hello {user}!</h3> : null}
       
    </div>
    <div className="app">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/notes' element={<Notes goBack={goBack}/>}/>
        <Route path='/tasks' element={<Tasks goBack={goBack}/>}/>
        <Route path= '/goals' element={<Goals goBack={goBack}/>}/>
      </Routes>
    </div>
    </>

  )
}

export default App
