import React, {createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

  const [transactions, setTransactions] = useState({
    incomeTransactions: [],
    expenseTransactions: []
  });

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: transactions.incomeTransactions,
        expenseTransactions: transactions.expenseTransactions,
        setTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};