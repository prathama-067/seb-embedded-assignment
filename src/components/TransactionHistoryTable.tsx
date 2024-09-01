import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { TransactionTableProps } from '../types';
import TableRow from './ui/TableRow';

const TransactionHistoryTable = () => {
    const { state } = useContext(AppContext);
    const [formattedTransactions,setFormattedTransactions] = useState<TransactionTableProps[] | []>([])

    useEffect(()=>{
        if(!state.formattedTransactions) return

        setFormattedTransactions(state.formattedTransactions)
    },[])


        const transactionsList = formattedTransactions.map((item,index) =>{
          return(
              <TableRow date={item.date} time={item.time} info={item.info} index={index} acc_id={item.acc_id}/>

          )});

  return (
    <div className="border-3 rounded p-3">
          <table className="shadow-lg bg-white ">
        <thead className="border-b bg-[#e7e7e7d1]">
          <tr>
            <th className="text-left px-4 pr-10  py-2 flex-wrap">Transaction details</th>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
        {transactionsList}
        </tbody>
           
      </table>
    </div>
  )
}

export default TransactionHistoryTable