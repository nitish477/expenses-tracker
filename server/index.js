import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { addTransaction, deleletTransition, editTransation, getAllTransaction, getTransitionById, getTransitionByUser } from './controller/Transaction.js'
import { Signup, login } from './controller/user.js'
dotenv.config()
import path from 'path'

const app=express()
app.use(express.json())
const __dirname= path.resolve()

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
app.get('/api/trasaction/:id',getTransitionById)
app.put('/api/trasaction/update/:id',editTransation)

app.post('/api/user/signup',Signup)
app.post('/api/user/login',login)

if(process.env.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname,'..','client','build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'..','client','build','index.html'))
    })
 }

const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})
