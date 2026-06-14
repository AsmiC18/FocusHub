import AddNote from '../components/AddNote.jsx'
import NotesPage from '../components/NotesPage.jsx'
import useNotes from '../hooks/useNotes.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

function Notes({goBack}){
    const {notes,currId,currText, handleClick,handleDel,handleEdit,handleTextChange,handleSave,handleCancel}= useNotes();

    return(
        <>
     
      <NotesPage
      goBack= {goBack}
      notes={notes}
      del ={handleDel}
      edit={handleEdit}
      currId= {currId}
      currText= {currText}
      changeText= {handleTextChange}
      save= {handleSave}
      cancel={handleCancel}
      
      />
       <AddNote add={handleClick}/>
       </>
    )
}
export default Notes;