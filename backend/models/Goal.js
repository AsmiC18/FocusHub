import mongoose from 'mongoose'

const GoalSchema = mongoose.Schema({
    text: String,
    target: Number,
    current: Number
})

const Goal= mongoose.model("goals", GoalSchema);

export default Goal;