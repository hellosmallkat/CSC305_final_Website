import { getUser } from "../../utils/CloudFunctions";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

/* 

  HELPER FUNCTIONS

*/
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const calculateTotalExpenses = (expenses, endDate) => {
  return expenses.reduce((total, expense) => {
    // Parse the date from the expense
    const expenseDate = new Date(expense.date.seconds * 1000); // assuming expense.date.seconds is the timestamp in seconds
    
    // Check if the expense date is within the allowed date range
    if (expenseDate > endDate) {
      return total; // Skip this expense as it's beyond the report date
    }

    // Calculate the amount as before
    let amount = 0;
    if (typeof expense.amount === 'string') {
      amount = parseFloat(expense.amount.trim().replace(',', ''));
    } else if (typeof expense.amount === 'number') {
      amount = expense.amount;
    }
    
    if (isNaN(amount)) {
      amount = 0;
    }

    return total + amount;
  }, 0);
}


const getTopExpenses = (expenses) => {
  // Sort expenses by amount in descending order
  const sortedExpenses = expenses.sort((a, b) => {
    const amountA = typeof a.amount === 'string' ? parseFloat(a.amount.trim().replace(',', '')) : a.amount;
    const amountB = typeof b.amount === 'string' ? parseFloat(b.amount.trim().replace(',', '')) : b.amount;

    return amountB - amountA; // Sort descending
  });

  // Select the top 5 expenses
  return sortedExpenses.slice(0, 5).map(expense => {
    const amount = typeof expense.amount === 'string' ? parseFloat(expense.amount.trim().replace(',', '')) : expense.amount;
    return {
      name: expense.store,
      stat: `$${amount.toFixed(2)}`,
    };
  });
};



/* 

  COMPONENT FUNCTIONS

*/
const HeaderComponent = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-green-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            user.name's Expense Report
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Generated on report.data
          </p>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
const TotalExpenseCardComponent = ({name, amount}) => {
  return (
    <div>
      <dl className="flex justify-center">
      <div className="text-center overflow-hidden rounded-lg bg-white px-4 py-5 my-4 shadow-md sm:p-6 w-full">
        <dt className="truncate text-md font-bold text-green-700">{name}</dt>
        <dd className="mt-1 text-4xl font-bold tracking-tight text-gray-900">$ {amount}</dd>
      </div>
      </dl>
    </div>
  )
}

const TopExpensesComponent = ({ topExpenses }) => {
  return (
    <div className="text-center">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Top 10 Expenses</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
        {topExpenses.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="text-2xl font-bold text-green-800">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}






/* 

  MAIN COMPONENT

*/
export default async function ExpenseReport({ searchParams }) {
  const uid = searchParams.uid;
  const user = await getUser(uid);

  const reportDate = new Date();

  const totalExpenses = calculateTotalExpenses(user.expenses, reportDate);
  const topExpenses = getTopExpenses(user.expenses);

  return (
    <div>
      <HeaderComponent />
      <TotalExpenseCardComponent name="Total Expenses" amount={totalExpenses} />
      <TopExpensesComponent topExpenses={topExpenses} />
    </div>
  )
}