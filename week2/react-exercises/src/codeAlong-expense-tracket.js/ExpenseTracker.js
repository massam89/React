import React from 'react'
import AddTrasaction from './components/AddTrasaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'

const ExpenseTracker = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTrasaction />
      </div>
    </GlobalProvider>
  )
}

export default ExpenseTracker
