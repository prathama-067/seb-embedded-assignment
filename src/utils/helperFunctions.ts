import { Transaction } from "../types";

//Filter unique account ids from a list of transactions
export const  filterUniqueAccountIds =(items: any): string[] =>{
  const idTracker: { [key: number]: boolean } = {};

 let uniqueAccountIds =  items
      .map(item => item.account_id)
      .filter(id => {
          if (idTracker[id]) {
              return false;
          } else {
              idTracker[id] = true;
              return true;
          }
      });
      return uniqueAccountIds
}
//Format number into currency with commas and removes minus sign
export const formatToDollars=(amount: number): string =>{
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(Math.abs(amount));
}

//USed by getFormattedTransactinos function to form a statement
export const getAccountAction=(amount:number) : {type:string,desc:string}=>{
  if(amount>0) {
    return {
      type:'Withrawal',
    desc:' to from '
  }
  }else{
    return {
      type:'Withdrawal',
    desc:' from account '
  }
  }
}

//Extract Date in the this format("2024-08-30") from "2024-08-30T13:53:55.429855+00:00"
const extractDate=(timestamp: string): string =>{
  return timestamp.split('T')[0];
}

//Extract Time in the this format("13:53:55") from "2024-08-30T13:53:55.429855+00:00"
const extractTime = (timestamp: string): string =>{
  return timestamp.split('T')[1].split('.')[0];
}

export const getFormattedTransactions=(transactions :Transaction[]) =>{
  const formattedTransactionList = transactions.map((transaction:Transaction)=>{
    const amountInDollars = formatToDollars(transaction.amount) //$1,000
    const accountAction = getAccountAction(transaction.amount) 
    const formattedData = {
      info :`Transferred ${amountInDollars} from account ${transaction.account_id}` ,
      date:  extractDate(transaction.created_at),
      time: extractTime(transaction.created_at),
      acc_id: transaction.account_id
    }
    return formattedData
  })

  return formattedTransactionList
}

