import mongoose from 'mongoose';

export const connectDB = async () =>{
const MONGODB_URI = 'databas url'
 await mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('Database is successfully connected');
})
}