import {useState} from 'react';
import useLocalStorage from './useLocalStorage.js'
function useNotes(){

  const [notes,newnotes]=useLocalStorage("notes",[]);

  const [currId,setId]=useState('');
  const [currText, setText]=useState('');

  function handleClick(note){
    const updated_notes= ([...notes,note]);
    newnotes(updated_notes)
  
  }

   function handleDel(id){
    const updated_notes= (notes.filter((note)=> note.id !== id));
    newnotes(updated_notes);
    
   }

   function handleEdit(note){
    setId(note.id);
    setText(note.text); 
   }
   
   function handleTextChange(text){
    setText(text);
   }
   function handleSave(){
    const updated_notes= notes.map(note=> 
       note.id === currId? { id: note.id, text: currText}
       : {id: note.id, text: note.text}
    )

    
    newnotes(updated_notes);
    
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