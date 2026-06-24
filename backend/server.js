import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Note from './models/Note.js'
import Task from './models/Task.js'
import Goal from './models/Goal.js'

import fs from 'fs';
import cors from 'cors';
import { json } from 'body-parser';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDb!");
}).catch((err)=>{
    console.log("Failed To Connect :( :", err.message);
   
})



const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("backend is running")
});

app.get('/notes', async (req,res)=>{
    const data= await Note.find();
    res.json(data);

});

app.post('/notes',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8'); 
    // const parsedData= JSON.parse(data);

    // parsedData.notes.push(req.body);
    // const updatedData = JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.notes);

    const note= await Note.create(req.body);
    res.json(await Note.find());
});

app.delete('/notes/:id', async(req,res)=>{
    // const data = fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);
    // const id= Number(req.params.id);

    // parsedData.notes= parsedData.notes.filter(note=> note.id != id);
    // const updatedData=JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.notes);
    
    await Note.findByIdAndDelete(req.params.id);
    res.json(await Note.find());

});
app.put('/notes/:id', async(req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');

    // const parsedData= JSON.parse(data);
    // const id= Number(req.params.id);
    // console.log(req.body);
    // parsedData.notes= parsedData.notes.map(note=> note.id ==id ?{id:id, text: req.body.text} : note);

    // const updatedData= JSON.stringify(parsedData);

    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.notes);

    const note= await Note.findByIdAndUpdate(
        req.params.id,
        {text: req.body.text}
    )
    res.json(await Note.find());
    

});


app.get('/tasks',async (req,res)=>{
    const tasks= await Task.find();
    
    res.json(tasks);


})
app.post('/tasks', async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);

    // parsedData.tasks.push(req.body);
    
    // const info= JSON.stringify(parsedData);

    // fs.writeFileSync('./data.json', info);

    // res.send(parsedData.tasks);

    const task= await Task.create({
        text: req.body.text,
        completed: req.body.completed
    })
    res.json(await Task.find());

})
app.put('/tasks/status/:id',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);
    // const id = Number(req.params.id);
    // parsedData.tasks= parsedData.tasks.map(task=> task.id===id ? ({id: id, text: task.text, completed: !task.completed}) : task );

    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.tasks);

    const task= await Task.findById(req.params.id);

    await Task.findByIdAndUpdate(
        req.params.id,
        {completed: !task.completed}
    )
    res.send(await Task.find());
});

app.delete('/tasks/:id',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);

    // const id = Number(req.params.id);

    // parsedData.tasks= parsedData.tasks.filter(task=> task.id != id);

    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.tasks);

    await Task.findByIdAndDelete(
        req.params.id
    )
    res.json(await Task.find());
})

app.put('/tasks/edit/:id/',async (req,res)=>{
    // const data= fs.readFileSync('./data.json', 'utf8');
    // const parsedData= JSON.parse(data);
    // const id= Number(req.params.id);

    // parsedData.tasks = parsedData.tasks.map(task=> task.id===id ? ({id: id, text: req.body.text, completed: task.completed}) : task );
    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.tasks);

    await Task.findByIdAndUpdate(
        req.params.id,
        {text: req.body.text}
    )
    res.json(await Task.find());
})

app.get('/goals',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);

    // res.json(parsedData.goals);
    const goals= await Goal.find();

    res.json(goals);

});

app.post('/goals',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);

    // parsedData.goals.push(req.body);

    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.goals);

    await Goal.create({
        text: req.body.text,
        target: req.body.target,
        current: req.body.current
        
    });
    res.json(await Goal.find());
});
app.put('/goals/progress/:id/', async (req,res)=>{
    // const data= fs.readFileSync('./data.json', 'utf8');
    // const parsedData= JSON.parse(data);
    // const id= Number(req.params.id);
    // const progress= Number(req.body.current);

    // parsedData.goals= parsedData.goals.map(goal=> goal.id===id ? {id:id, text: goal.text, target: goal.target, current: (progress > goal.target? goal.target : progress)} : goal);
    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json', updatedData);

    // res.json(parsedData.goals);

    const goal=  await Goal.findById(req.params.id);
    const progress= Number(req.body.current) > Number(goal.target) ? goal.target : Number(req.body.current)

    await Goal.findByIdAndUpdate(
        req.params.id,
        {current: progress}
    )
    
    res.json(await Goal.find())

});

app.delete('/goals/:id',async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);
    // const id= Number(req.params.id);

    // parsedData.goals= parsedData.goals.filter(goal=> goal.id != id);
    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.goals);
    await Goal.findByIdAndDelete(req.params.id);
    res.json(await Goal.find());

});

app.put('/goals/edit/:id', async (req,res)=>{
    // const data= fs.readFileSync('./data.json','utf8');
    // const parsedData= JSON.parse(data);

    // const id= Number(req.params.id);
    // parsedData.goals= parsedData.goals.map(goal=> goal.id === id ? {id:id, text: req.body.text, target: req.body.target, current:  (goal.current> req.body.target? req.body.target : goal.current)} : goal);
    
    // const updatedData= JSON.stringify(parsedData);
    // fs.writeFileSync('./data.json',updatedData);

    // res.json(parsedData.goals);

    await Goal.findByIdAndUpdate(
        req.params.id,
        {
            text: req.body.text,
            target: Number(req.body.target)
        }

    )

    res.json(await Goal.find());
});

app.listen(3000,()=>{
    console.log("running on port 3000");
});


