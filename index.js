import express from 'express'
import { connectDB } from "./config/db.js";
import { Person } from './models/Person.js';


const app = express()
const PORT = 3000

await connectDB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello Express")
})

// saving data to mongodb
app.post('/person',express.json(),async(req,res)=>{
    console.log(req.body);
    const {name,age,email} = req.body;
    const newPerson = new Person({
        name,
        age,
        email
    })
    await newPerson.save();
    console.log("Person data saved to database");
    res.send("Person data received")
})

//updating data in mongodb
app.put("/person",  async (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  const personData = await Person.find({name})
  console.log(personData);
  
  
  res.send("Person data received");
});


app.listen(PORT,(req,res)=>{
   console.log(`server started at PORT ${PORT}`)
})