import User from './../model/User.js'

const Signup =async(req,res)=>{
    const{name,email,password,mobile}=req.body
    try{
        const signup= new User({
            name:name,
            email:email,
            password:password,
        })
        const userData= await signup.save()
        res.status(201).json({
            success:true,
            data:userData,
            message:"Sign up Successfully"
        })
    }catch(err){
        return res.status(400).send({error: 'Erro no servidor.'})
    }
}

const login =async (req,res)=>{
    const {email,password}= req.body;
   try{
    const loginUser=await User.findOne({ email: email, password: password }).select("name email")
    if(loginUser){
        res.status(200).json({
            success: true,
            data:loginUser,
            message:"Login SuccessFully"
        })
    }
    else{
        res.json({
            success: false,
            message:'Invalid Email or Password'
        })
    }
   }catch(err){
    return res.status(400).json({
        success:false,
        error:err.message
    })
   }
}


export {Signup,login}