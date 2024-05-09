import Image from "next/image"

export default function FeatureRight({ smallText, title, description, features, images }) {
  return (
    <div className="overflow-hidden bg-green-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-10 lg:flex lg:space-y-0 items-center justify-center space-x-10"> 
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-300">{smallText}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-white">
                {description}
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
          {images.map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} width={350} height={0} className="rounded-2xl shadow-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
