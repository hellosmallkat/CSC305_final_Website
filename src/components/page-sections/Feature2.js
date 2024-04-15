import { BuildingStorefrontIcon, ChartBarIcon  } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Budget Tracking',
    description:
      'Set your budget and track your expenses to ensure you stay within your financial limits.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Financial Analysis',
    description: 'Analyze your spending habits to make smarter financial decisions.',
    icon: ChartBarIcon,
  },
]

export default function Feature2() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Plan Ahead</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Intuitive Budget & Analysis</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Track every dime you spend, set budget goals to ensure you're on track, and analyze your spending habits.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-green-800">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
          <img src="/analysis.jpg" alt="Expense Picture" width={"350px"} className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
