import AddTask from '../components/AddTask.jsx'
import TasksPage from '../components/TasksPage.jsx'
import useTasks from '../hooks/useTasks.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
function Tasks({goBack}){
    const {tasks,currTaskId, currTaskText, handleAddTask , handleToggleStatus,delTask,editTask,changeTaskText , saveEditTask,cancelEditTask}= useTasks();

    return(
        <>
            <TasksPage
                goBack= {goBack}
                tasks={tasks}
                toggleStatus ={handleToggleStatus}
                delTask= {delTask}
                editTask= {editTask}
                currTaskId={currTaskId}
                currTaskText ={currTaskText}
                saveEditTask= {saveEditTask}
                changeTaskText ={changeTaskText}
                cancelEditTask ={cancelEditTask}
                
            />
            <AddTask add={handleAddTask}/>
        </>
    )
}
export default Tasks;