'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const ChartDataPicker = ({ user }) => {
  const [activeChart, setActiveChart] = useState('bar');

  // Prepare the data for the BarChart
  const expensesData = user.expenses.map(expense => {
    return {
      name: expense.store,
      amount: expense.amount,
    };
  });

  // Prepare the data for the PieChart
  const categoryTotals = user.categories.map((category, index) => {
    return {
      name: category,
      value: user.categoryTotals[index] || 0, // Fallback to 0 if no total is provided
    };
  });

  // Animation variants for the content
  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colors for the pie chart

  return (
    <>
      <div className="mt-6 relative text-sm font-medium text-gray-600 flex justify-center bg-white border-gray-100 shadow-md rounded-2xl py-4">
          <button
            className={`mx-4 ${activeChart === 'bar' ? 'bg-green-800 shadow-md p-4 rounded-2xl font-bold text-white' : 'text-green-600 shadow-md p-4 rounded-2xl font-bold'}`}
            onClick={() => setActiveChart('bar')}
          >
            Bar Chart
          </button>
          <button
            className={`mx-4 ${activeChart === 'pie' ? 'bg-green-800 shadow-md p-4 rounded-2xl font-bold text-white' : 'text-green-600 shadow-md p-4 rounded-2xl font-bold'}`}
            onClick={() => setActiveChart('pie')}
          >
            Pie Chart
          </button>
      </div>
      <div className="mt-4 shadow-md p-4 rounded-2xl border border-gray-100 bg-white">
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {activeChart === 'bar' && (
              <motion.div
                key="bar"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                style={{ height: '300px' }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expensesData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            )}
            {activeChart === 'pie' && (
              <motion.div
                key="pie"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                style={{ height: '300px' }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={categoryTotals}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {categoryTotals.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default ChartDataPicker;
