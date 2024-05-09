import Image from "next/image"

export default function FeatureLeft({ smallText, title, description, features, images }) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-10 lg:flex lg:space-y-0 items-center justify-center">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">{smallText}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-green-800">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                    <dd className="inline">{feature.available == false ? <span className="text-red-800"><br/>Feature Currently Not Available.</span> : ''}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center lg:order-first lg:ml-auto">
          {images.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} width={350} height={0} className="rounded-2xl shadow-2xl" />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
