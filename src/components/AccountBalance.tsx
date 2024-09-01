import React from 'react'
import { useAccountId } from '../hooks/useAccountId'
import {  AccountIdProps } from '../types'
import { formatToDollars } from '../utils/helperFunctions'

const AccountBalance = ({account_id}:AccountIdProps) => {
    const account  = useAccountId(account_id)
    
  return <div className="text-gray-600 font-medium">Account balance is <span className="font-bold">{formatToDollars(account?.balance)}</span></div>
}

export default AccountBalance