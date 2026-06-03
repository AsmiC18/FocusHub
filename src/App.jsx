import Dashboard from './components/Dashboard.jsx'
import {useState} from 'react'
function App(){
  const [name,setName]= useState('');
  return (
    <div>
      <h1>FocusHub</h1>
    
     <input onChange={(e)=> setName(e.target.value)}/>

     <Dashboard user= {name}/>
    </div>
    

  )
}
export default App