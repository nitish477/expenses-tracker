import React, { useEffect, useState } from 'react'
import Navbar from './../../component/Navbar/Navbar'
import './Transaction.css'
import axios from 'axios'
function Transaction() {
  const [amount, setAmount] = useState()
  const [note, setNote] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')
  const [userdata, setUserData] = useState({})
  const [transactionData,setTransactiondata]=useState([])

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
      } else {
        alert(responce?.data?.message)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const loadTransaction=async()=>{
    const userId=userdata._id
    if(!userId){
      return;
    }
    console.log(userId)

    try{
      const response=await axios.get(`/api/transactions/user/${userId}`)
      console.log(response?.data)
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    loadTransaction();
  },[userdata])
  

  return (
    <>
      <Navbar />
      <p style={{ textAlign: 'center' }}>Welcome To Budget Management And Expence Tracker System</p>
      <div className='main-transaction-div'>

        <div className='sub-transaction-div'>
          <p style={{ textAlign: 'center' }}>Add Transaction</p>
           


        </div>


        <div className='sub-transaction-div'>
          <p style={{ textAlign: 'center' }}>Add Transaction</p>

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
          <button type='button' onClick={addTransaction}>Add Transaction</button>
        </div>
      </div>
    </>
  )
}

export default Transaction
