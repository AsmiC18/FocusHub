import {useState} from 'react'

const BASE_URL= import.meta.env.VITE_API_URL; 

function Register(){
    const [currEmail,setEmail] = useState('');
    const [currPass,setPass]= useState('');
     

    async function handleSubmit(e){
        e.preventDefault();
        const response= await fetch(`${BASE_URL}/register`,{
            method: 'POST',
            headers:{
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                email: currEmail,
                password: currPass
                }
            )
        });
        const info=await response.json()
        console.log(info);


    }
        
    return(
        <div>
            <form onSubmit={handleSubmit}>
                Email:
                <input
                value={currEmail} onChange={(e)=> setEmail(e.target.value)}/>
                <br/><br/>
               

                Password:
                <input 
                value={currPass} onChange={(e)=> setPass(e.target.value)}/>
                <br/><br/>
                <button className= "button">Register</button>
               
            </form>
        </div>

    )

}
export default Register;