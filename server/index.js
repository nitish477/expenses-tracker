import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { addTransaction, deleletTransition, getAllTransaction, getTransitionByUser } from './controller/Transaction.js'
import { Signup, login } from './controller/user.js'
dotenv.config()

const app=express()
app.use(express.json())

const connectDB= async ()=>{
    try{
       const connect = await mongoose.connect(process.env.MONGODB_URL)
        if(connect){
            console.log("connected to database")
        }
    }catch(err){
        console.log('Database connection error', err)
    }
}

app.get('/health',async (req,res)=>{
    res.status(201).json({
        success:true,
        message:"Server is running"
    })
})

app.post('/api/transaction',addTransaction)
app.get('/api/transactions',getAllTransaction)
app.get('/api/transactions/user/:id',getTransitionByUser)
app.delete('/app/transiction/delete/:id',deleletTransition)

app.post('/api/user/signup',Signup)
app.post('/api/user/login',login)

const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})
