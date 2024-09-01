import React from 'react'
import { TransactionTableRowProps } from '../../types'
import AccountBalance from '../AccountBalance'

const TableRow = ({ date,info,time,index, acc_id}:TransactionTableRowProps) => {
  return (
    <tr className="border-b  ">
              <td  className="px-5 py-5 border-r border-l pe-15">
               <div>
                {info}
                </div>
                <div className="text-sm">
        {(index === 0)&& <AccountBalance account_id={acc_id}/>}
        </div>
              </td>
              <td  className="px-5 py-5 border-r">
                {date}
              </td>
              <td  className="px-5 py-5">
                {time}
              </td>
            </tr>
  )
}

export default TableRow