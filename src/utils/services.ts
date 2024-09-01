import { CREATE_TRANSACTION, GET_TRANSACTIONS } from "../constants/url";

export async function getTransactionsService() {

  try {
    const response = await fetch(GET_TRANSACTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions');
  }
}

export async function createTransactionService({account_id,amount}:{account_id:string,amount:number}){
try{
  const response = await fetch(CREATE_TRANSACTION,
  {method:'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({
    "account_id": account_id,
    "amount": amount
  })});
  const data = await response.json();
  return data.transaction_id
}catch(error){
  console.error('Error creating transaction:', error);
    throw new Error('Failed to fetch transactions');
}
}

export async function getTransactionDetailsService (transaction_id : string){
  const response : any = await fetch(`https://infra.devskills.app/api/accounting/transactions/${transaction_id}`)
  const data = response.json();
  return data
}