import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-blue-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="644"
              height="489"
              viewBox="0 0 644 489"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="196"
                cy="41"
                r="448"
                fill="white"
                fillOpacity="0.04"
              ></circle>
            </svg>
          </span>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="644"
              height="489"
              viewBox="0 0 644 489"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="196"
                cy="41"
                r="448"
                fill="white"
                fillOpacity="0.04"
              ></circle>
            </svg>
          </span>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="659"
              height="562"
              viewBox="0 0 659 562"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="211"
                cy="114"
                r="448"
                fill="white"
                fillOpacity="0.04"
              ></circle>
            </svg>
          </span>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.5"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#ffffff" />
                <stop offset={2} stopColor="#a9c2f9" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto text-center lg:flex-auto lg:py-32 sm:pb-24">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
