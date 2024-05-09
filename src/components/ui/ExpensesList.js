'use client'
import { motion } from "framer-motion"
import React, { useState } from 'react';

const ExpenseItem = ({ title, amount, date }) => {
  return (
      <>
      <div className="flex items-center justify-between p-4 shadow-md rounded-xl my-4">
          <div>
              <p className="font-bold">{title}</p>
              <p className="text-sm">{date}</p>
          </div>
          <p className="text-red-500 font-bold">-$ {amount}</p>
      </div>
      </>
  )
}

export default function ExpensesList({ user }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExpenses = user.expenses.filter((expense) =>
    expense.store.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <div className="sticky top-0 bg-white w-full">
        <h2 className="text-md font-bold pt-2 text-center">Search For Expenses</h2>
        <input
          type="text"
          className="w-full p-2 border border-green-600 my-2"
          placeholder="Enter expense name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredExpenses.map((expense, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <ExpenseItem
            title={expense.store}
            amount={expense.amount}
            date={expense.date}
          />
        </motion.div>
      ))}
    </div>
  );
}