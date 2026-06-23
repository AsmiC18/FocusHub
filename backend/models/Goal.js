import mongoose from 'mongoose'

const GoalSchema = mongoose.Schema({
    id: Number,
    text: String,
    target: Number,
    current: Number
})

const Goal= mongoose.model("goals", GoalSchema);

export default Goal;