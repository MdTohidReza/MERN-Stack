import express from 'express'
import cookieParser from 'cookie-parser'
//import session from 'express-session'


const app = express()
const PORT = 3000




app.listen(PORT,(req,res)=>{
   console.log(`server started at PORT ${PORT}`)
})