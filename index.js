import express from 'express'
import {  userLogin, userSignup } from './controller.js'
import router from './route.js'


const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send('Hello, Tohid from Express')
})

app.use('/user',router)
app.use('/user',express.json())


app.get('/things/:name/:id',(req,res)=>{
    const {name, id}= req.params;
    res.json({
        id,
        name
    })
})

//catch-all invalid route
app.use((req, res) => {
  res.status(404).send("Sorry, This is an invalid route");
});


app.post('/user', (req,res)=>{
    const {name, email} = req.body;
    res.json({
        message: `User ${name} with email ${email} created successfully`
    })
})

app.put('/user/:id',(req,res)=>{
    const userId=req.params.id;
    const{name,email}=req.body;
    res.json({
        message:`User with ID ${userId} updated to ${name} and email is ${email}`
    })
})

app.delete('/user/:id',(req,res)=>{
    const userId=req.params.id;
    res.json({
        message:`User with ID ${userId} deleted successfully`
    })
})











app.listen(PORT,(req,res)=>{
   console.log(`server started at PORT ${PORT}`)
})