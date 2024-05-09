export default function CallToAction() {
    return (
      <div className="bg-green-950">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't let your finances hold you back.
              <br/>
              Focus on what matters most to you.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
              A video and live demo of our application is shown below.
            </p>
            <p className="mt-6 text-red-500">Disclaimer: Live Demo is a Thunkable Live <span className="font-bold">Webpage</span> Version of the application. It is not a fully functional application.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div>
                <iframe className="rounded-xl" src="/VideoDemo.mp4" title="CoinTrail Video Demo" height="760" width="475"></iframe>
                <iframe className="mt-6" src="https://thunkable.site/w/bz4KT2kLVNNi2Q6JpoKMu" title="Chop Down the Tree Thunkable App" height="750" width="500"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  