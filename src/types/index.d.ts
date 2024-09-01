declare type Transaction = {
  transaction_id: string;
  account_id: string;
  amount: number;
  created_at: string;
};

declare interface AccountIdProps {
  account_id: string;
}

declare interface Account extends AccountIdProps {
  currentBalance: number;
  name: string;
}

declare interface GetAccountByIdData extends AccountIdProps {
  balance: number;
}

declare interface GetAccountByIdResponse {
  response: GetAccountByIdData;
  loading?: boolean;
  error?: boolean;
}

declare interface BankTabItemProps {
  account: Account;
  accountId?: string;
}

declare interface RecentTransactionsProps {
  accounts: Account[];
  transactions: Transaction[];
  page: number;
  account_id: string;
}

declare interface TransactionTableProps {
  transactions: Transaction[];
}

declare interface AccountIdProps {
  accountId: string;
}

declare interface State {
  transactions: Transaction[];
  accountIds: string[];
  formattedTransactions?: TransactionCardProps[];
  accountInfo?: { id: string; balance: number }[];
  newTransaction:Transaction |{}
}

export declare interface TableProps {
  info: string;
  date: string;
  acc_id: string;
}

export declare interface TransactionTableProps extends TableProps {
  time?: string;
  index?: number;
}

export declare interface TransactionTableRowProps extends TableProps {
  time: number;
  index: number;
}
