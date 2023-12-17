import { Schema,model } from "mongoose";

const transactionSchema= new Schema({
    user:{
        type:Schema.Types.ObjectId,
        rel:"User",
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:["credit","debit"],
        required:true
    },
    decsription:{
        type:String,
    },
    category:{
        type:String,
        enum:["food","entertainment","transportation","rent","education","salary","gift","shopping","other"],
        default:"other"
    }
},
{
    timestamps:true
})

const Transaction= model('Transaction',transactionSchema)

export default Transaction