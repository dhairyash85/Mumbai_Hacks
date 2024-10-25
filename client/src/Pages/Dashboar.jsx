import React, { useEffect } from 'react'
import { useWalletContract } from '../Context/WalletProvider'

const Dashboar = () => {
    const context=useWalletContract()
  const {getForm, addForm, getKyc}=context
//   useEffect()
  return (
    <div>Dashboar</div>
  )
}

export default Dashboar