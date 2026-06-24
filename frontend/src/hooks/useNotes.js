import {useState, useEffect} from 'react';


const BASE_URL= import.meta.env.VITE_API_URL

function useNotes(){

  const [notes,newnotes]=useState([]);

  const [currId,setId]=useState('');
  const [currText, setText]=useState('');


   useEffect(()=>{
    async function loadNotes(){
    const response= await fetch(`${BASE_URL}/notes`);
    const info= await response.json();
    newnotes(info);
    }
    loadNotes();
  },[]);
  async function handleClick(note){

    const response = await fetch(`${BASE_URL}/notes`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    const info = await response.json();
    newnotes(info);
  
  }

  async function handleDel(id){
    
    const response = await fetch(`${BASE_URL}/notes/${id}`,{
      method: 'DELETE'
    });
    const info= await response.json();


    newnotes(info);
    
   }

   function handleEdit(note){
    setId(note.id);
    setText(note.text); 
   }
   
   function handleTextChange(text){
    setText(text);
   }
   async function handleSave(){
    const response= await fetch(`${BASE_URL}/notes/${currId}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: currText
      })

    });
    const info= await response.json();

    newnotes(info);
    setId('')
    


  
   }

   function handleCancel(){
    setId('');
    setText('');

   }
   return {
    notes,currId,currText,handleClick,handleDel,handleEdit,handleTextChange,handleSave,handleCancel
   };
}
export default useNotes;