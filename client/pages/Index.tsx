import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background Gradient */}
      <div className="absolute top-[3700px] left-[-900px] w-[1298px] h-[542px] transform rotate-[16.017deg] opacity-60 pointer-events-none">
        <svg
          width="718"
          height="1101"
          viewBox="0 0 718 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter blur-[150px]"
        >
          <g filter="url(#filter0_f_73_847)">
            <g filter="url(#filter1_f_73_847)">
              <ellipse
                cx="621.524"
                cy="192.346"
                rx="621.524"
                ry="192.346"
                transform="matrix(0.968102 0.250555 -0.3034 0.952863 -756.13 202.489)"
                fill="url(#paint0_radial_73_847)"
              />
            </g>
            <g filter="url(#filter2_f_73_847)">
              <ellipse
                cx="410.694"
                cy="89.0179"
                rx="410.694"
                ry="89.0179"
                transform="matrix(0.991436 -0.130591 0.159964 0.987123 -411.819 663.294)"
                fill="url(#paint1_radial_73_847)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_73_847"
              x="-1117.35"
              y="0.986023"
              width="1834.38"
              height="1099.51"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_73_847"
              />
            </filter>
            <filter
              id="filter1_f_73_847"
              x="-967.354"
              y="150.986"
              width="1509.13"
              height="781.017"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_73_847"
              />
            </filter>
            <filter
              id="filter2_f_73_847"
              x="-497.833"
              y="494.572"
              width="1014.86"
              height="405.922"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_73_847"
              />
            </filter>
            <radialGradient
              id="paint0_radial_73_847"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(621.524 192.346) rotate(90) scale(192.346 621.524)"
            >
              <stop stopColor="#9142E7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_73_847"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(410.694 89.0179) rotate(90) scale(89.0179 410.694)"
            >
              <stop stopColor="#9142E7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <Navigation />

      {/* Hero Section */}
      <div className="max-w-[1338px] mx-auto px-4 lg:px-8 relative">
        {/* Content Container */}
        <div className="relative z-10 pt-16 lg:pt-24 pb-32">
          {/* Hero Text */}
          <div className="flex flex-col items-center gap-5 max-w-[1176px] mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col items-center gap-5">
                <h1 className="w-full max-w-[1142px] text-[#0F0F0F] text-center font-montserrat text-[54px] font-bold leading-[120%] lg:text-[54px] md:text-[42px] sm:text-[32px] text-[28px]">
                  Powerful lien and collections software for construction
                  businesses.
                </h1>
                <p className="w-full max-w-[728px] text-[#56595B] text-center font-montserrat text-base font-normal leading-[150%]">
                  Construct Collect is a B2B SaaS platform that simplifies
                  liens, litigation, accounting, and collections for
                  construction companies — all in one place.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-start gap-2.5 relative">
              <div className="flex h-[63px] px-1 justify-center items-center rounded-[18px] relative">
                {/* Gradient Blur Background */}
                <div
                  className="absolute w-full h-[60px] rounded-full opacity-60"
                  style={{
                    background:
                      "linear-gradient(270deg, #9142E7 0%, #9142E7 45.93%, #1CC199 100%)",
                    filter: "blur(2.5px)",
                    transform: "rotate(-10.246deg)",
                  }}
                />
                {/* Button */}
                <button className="text-white text-center font-montserrat text-base font-semibold leading-[150%] flex px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-[#0F0F0F] relative z-10 hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="relative w-full max-w-[1280px] mx-auto hidden lg:block">
          {/* Dark Background with Gradient */}
          <div className="relative w-full h-[416px] rounded-[70px] bg-[#0E121B] overflow-hidden">
            {/* Gradient Effects */}
            <div className="absolute inset-0">
              <div
                className="absolute opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse 538px 88px at center, #9142E7 0%, transparent 100%)",
                  transform: "rotate(6.4deg) translate(40%, 20%)",
                  width: "80%",
                  height: "40%",
                  filter: "blur(150px)",
                }}
              />
              <div
                className="absolute opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse 362px 36px at center, #9142E7 0%, transparent 100%)",
                  transform: "rotate(-3.3deg) translate(80%, 80%)",
                  width: "60%",
                  height: "30%",
                  filter: "blur(100px)",
                }}
              />
            </div>

            {/* Dashboard Image */}
            <div className="absolute top-[-40px] left-[71px] w-[1137px] h-[541px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cce01ddf5bafd044effe561769835cafb7d4d0e9?width=2274"
                alt="Dashboard Preview"
                className="w-full h-full object-cover rounded-t-[40px]"
              />
            </div>
          </div>

          {/* Dashboard Cards */}
          {/* New Files Card */}
          <div className="absolute top-[291px] right-0 w-[426px] h-[208px] bg-white rounded-[21px] p-4 shadow-[0_293px_82px_0_rgba(0,0,0,0.00),0_187px_75px_0_rgba(0,0,0,0.01),0_105px_63px_0_rgba(0,0,0,0.05),0_47px_47px_0_rgba(0,0,0,0.09),0_12px_26px_0_rgba(0,0,0,0.10)]">
            <div className="flex justify-between items-center mb-7">
              <div className="text-[#99A0AE] font-montserrat text-xl font-normal leading-[150%]">
                New Files
              </div>
              <div className="flex h-8 px-[5px] py-[4px] items-center gap-[5px] rounded-[11px] bg-[#F5F7FA] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#99A0AE"
                  />
                  <path
                    d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                    fill="#99A0AE"
                  />
                  <path
                    d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                    fill="#99A0AE"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-5">
                <div className="text-[#0E121B] font-montserrat text-[28px] font-bold leading-[150%]">
                  78.19%
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-center gap-[4px]">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M6.5 1C9.5376 1 12 3.46243 12 6.5C12 9.53757 9.5376 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 10.9C8.92914 10.9 10.9 8.92914 10.9 6.5C10.9 4.07086 8.92914 2.1 6.5 2.1C4.07086 2.1 2.1 4.07086 2.1 6.5C2.1 8.92914 4.07086 10.9 6.5 10.9ZM7 6.5H8.5L6.5 8.5L4.5 6.5H6V4.5H7V6.5Z"
                        fill="#22C55E"
                      />
                    </svg>
                    <span className="text-[#22C55E] font-montserrat text-xs font-bold">
                      1.25%
                    </span>
                    <span className="text-[#525866] font-montserrat text-xs">
                      from last month
                    </span>
                  </div>
                  <span className="text-[#99A0AE] font-montserrat text-xs">
                    this month
                  </span>
                </div>
              </div>
              {/* Donut Chart */}
              <div className="relative w-[117px] h-[117px]">
                <svg
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  className="transform -rotate-90"
                >
                  <circle
                    cx="58.5"
                    cy="58.5"
                    r="44"
                    fill="none"
                    stroke="#F5F7FA"
                    strokeWidth="28"
                  />
                  <circle
                    cx="58.5"
                    cy="58.5"
                    r="44"
                    fill="none"
                    stroke="#1CC199"
                    strokeWidth="28"
                    strokeDasharray="216 60"
                    strokeLinecap="round"
                    strokeDashoffset="0"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Open Disputes Card */}
          <div className="absolute top-[-92px] left-0 w-[426px] h-[208px] bg-white rounded-[21px] p-4 shadow-[0_293px_82px_0_rgba(0,0,0,0.00),0_187px_75px_0_rgba(0,0,0,0.01),0_105px_63px_0_rgba(0,0,0,0.05),0_47px_47px_0_rgba(0,0,0,0.09),0_12px_26px_0_rgba(0,0,0,0.10)]">
            <div className="flex justify-between items-center mb-7">
              <div className="text-[#99A0AE] font-montserrat text-xl font-normal leading-[150%]">
                Open Disputes
              </div>
              <div className="flex h-8 px-[5px] py-[4px] items-center gap-[5px] rounded-[11px] bg-[#F5F7FA] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    fill="#99A0AE"
                  />
                  <path
                    d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
                    fill="#99A0AE"
                  />
                  <path
                    d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
                    fill="#99A0AE"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-5">
                <div className="text-[#0E121B] font-montserrat text-[28px] font-bold leading-[150%]">
                  78.19%
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex items-center gap-[4px]">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M6.5 1C9.5376 1 12 3.46243 12 6.5C12 9.53757 9.5376 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 10.9C8.92914 10.9 10.9 8.92914 10.9 6.5C10.9 4.07086 8.92914 2.1 6.5 2.1C4.07086 2.1 2.1 4.07086 2.1 6.5C2.1 8.92914 4.07086 10.9 6.5 10.9ZM7 6.5H8.5L6.5 8.5L4.5 6.5H6V4.5H7V6.5Z"
                        fill="#E5484D"
                      />
                    </svg>
                    <span className="text-[#E5484D] font-montserrat text-xs font-bold">
                      1.25%
                    </span>
                    <span className="text-[#525866] font-montserrat text-xs">
                      from last month
                    </span>
                  </div>
                  <span className="text-[#99A0AE] font-montserrat text-xs">
                    Active cases
                  </span>
                </div>
              </div>
              {/* Donut Chart */}
              <div className="relative w-[117px] h-[117px]">
                <svg
                  width="117"
                  height="117"
                  viewBox="0 0 117 117"
                  className="transform -rotate-90"
                >
                  <circle
                    cx="58.5"
                    cy="58.5"
                    r="44"
                    fill="none"
                    stroke="#F5F7FA"
                    strokeWidth="28"
                  />
                  <circle
                    cx="58.5"
                    cy="58.5"
                    r="44"
                    fill="none"
                    stroke="#E5484D"
                    strokeWidth="28"
                    strokeDasharray="216 60"
                    strokeLinecap="round"
                    strokeDashoffset="0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dashboard Preview */}
        <div className="lg:hidden mt-16">
          <div className="relative w-full h-[300px] rounded-[40px] bg-[#0E121B] overflow-hidden mx-4">
            {/* Gradient Effects */}
            <div className="absolute inset-0">
              <div
                className="absolute opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse 300px 50px at center, #9142E7 0%, transparent 100%)",
                  transform: "rotate(6.4deg) translate(40%, 20%)",
                  width: "80%",
                  height: "40%",
                  filter: "blur(100px)",
                }}
              />
            </div>

            {/* Dashboard Image - Mobile */}
            <div className="absolute top-[-20px] left-[20px] right-[20px] h-[340px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cce01ddf5bafd044effe561769835cafb7d4d0e9?width=2274"
                alt="Dashboard Preview"
                className="w-full h-full object-cover object-top rounded-t-[20px]"
              />
            </div>
          </div>

          {/* Mobile Stats Cards */}
          <div className="grid grid-cols-1 gap-4 mt-8 mx-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#99A0AE] font-montserrat text-lg font-normal">
                  New Files
                </h3>
                <div className="text-[#0E121B] font-montserrat text-2xl font-bold">
                  78.19%
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6.5 6H8L6 8L4 6H5.5V4H6.5V6Z"
                    fill="#22C55E"
                  />
                </svg>
                <span className="text-[#22C55E] font-montserrat text-sm font-bold">
                  1.25%
                </span>
                <span className="text-[#525866] font-montserrat text-sm">
                  from last month
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#99A0AE] font-montserrat text-lg font-normal">
                  Open Disputes
                </h3>
                <div className="text-[#0E121B] font-montserrat text-2xl font-bold">
                  78.19%
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1C8.76142 1 11 3.23858 11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6.5 6H8L6 8L4 6H5.5V4H6.5V6Z"
                    fill="#E5484D"
                  />
                </svg>
                <span className="text-[#E5484D] font-montserrat text-sm font-bold">
                  1.25%
                </span>
                <span className="text-[#525866] font-montserrat text-sm">
                  from last month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Construct Collect Section */}
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-24 mt-16">
          {/* Section Header */}
          <div className="flex flex-col justify-center items-center gap-[18px] mb-6">
            <h2 className="max-w-[798px] text-[#0F0F0F] text-center font-montserrat text-[40px] font-bold leading-[120%] lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px]">
              Why Construct Collect?
            </h2>
            <p className="max-w-[604px] text-[#4B4B4B] text-center font-montserrat text-base font-normal leading-[150%]">
              All your liens, litigation, and collections — managed in one place
              to protect your projects and get you paid faster.
            </p>
          </div>

          {/* Features Grid */}
          <div className="flex flex-col gap-5">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row items-center gap-5">
              {/* Centralized Lien Management */}
              <div className="flex w-full lg:w-[413px] h-[159px] p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#9142E7] bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M18.9905 19C19.6182 18.3776 19.4637 17.2444 19.4637 16.4479C19.4637 15.4414 19.6838 14.9786 20.4006 14.2618C21.4669 13.1956 22 12.6624 22 12C22 11.3375 21.4669 10.8044 20.4006 9.73817M18.9905 19H19"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Centralized Lien Management
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Track, organize, and access all lien-related data in one
                    place.
                  </p>
                </div>
              </div>

              {/* Construction-Ready Accounting */}
              <div className="flex w-full lg:w-[413px] h-[159px] p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#1CC199] bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M21.5 12.95V11.05C21.5 7.01949 21.5 5.00424 20.1088 3.75212C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.89124 20.2479C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.2479C21.5 18.9958 21.5 16.9805 21.5 12.95Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 8H14M16 6V10"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 17.5H14"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 14.5H14"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 17.5L8.25 15.75M8.25 15.75L6.5 14M8.25 15.75L10 14M8.25 15.75L6.5 17.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 8H6"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Construction-Ready Accounting
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Tools built specifically for the financial flow of
                    construction projects.
                  </p>
                </div>
              </div>

              {/* Real-Time Litigation Tracking */}
              <div className="flex w-full lg:w-[413px] h-[159px] p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#9142E7] bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5001 9L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 3.5V2"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 2H14.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 15H5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 19H7"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Real-Time Litigation Tracking
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Stay updated on every case with smart status management.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row items-center gap-5">
              {/* Smart Debt Collection */}
              <div className="relative flex w-full p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#1CC199] bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M12 19H12.01"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Smart Debt Collection
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Automate reporting and monitor payments with clarity and
                    control.
                  </p>
                </div>
              </div>

              {/* Seamless Integrations - Special card with background */}
              <div className="relative flex w-full p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#9142E7] bg-white">
                {/* Background Image with Overlay */}
                {/* <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/aa5e370f1eb80d25d6eb24de91c5956a056c6aac?width=828')",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                /> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative z-10 flex-shrink-0"
                >
                  <path
                    d="M22 13.579V13.7425M22 13.7425C22 12.9192 21.4003 12.2166 20.582 12.0812L19.4545 11.8947V12.7368M22 13.7425V15.8246C22 17.6548 22 18.5699 21.7191 19.2984C21.2896 20.4124 20.4054 21.2927 19.2865 21.7203C18.5547 22 17.6356 22 15.7973 22C14.8332 22 14.3512 22 13.9026 21.9018C13.2181 21.752 12.5818 21.4353 12.0508 20.98C11.7028 20.6816 11.4135 20.2977 10.8351 19.5298L8.28626 16.1463C7.89462 15.6264 7.90588 14.9086 8.31364 14.4011C8.84655 13.7379 9.84017 13.6831 10.4434 14.2837L11.7333 15.6524V7.41176C11.7333 6.63207 12.3601 6 13.1333 6C13.9065 6 14.5333 6.63207 14.5333 7.41176V10.2105M19.4545 12.7368C19.4545 11.8067 18.6948 11.0526 17.7576 11.0526H16.9091V11.8947M19.4545 12.7368V13.579M14.5333 10.2105H15.2121C16.1493 10.2105 16.9091 10.9646 16.9091 11.8947M14.5333 10.2105V12.7368M16.9091 11.8947V12.7368"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 8.01013C21.9641 5.52637 21.7801 4.11823 20.8366 3.17355C19.6645 2 17.7781 2 14.0052 2H10.0035C6.2306 2 4.34416 2 3.17208 3.17355C2 4.3471 2 6.2359 2 10.0135V12.0169C2 13.8838 2 14.8172 2.30461 15.5536C2.71077 16.5353 3.4898 17.3153 4.47034 17.722C4.87798 17.8911 5.34612 17.9664 6 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative z-10 flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Seamless Integrations
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Works with the tools you already use — no extra setup
                    needed.
                  </p>
                </div>
              </div>

              {/* Enterprise-Grade Security */}
              <div className="relative flex w-full p-5 flex-col justify-end items-start gap-2.5 rounded-[24px] border border-[#1CC199] bg-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M19 20.5C19.4255 20.309 19.7894 20.0612 20.1088 19.7395C21.5 18.3379 21.5 16.0821 21.5 11.5705C21.5 7.05894 21.5 4.80314 20.1088 3.40157C18.7175 2 16.4783 2 12 2C7.52166 2 5.28249 2 3.89124 3.40157C2.5 4.80314 2.5 7.05894 2.5 11.5705C2.5 16.0821 2.5 18.3379 3.89124 19.7395C4.21056 20.0612 4.57453 20.309 5 20.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2.5 8.5H21.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 5.5H7.00898"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 5.5H11.009"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2596 16.378C9.1796 16.378 8.71714 17.1575 8.59714 17.6373C8.47714 18.117 8.47714 19.856 8.54914 20.5755C8.78914 21.475 9.38914 21.8468 9.97714 21.9667C10.5171 22.0147 12.7971 21.9967 13.4571 21.9967C14.4171 22.0147 15.1371 21.6549 15.4371 20.5755C15.4971 20.2157 15.5571 18.2369 15.4071 17.6373C15.0891 16.6778 14.36 16.378 13.76 16.378M10.2596 16.378H13.76M10.2596 16.378C10.2596 16.318 10.2582 15.5516 10.2596 15.1173C10.2609 14.7204 10.226 14.3378 10.4156 13.9876C11.126 12.5748 13.166 12.7187 13.67 14.1579C13.7573 14.3948 13.7626 14.7704 13.76 15.1173C13.7567 15.5605 13.76 16.378 13.76 16.378"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="flex flex-col justify-center items-start gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-montserrat text-xl font-bold leading-[150%]">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-[#4B4B4B] font-montserrat text-sm font-normal leading-[150%] w-full">
                    Role-based permissions and data encryption built-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* From Lien Filing to Resolution Section */}
        <div className="w-full max-w-[1440px] mx-auto mt-16 lg:mt-24">
          <div className="flex justify-center items-center px-4 lg:px-20 py-16 lg:py-[83px] rounded-[70px] bg-[#0E121B]">
            <div className="flex flex-col lg:flex-row justify-between items-start w-full max-w-[1280px] gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="flex w-full lg:w-[483px] flex-col items-start gap-2.5 lg:gap-[18px]">
                <h2 className="text-[#E5E7EB] font-montserrat text-[32px] lg:text-[80px] font-bold leading-[120%] mb-4 lg:mb-[18px]">
                  From lien filing to resolution simplified.
                </h2>
                <p className="w-full lg:w-[458px] text-white font-montserrat text-base font-normal leading-[150%]">
                  Track and manage your entire lien process in one place — from
                  opening a case and submitting documentation to monitoring
                  legal status and collecting payments. Construct Collect gives
                  you full visibility, automation, and control over every
                  financial and legal step tied to your construction projects.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex w-full lg:w-[711px] justify-center items-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4d619172da2b05ca3bfe106ac4cb10194427653b?width=1422"
                  alt="Lien Process Workflow"
                  className="w-full max-w-[711px] h-auto rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Built for any business section */}
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col justify-center items-center gap-[18px] mb-16">
            <h2 className="max-w-[798px] text-[#0F0F0F] text-center font-montserrat text-[40px] font-bold leading-[120%] lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px]">
              Built for any business managing construction projects.
            </h2>
            <p className="max-w-[604px] text-[#4B4B4B] text-center font-montserrat text-base font-normal leading-[150%]">
              Construct Collect simplifies legal and financial tasks for any
              contractor, lender, or developer.
            </p>
          </div>

          {/* User Types Grid */}
          <div className="flex flex-col gap-7">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[50px]">
              {/* General Contractors */}
              <div className="flex flex-1 h-[480px] p-5 flex-col justify-end items-start gap-2.5 rounded-[14px] border border-[#1CC199] bg-white relative overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mb-2.5"
                >
                  <path
                    d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M18.9905 19C19.6182 18.3776 19.4637 17.2444 19.4637 16.4479C19.4637 15.4414 19.6838 14.9786 20.4006 14.2618C21.4669 13.1956 22 12.6624 22 12C22 11.3375 21.4669 10.8044 20.4006 9.73817M18.9905 19H19"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-roboto text-xl font-bold leading-[150%]">
                    General Contractors
                  </h3>
                  <p className="text-[#4B4B4B] font-roboto text-sm font-normal leading-[150%]">
                    Manage projects, liens, and payments across multiple jobs.
                  </p>
                </div>
                {/* Dashboard Images */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9f1e3ae92a7995537df7c4e694647bcfe678e440?width=1816"
                  alt="General Contractors Dashboard"
                  className="absolute -right-80 -top-30 w-[908px] h-[346px] rounded-[22px] shadow-[-33px_6px_33px_0_rgba(0,0,0,0.09),-8px_2px_18px_0_rgba(0,0,0,0.11)]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c485455a836c36c3c28d4dade04bd5f8ea6240d4?width=940"
                  alt="General Contractors Interface"
                  className="absolute -right-4 -top-16 w-[470px] h-[359px] rounded-[22px] shadow-[-204px_40px_58px_0_rgba(0,0,0,0.00),-74px_14px_45px_0_rgba(0,0,0,0.05),-8px_2px_18px_0_rgba(0,0,0,0.11)]"
                />
              </div>

              {/* Subcontractors */}
              <div className="flex flex-1 pt-32 items-center gap-2.5">
                <div className="flex flex-1 h-[480px] p-5 flex-col justify-end items-start gap-2.5 rounded-[14px] border border-[#9142E7] bg-white relative overflow-hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 mb-2.5"
                  >
                    <path
                      d="M21.5 12.95V11.05C21.5 7.01949 21.5 5.00424 20.1088 3.75212C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.89124 20.2479C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.2479C21.5 18.9958 21.5 16.9805 21.5 12.95Z"
                      stroke="#141B34"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M18 8H14M16 6V10"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 17.5H14"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 14.5H14"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 17.5L8.25 15.75M8.25 15.75L6.5 14M8.25 15.75L10 14M8.25 15.75L6.5 17.5"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 8H6"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex flex-col gap-2.5 w-full">
                    <h3 className="text-[#0F0F0F] font-roboto text-xl font-bold leading-[150%]">
                      Subcontractors
                    </h3>
                    <p className="text-[#4B4B4B] font-roboto text-sm font-normal leading-[150%]">
                      Keep control of disputes and cash flow with fewer delays.
                    </p>
                  </div>
                  {/* Dashboard Images */}
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/930638be5f4be6401240b665fbfbb0229281acb2?width=1202"
                    alt="Subcontractors Dashboard"
                    className="absolute -right-1 -top-6 w-[601px] h-[321px] rounded-lg shadow-[-204px_40px_58px_0_rgba(0,0,0,0.00),-74px_14px_45px_0_rgba(0,0,0,0.05),-8px_2px_18px_0_rgba(0,0,0,0.11)]"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7be61dd209ad78b4db23ef8070cc675d128d31af?width=2171"
                    alt="Subcontractors Interface"
                    className="absolute -right-[588px] top-4 w-[1085px] h-[325px] rounded-lg shadow-[0_293px_82px_0_rgba(0,0,0,0.00),0_187px_75px_0_rgba(0,0,0,0.01),0_105px_63px_0_rgba(0,0,0,0.05),0_47px_47px_0_rgba(0,0,0,0.09),0_12px_26px_0_rgba(0,0,0,0.10)]"
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[50px]">
              {/* Lenders & Financial Institutions */}
              <div className="flex flex-1 h-[511px] p-5 flex-col justify-end items-start gap-2.5 rounded-[14px] border border-[#1CC199] bg-white relative overflow-hidden">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mb-2.5"
                >
                  <path
                    d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5001 9.00003L13.5608 11.9394M13.5608 11.9394C13.2893 11.6679 12.9143 11.5 12.5001 11.5C11.6717 11.5 11.0001 12.1716 11.0001 13C11.0001 13.8285 11.6717 14.5 12.5001 14.5C13.3285 14.5 14.0001 13.8285 14.0001 13C14.0001 12.5858 13.8322 12.2108 13.5608 11.9394Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12.5 3.5V2"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 2H14.5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 15H5"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 19H7"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-2.5 w-full">
                  <h3 className="text-[#0F0F0F] font-roboto text-xl font-bold leading-[150%]">
                    Lenders & Financial Institutions
                  </h3>
                  <p className="text-[#4B4B4B] font-roboto text-sm font-normal leading-[150%]">
                    Mitigate risk and track legal exposure in real-time.
                  </p>
                </div>
                {/* Dashboard Images */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4c1246ce1e296498b3bab98d92dfb120da7ceb7b?width=1187"
                  alt="Lenders Dashboard"
                  className="absolute -left-60 -top-14 w-[593px] h-[359px] rounded-lg shadow-[0_293px_82px_0_rgba(0,0,0,0.00),0_187px_75px_0_rgba(0,0,0,0.01),0_105px_63px_0_rgba(0,0,0,0.05),0_47px_47px_0_rgba(0,0,0,0.09),0_12px_26px_0_rgba(0,0,0,0.10)]"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/88fcf4d5682fff6f5e9c158aea9f4ff4b13f0408?width=959"
                  alt="Lenders Interface"
                  className="absolute right-8 top-12 w-[479px] h-[306px] rounded-[10px] border-[19px] border-[#181A1B]"
                />
              </div>

              {/* Engineering & Architecture Firms */}
              <div className="flex flex-1 pt-28 items-center gap-2.5">
                <div className="flex flex-1 h-[480px] p-5 flex-col justify-end items-start gap-2.5 rounded-[14px] border border-[#9142E7] bg-white relative overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18 141 18 115 44q30 15 47 44t17 62v112zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320t-127.5 18-92.5 36q-9 5-14.5 14t-5.5 20zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620t5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720t14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5 21 1.5 19 4.5v54q0 9 5.5 14.5T422-720t14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620t-5.5 14.5T532-600h-10q0 66-47 113t-113 47m0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520m300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30zm20-70q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42zm28-90q21 0 35.5-14.5T832-700t-14.5-35.5T782-750t-35.5 14.5T732-700t14.5 35.5T782-650M362-200" />
                  </svg>
                  <div className="flex flex-col gap-2.5 w-full mb-2.5">
                    <h3 className="text-[#0F0F0F] font-roboto text-xl font-bold leading-[150%]">
                      Engineering & Architecture Firms
                    </h3>
                    <p className="text-[#4B4B4B] font-roboto text-sm font-normal leading-[150%]">
                      Ensure compliance and protect your stake in the process.
                    </p>
                  </div>
                  {/* Dashboard Images */}
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/997b4b98c8c70207d0e4d55b6dcf7b2fd42aab63?width=1295"
                    alt="Engineering Dashboard"
                    className="absolute -right-24 top-6 w-[648px] h-[346px] rounded-lg shadow-[-204px_40px_58px_0_rgba(0,0,0,0.00),-74px_14px_45px_0_rgba(0,0,0,0.05),-8px_2px_18px_0_rgba(0,0,0,0.11)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-[2250px] mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
          {/* Decorative Background Gradient */}
          <div className="absolute top-0 right-[939px] w-[1303px] h-[530px] transform rotate-[170.419deg] opacity-40 pointer-events-none">
            <svg
              width="993"
              height="1085"
              viewBox="0 0 993 1085"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full filter blur-[150px]"
            >
              <g filter="url(#filter0_f_testimonials)">
                <g filter="url(#filter1_f_testimonials)">
                  <ellipse
                    cx="624.375"
                    cy="191.289"
                    rx="624.375"
                    ry="191.289"
                    transform="matrix(-0.988619 0.150444 -0.184021 -0.982922 1574 668.479)"
                    fill="url(#paint0_radial_testimonials)"
                  />
                </g>
                <g filter="url(#filter2_f_testimonials)">
                  <ellipse
                    cx="399.334"
                    cy="91.9318"
                    rx="399.334"
                    ry="91.9318"
                    transform="matrix(-0.855201 0.518297 -0.597746 -0.801685 1042.66 387.019)"
                    fill="url(#paint1_radial_testimonials)"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_testimonials"
                  x="0.238403"
                  y="0.52861"
                  width="1839.58"
                  height="1084.09"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="150"
                    result="effect1_foregroundBlur_testimonials"
                  />
                </filter>
                <filter
                  id="filter1_f_testimonials"
                  x="153.241"
                  y="214.164"
                  width="1536.58"
                  height="720.453"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="75"
                    result="effect1_foregroundBlur_testimonials"
                  />
                </filter>
                <filter
                  id="filter2_f_testimonials"
                  x="200.238"
                  y="200.529"
                  width="891.91"
                  height="639.527"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="50"
                    result="effect1_foregroundBlur_testimonials"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_testimonials"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(624.375 191.289) rotate(90) scale(191.289 624.375)"
                >
                  <stop stopColor="#1CC199" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_testimonials"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(399.334 91.9318) rotate(90) scale(91.9318 399.334)"
                >
                  <stop stopColor="#9142E7" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Section Header */}
          <div className="flex flex-col items-center gap-[18px] mb-9 relative z-10">
            <h2 className="max-w-[606px] text-[#0F0F0F] text-center font-montserrat text-[40px] font-bold leading-[120%] lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px]">
              What They Say About Construct Collect
            </h2>
            <p className="max-w-[428px] text-[#0F0F0F] text-center font-montserrat text-base font-normal leading-[150%]">
              See how our partners streamlined their operations with our
              platform.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="flex flex-col gap-9 relative z-10">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row items-center gap-10 overflow-x-auto pb-4">
              <div className="flex gap-10">
                {/* Michael Torres */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[14px] border-2 border-[#9142E7] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4338de836373e6a1b77928879893ff8c61e80cc8?width=222"
                        alt="Michael Torres"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#9142E7] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Michael Torres
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          General Contractor
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "Construct Collect saved us countless hours on lien
                      tracking. It's now all centralized and automatic."
                    </blockquote>
                  </div>
                </div>

                {/* Sophia Nguyen */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[14px] border-2 border-[#1CC199] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/6155b7003e23f632f6647e3a268320aad749e39c?width=222"
                        alt="Sophia Nguyen"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#1CC199] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Sophia Nguyen
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          Project Manager
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "Since switching to Construct Collect, we reduced payment
                      delays by over 40%. The system just works."
                    </blockquote>
                  </div>
                </div>

                {/* Carlos Mendes */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[14px] border-2 border-[#9142E7] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d23740fd19271bbbdba1dfde4500b2f2ef3af182?width=222"
                        alt="Carlos Mendes"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#9142E7] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Carlos Mendes
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          Subcontractor Lead
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "Legal disputes are down, our processes are documented,
                      and our team is aligned. What more can we ask for?"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row items-center gap-10 overflow-x-auto pb-4">
              <div className="flex gap-10">
                {/* David Chen */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[24px] border-2 border-[#1CC199] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/389ff30550c1761005d664ee1a0bce00ba89638b?width=222"
                        alt="David Chen"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#1CC199] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Dena Chen
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          Property Owner
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "We've finally aligned our legal, accounting, and project
                      teams thanks to Construct Collect."
                    </blockquote>
                  </div>
                </div>

                {/* Emily Robinson */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[24px] border-2 border-[#9142E7] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/5e227023823d69e4922661909dc7fedd491de471?width=222"
                        alt="Emily Robinson"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#AC3FFC] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Emily Robinson
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          Residential Builder
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "This tool is a game-changer for small builders like us.
                      We look more professional and work more efficiently."
                    </blockquote>
                  </div>
                </div>

                {/* Isabella Martinez */}
                <div className="flex w-[418px] h-[290px] p-6 flex-col justify-center items-center gap-2.5 rounded-[14px] border-2 border-[#1CC199] bg-white flex-shrink-0">
                  <div className="flex w-[351px] flex-col justify-center items-center gap-7">
                    <div className="flex items-center gap-6 w-full">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/aaf5cb55fa0fbe78556bed5f23f74ad27e9b403b?width=222"
                        alt="Isabella Martinez"
                        className="w-[111px] h-[74px] rounded-[10px] border border-[#1CC199] object-cover"
                      />
                      <div className="flex w-[166px] flex-col items-start gap-[7px]">
                        <h3 className="text-black font-montserrat text-2xl font-semibold leading-[110%] tracking-[-1px] capitalize">
                          Isabella Martinez
                        </h3>
                        <p className="text-[#494949] font-montserrat text-sm font-normal leading-[110%] capitalize">
                          Operations Manager
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-black font-montserrat text-lg font-normal leading-[150%] text-center">
                      "Managing multiple vendors and lien waivers used to be a
                      nightmare. Construct Collect made it seamless."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="relative w-full h-[545px] rounded-[70px] bg-white overflow-hidden">
            {/* Purple Logo Background Element */}
            <div className="absolute left-[-428px] top-[332px] w-[562px] h-[614px] transform rotate-[95.152deg] opacity-30">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/dc758ae7f1f7de6fb71f8b8a6f50a9f57f4b5369?width=1123"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center h-full">
              {/* Left Content */}
              <div className="flex-1 px-6 lg:pl-[74px] lg:pr-[50px] py-12 lg:py-[75px]">
                <div className="max-w-[607px] flex flex-col gap-6 lg:gap-[25px]">
                  {/* Heading and Subtext */}
                  <div className="flex flex-col gap-4 lg:gap-[18px]">
                    <h2 className="text-[#0F0F0F] font-montserrat text-[32px] lg:text-[54px] font-bold leading-[110%] lg:leading-[110%]">
                      Ready to simplify your lien and collections process?
                    </h2>
                    <p className="max-w-[483px] text-[#56595B] font-montserrat text-base lg:text-lg font-normal leading-[150%]">
                      Start using Construct Collect today or schedule a live
                      demo with our team.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-[25px]">
                    {/* Primary CTA - Start Now */}
                    <div className="relative">
                      <div className="flex h-[63px] px-1 justify-center items-center rounded-[18px] relative">
                        {/* Gradient Background */}
                        <div
                          className="absolute w-full h-[60px] rounded-full opacity-60"
                          style={{
                            background:
                              "linear-gradient(270deg, #9142E7 0%, #9142E7 45.93%, #1CC199 100%)",
                            filter: "blur(2.5px)",
                            transform: "rotate(-10.246deg)",
                            right: "0",
                            top: "0",
                          }}
                        />
                        <button className="text-white text-center font-montserrat text-base font-semibold leading-[150%] flex px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-[#0F0F0F] relative z-10 hover:bg-gray-800 transition-colors">
                          Start Now
                        </button>
                      </div>
                    </div>

                    {/* Secondary CTA - Talk to our team */}
                    <button className="border border-[#1CC199] text-[#0F0F0F] text-center font-montserrat text-base font-semibold leading-[150%] flex px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-white relative z-10 hover:bg-gray-50 transition-colors">
                      Talk to our team
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Dashboard Image */}
              <div className="flex-1 hidden lg:block">
                <div className="w-[708px] h-[651px] ml-auto">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f1bcef4d5ebcaa43143403714416bcb5f3ba8bcd?width=1416"
                    alt="Dashboard Interface"
                    className="w-full h-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Dashboard Preview */}
            <div className="lg:hidden px-6 pb-6">
              <div className="w-full max-w-[400px] mx-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f1bcef4d5ebcaa43143403714416bcb5f3ba8bcd?width=1416"
                  alt="Dashboard Interface"
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
