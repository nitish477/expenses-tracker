import Transaction from "../model/Transaction.js"
 const addTransaction=async(req,res)=>{
    const {amount,type,decsription,category,user}=req.body
    const transaction=new Transaction({
        amount,
        type,
        decsription,
        category,
        user
    })

    try{
        const saveTransaction=await transaction.save()
        res.json({
            success:true,
            data:saveTransaction,
            message:'transaction added successfully'
        })
    }catch(err){
        res.status(409).send(`${err.message}`)
    }

}

 const getAllTransaction=async(req,res)=>{
    const allTransaction=await Transaction.find()

    res.status(200).json({
        success:true,
        data:allTransaction,
        message:'All transactions fetched successfully'
    })
}

const getTransitionByUser= async (req,res)=>{
    const {id} = req.params.id;
   try{
    const userTransaction= await Transaction.find({User:{id: id}}).populate('User')
    res.status(200).json({
        success: true,
        data:userTransaction,
        message:"User's transaction list"
    })
   }catch(err){
    return res.status(500).json({
        success:false,
        message:"Server error!"
        });
   }
}

const deleletTransition= async(req,res)=>{
    const {id}=req.params
    await Transaction.deleteOne({_id:id})
    res.status(200).json({
        success:true,
        message:"Deleted Successfully",
    })
}

export {addTransaction,getAllTransaction,getTransitionByUser,deleletTransition}