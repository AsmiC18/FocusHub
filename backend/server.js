import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("backend is running")
});
app.get('/notes',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);
    res.json(parsedData.notes);

})
app.post('/notes',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8'); 
    const parsedData= JSON.parse(data);

    parsedData.notes.push(req.body);
    const updatedData = JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.notes);
});
app.delete('/notes/:id',(req,res)=>{
    const data = fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);
    const id= Number(req.params.id);

    parsedData.notes= parsedData.notes.filter(note=> note.id != id);
    const updatedData=JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.notes);

});
app.put('/notes/:id',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');

    const parsedData= JSON.parse(data);
    const id= Number(req.params.id);
    console.log(req.body);
    parsedData.notes= parsedData.notes.map(note=> note.id ==id ?{id:id, text: req.body.text} : note);

    const updatedData= JSON.stringify(parsedData);

    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.notes);
    

});


app.get('/tasks',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);
    
    res.json(parsedData.tasks);


})
app.post('/tasks',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);

    parsedData.tasks.push(req.body);
    
    const info= JSON.stringify(parsedData);

    fs.writeFileSync('./backend/data.json', info);

    res.send(parsedData.tasks);


})
app.put('/tasks/status/:id',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);
    const id = Number(req.params.id);
    parsedData.tasks= parsedData.tasks.map(task=> task.id===id ? ({id: id, text: task.text, completed: !task.completed}) : task );

    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.tasks);
});

app.delete('/tasks/:id',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);

    const id = Number(req.params.id);

    parsedData.tasks= parsedData.tasks.filter(task=> task.id != id);

    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.tasks);

})
app.put('/tasks/edit/:id/',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json', 'utf8');
    const parsedData= JSON.parse(data);
    const id= Number(req.params.id);

    parsedData.tasks = parsedData.tasks.map(task=> task.id===id ? ({id: id, text: req.body.text, completed: task.completed}) : task );
    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.tasks);
})

app.get('/goals',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);

    res.json(parsedData.goals);

});

app.post('/goals',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);

    parsedData.goals.push(req.body);

    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.goals);

});
app.put('/goals/progress/:id/',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json', 'utf8');
    const parsedData= JSON.parse(data);
    const id= Number(req.params.id);
    const progress= Number(req.body.current);

    parsedData.goals= parsedData.goals.map(goal=> goal.id===id ? {id:id, text: goal.text, target: goal.target, current: (progress > goal.target? goal.target : progress)} : goal);
    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json', updatedData);

    res.json(parsedData.goals);

});

app.delete('/goals/:id',(req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);
    const id= Number(req.params.id);

    parsedData.goals= parsedData.goals.filter(goal=> goal.id != id);
    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.goals);

});

app.put('/goals/edit/:id', (req,res)=>{
    const data= fs.readFileSync('./backend/data.json','utf8');
    const parsedData= JSON.parse(data);

    const id= Number(req.params.id);
    parsedData.goals= parsedData.goals.map(goal=> goal.id === id ? {id:id, text: req.body.text, target: req.body.target, current:  (goal.current> req.body.target? req.body.target : goal.current)} : goal);
    
    const updatedData= JSON.stringify(parsedData);
    fs.writeFileSync('./backend/data.json',updatedData);

    res.json(parsedData.goals);

});

app.listen(3000,()=>{
    console.log("running on port 3000");
});


