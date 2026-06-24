import mongoose from 'mongoose'

const TaskSchema= mongoose.Schema({
    text: String,
    completed: Boolean
})

const Task= mongoose.model("Tasks",TaskSchema);
export default Task;