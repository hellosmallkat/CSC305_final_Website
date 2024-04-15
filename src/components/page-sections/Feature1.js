import { ArrowPathIcon, TagIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-Time Updates',
    description:
      'Always know your current expenses with real-time updates.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Categorization',
    description: 'Categorize your expenses to organize your spending habits.',
    icon: TagIcon,
  },
]

export default function Feature1() {
  return (
    <div className="overflow-hidden bg-green-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-300">Increase Productivity</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Smart Expense Tracking & Categorization</p>
              <p className="mt-6 text-lg leading-8 text-white">
                Maximize your savings through our expense tracking and categorization tools. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-green-400">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-300" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img src="/expense.jpg" alt="Expense Picture" width={"350px"} className="rounded-2xl shadow-2xl" />
        </div>
      </div>
    </div>
  )
}
