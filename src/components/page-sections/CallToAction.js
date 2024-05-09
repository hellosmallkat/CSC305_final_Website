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
              Click below to checkout our application. It's free to download and use, so you can start tracking your expenses and budgeting your money today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                href="#"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 disabled:bg-green-800 disabled:cursor-not-allowed disabled:hover:bg-green-800 disabled:focus-visible:outline-green-800 disabled:focus-visible:outline-offset-2 disabled:focus-visible:outline-2 disabled:shadow-sm disabled:text-white disabled:opacity-50 disabled:disabled"
                disabled
              >
                Download Now
              </button>
            </div>
            <p className="mt-8 text-red-500">The app is currently not released publicly.</p>
          </div>
        </div>
      </div>
    )
  }
  