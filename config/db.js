import mongoose from 'mongoose';

export const connectDB = async () =>{
const MONGODB_URI = 'mongodb+srv://tohidreza786_db:Tohid123@cluster0.lhm0g2j.mongodb.net/express'
 await mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('Database is successfully connected');
})
}