import { ExpenseItem } from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense) => {
          return <ExpenseItem
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        })}
      </ul>
      {expenses.length > 0 &&
        <button className="btn" onClick={clearItems}>
          Clear Expenses
          <MdDelete className='btn-icon' />
        </button>}
    </>
  )
}
