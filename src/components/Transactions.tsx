import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import ErrorPage from './ErrorPage';
import Header from './ui/Header';
import TransactionHistoryTable from './TransactionHistoryTable';

const Transactions = () => {
  const { state } = useContext(AppContext);


  return (
    <div className='flex flex-col gap-2 items-center' >
      <Header title={'Transaction history'}/>
      { (state.transactions.length > 0 )? <TransactionHistoryTable/> :<ErrorPage/>}
    </div>
  )
}

export default Transactions