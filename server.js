const express = require('express');
const mongoose = require('mongoose');
const app = express();
const username = 'amandeep101003';
const password = 'aman1001';
const url =`mongodb+srv://${username}:${password}@cluster0.rlqapzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` ;
app.use(express.json());
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successfull");
}).catch((err)=>{
    console.log(err);
})
app.get('/',(req,res) => {
    res.send('Hello Amandeep Singh')
})
app.get('/home',(req,res)=>{
    res.send('welcome to home')
})
app.get('/login',(req,res)=>{
    res.send('login here')
})
app.get('/form',(req,res)=>{
    res.send('form here')
})
app.get('/contact',(req,res)=>{
    res.send('contact here')
})
app.post('/signup',(req,res)=>{
    const inputData = req.body;
    res.send(inputData)
})
app.post('/dashboard',(req,res)=>{
    const inputData = req.body;
    console.log(inputData)
    res.send(inputData)

})
app.post('/data',(req,res)=>{
    const inputData = req.body;
    console.log(inputData)
    res.send(inputData)
})
app.post('/cart',(req,res)=>{
    const inputData = req.body;
    console.log(inputData)
    res.send(inputData)
})
app.post('/checkout',(req,res)=>{
    const inputData = req.body;
    console.log(inputData)
    res.send(inputData)
})
app.listen(5000, ()=>{
    console.log(`Server started on 5000`);
})