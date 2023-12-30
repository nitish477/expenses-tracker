import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './Transaction.css'
import axios from 'axios'
import Card from '../../component/Card/Card'
function Transaction() {
  const [amount, setAmount] = useState()
  const [note, setNote] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [userdata, setUserData] = useState({})
  const [transactionData, setTransactiondata] = useState([])
  const [credit, setCredit] = useState(0)
  const [debit, setDebit] = useState(0)
  const [isEdit,setIsEdit]=useState(false)
  const [id,setId]=useState(0)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user') || "{}")
    if (!data.email) {
      window.location.href = '/signup'
    }
    setUserData(data)
  }, [])
  const clearInputFields = () => {
    setAmount("");
    setNote("");
    setCategory("");
    setType("");
  }
  const addTransaction = async () => {
    try {
      const responce = await axios.post('/api/transaction', {
        user: userdata._id,
        amount: amount,
        decsription: note,
        category: category,
        type: type
      })
      if (responce?.data?.success === true) {
        alert(responce?.data?.message)
        clearInputFields()
        window.location.reload()
      } else {
        alert(responce?.data?.message)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const loadTransaction = async () => {
    const userId = userdata._id
    if (!userId) {
      return;
    }

    try {
      const response = await axios.get(`/api/transactions/user/${userId}`)
      setTransactiondata(response?.data?.data)


      
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    loadTransaction();
  }, [userdata])

  useEffect(()=>{
   loadTransaction()
  },[])

  const remove= async(_id)=>{
     try{
      const responce =await axios.delete(`/app/transiction/delete/${_id}`)
      if(responce?.data?.success){
        alert(responce?.data?.message)
        loadTransaction()
      } 
     }catch(err){
      console.log(err.message)
     }
  }

  const edit =async(_id)=>{
      try{
          const responce=await axios.get(`/api/trasaction/${_id}`)
          if(responce?.data?.success){
            const tranasactionData=responce?.data?.data
            setAmount(tranasactionData.amount)
            setType(tranasactionData.type)
            setCategory(tranasactionData.category)
            setNote(tranasactionData.decsription)
            setId(tranasactionData._id)
            setIsEdit(true)

          }
          else{
            alert(responce?.data?.message)
          }

      }catch(err){
        console.log(err.message)
      }
  }

  const updateTransaction=async()=>{
    try{
      const response=await axios.put(`/api/trasaction/update/${id}`,{
        amount:amount,
        type:type,
        category:category,
        decsription:note
      })

      if(response?.data?.success){
         clearInputFields()
         setIsEdit(false)
         alert(response?.data?.message)
         loadTransaction()
      }
    }catch(err){
      console.log(err.message)
    }
  }



  return (
    <>
      <Navbar />
      <p className='trans-welcome'>Welcome To Budget Management And Expence Tracker System</p>
      <div className='main-transaction-div'>

        <div className='sub-transaction-div'>
       
          <p  className='heading'>Show Transaction</p>

          <div>
            
            {
              transactionData?.map((obj, index) => {
                const { amount, category, type, decsription,createdAt,_id } = obj
                const date = new Date(createdAt).toLocaleDateString();
                const time = new Date(createdAt).toLocaleTimeString();
                return <Card
                key={index}
                  amount={amount}
                  category={category}
                  type={type}
                  decsription={decsription}
                  date={date}
                  type={type}
                  time={time}
                  remove={()=>{remove(_id)}}
                  edit={()=>{edit(_id)}}
                />
              })
            }
          </div>

        </div>


        <div className='sub-transaction-div'>
         {!isEdit ? <p className='heading'>Add Transaction</p>: <p className='heading'>Update Transaction</p>}

          <input type='text'
            value={amount}
            placeholder='Amount'
            className='input-box'
            onChange={(e) => {
              setAmount(e.target.value)
            }} />

          <input type='text'
            value={note}
            placeholder='Add Note'
            className='input-box'
            onChange={(e) => {
              setNote(e.target.value)
            }} />
          <div className='input-contanier'>
            <select className='select-type'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}>
              <option>Select Category</option>
              <option value={"food"}>Food</option>
              <option value={"entertainment"}>Entertainment</option>
              <option value={"education"}>Education</option>
              <option value={"transportation"}>Tavell</option>
              <option value={"salary"}>Salary</option>
              <option value={"gift"}>Business</option>
              <option value={"shopping"}>Shopping</option>
              <option value={"rent"}>Rent</option>
              <option value={"other"}>Other</option>
            </select>

            <select className='select-type'
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}>
              <option>Select Type</option>
              <option value={"credit"}>Credit</option>
              <option value={"debit"}>Debit</option>
            </select>

          </div>
         {!isEdit? <button type='button' onClick={addTransaction}>Add Transaction</button>: <button type='button' onClick={updateTransaction}>Update Transaction</button>}
        </div>
      </div>
    </>
  )
}

export default Transaction
