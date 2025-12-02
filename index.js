import express from 'express'
import {storage} from './config/multer.js'



const app = express()
const upload= multer({storage,limits:{fileSize:1024*1024*5}})
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(upload.single('image'))

app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.post('/form',(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    
    res.send('Form Submitted')
    
})




app.listen(PORT,(req,res)=>{
   console.log(`server started at PORT ${PORT}`)
})