import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-4 mt-16 lg:px-10">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-slate-800 sm:text-4xl lg:text-6xl lg:leading-tight ">
            Start your journey with{" "}
            <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              CryptoGuru
            </span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            We're the most trusted place for people and businesses to buy, sell,
            and manage crypto.
          </p>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <a
              href="#"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Get started
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              href="#"
              className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Contact sales team
            </a>
          </div>
          {/* End Buttons */}

          {/* Review */}
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            {/* Review */}
            <div className="py-5">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((index) => (
                  <svg
                    key={index}
                    className="h-4 w-4 text-gray-800 dark:text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999978 19.1845 1.89776 19.1845L17.1598 16.9903C17.459 16.9903 17.7583 16.9903 18.0575 16.9903L24.9404 1.6307C25.539 0.69031 26.4367 0.69031 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-800 dark:text-gray-200">
                "Great service and amazing team!"
              </p>
            </div>
            {/* End Review */}

            {/* Review */}
            <div className="py-5">
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((index) => (
                  <svg
                    key={index}
                    className="h-4 w-4 text-gray-800 dark:text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999978 19.1845 1.89776 19.1845L17.1598 16.9903C17.459 16.9903 17.7583 16.9903 18.0575 16.9903L24.9404 1.6307C25.539 0.69031 26.4367 0.69031 27.0352 1.6307Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-gray-800 dark:text-gray-200">
                "Impressive quality and quick delivery!"
              </p>
            </div>
            {/* End Review */}
          </div>
          {/* End Review */}
        </div>
        <div className="mt-10 -mx-4 sm:mt-0 relative">
          <img
            className="mx-auto shadow-2xl rounded-2xl object-cover"
            style={{
              width: "calc(100% + 40px)",
              height: "calc(100% + 20px)",
              margin: "-20px",
            }}
            src="./heroSection.png"
            alt="Product illustration"
          />
        </div>
      </div>
      {/* End Grid */}
    </div>
  );
};

export default HeroSection;
