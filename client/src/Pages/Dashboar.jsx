import React, { useEffect } from 'react'
import { useWalletContract } from '../Context/WalletProvider'
import axiosInstance from '../Axios'

const Dashboar = () => {
    const context=useWalletContract()
  const {getForms, addForm, getKyc}=context
  useEffect(()=>{
    getForms()
  },[])
  return (
    <div>Dashboar</div>
  )
}

export default Dashboar