'use client'

export default function AnimatedCards ({ totalExpenses, balance }) {

  return (
    <>
      <div
        className="mt-4 border border-red-800 rounded-3xl shadow-xl items-center text-center py-4"
      >
        <p className="text-xl text-black">Total Expenses</p>
        <p className="text-4xl font-bold text-red-800">$ {totalExpenses}</p>
      </div>

      <div
        className="mt-4 border border-green-800 rounded-3xl shadow-xl items-center text-center py-4"
      >
        <p className="text-xl text-black">Balance</p>
        <p className="text-4xl font-bold text-green-800">$ {balance}</p>
      </div>
    </>
  );
}
