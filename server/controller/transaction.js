import Transaction from "../model/Transaction.js"
const addTransaction = async (req, res) => {
    const { amount, type, decsription, category, user } = req.body
    const transaction = new Transaction({
        amount,
        type,
        decsription,
        category,
        user
    })

    try {
        const saveTransaction = await transaction.save()
        res.json({
            success: true,
            data: saveTransaction,
            message: 'transaction added successfully'
        })
    } catch (err) {
        res.status(409).send(`${err.message}`)
    }

}

const getAllTransaction = async (req, res) => {
    const allTransaction = await Transaction.find()

    res.status(200).json({
        success: true,
        data: allTransaction,
        message: 'All transactions fetched successfully'
    })
}

const getTransitionById=async(req,res)=>{
    const {id}= req.params
    try{
        const getdata=await Transaction.findById(id)
        if(!getdata){
            return res.status(404).json({success:false,msg:"No Data Found!"})
        }
        res.status(200).json({
            success:true,
            data:getdata,
            message:'fetch SuccessFully!'
        })

    }catch(err){
        res.status(404).json({
            success:false,
            message:err.message
        })
    }
}

const getTransitionByUser = async (req, res) => {
    try {
        const { id } = req.params;


        const userTransaction = await Transaction.find({ user: id }).populate('user')


        res.status(200).json({
            success: true,
            data: userTransaction,
            message: "User's transaction list"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

const editTransation = async (req, res) => {
    const { id } = req.params
     try{
        const { amount,type,decsription,category } = req.body;

        await Transaction.updateOne({ _id: id },
            {
                $set: {
                    amount, decsription, type, category
                }
            })
    
        const updatedTransaction = await Transaction.findById(id)
    
    
        res.status(200).json({
            success: true,
            data: updatedTransaction,
            message: "Transaction update succesfully..!"
        })
     }catch(err){
        return res.status(400).json({
            success: false,
            message: 'Failed to update transaction',
        })
     }
}


const deleletTransition = async (req, res) => {
    const { id } = req.params
    await Transaction.deleteOne({ _id: id })
    res.status(200).json({
        success: true,
        message: "Deleted Successfully",
    })
}

export { addTransaction, getAllTransaction, getTransitionByUser, deleletTransition,getTransitionById ,editTransation}