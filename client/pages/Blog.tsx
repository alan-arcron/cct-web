import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background Gradient */}
      <div className="absolute -left-[245px] -top-[1017px] w-[1679px] h-[1731px] transform rotate-[11.962deg] bg-gradient-to-r from-transparent via-[rgba(145,66,231,0.45)] to-transparent opacity-60 pointer-events-none" />

      <Navigation />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-[101px] pt-24 pb-16">
        {/* Page Header */}
        <div className="max-w-[1238px] mx-auto mb-14">
          <div className="flex flex-col gap-10 lg:gap-[42px]">
            {/* Header Text */}
            <div className="flex flex-col gap-6 lg:gap-[25px]">
              <h1 className="text-[#0A0A0A] font-montserrat text-[40px] lg:text-[64px] font-bold leading-[42px] lg:leading-[42px]">
                Construct Collect Journal
              </h1>
              <p className="max-w-[851px] text-[#0A0A0A] font-montserrat text-lg lg:text-xl font-normal leading-[113%]">
                Articles and insights about collections, accounting, litigation
                and innovation in the construction industry.
              </p>
            </div>

            {/* Featured Article */}
            <Link to="/blog/automation-collections" className="block">
              <div className="relative h-[400px] lg:h-[598px] rounded-[38px] border border-black/10 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.44) 100%), url('https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fddac1ceb615d45aa86beba00174f9c94?format=webp&width=800')",
                  }}
                />
                <div className="absolute inset-0 bg-black/18 backdrop-blur-[21.5px]" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                  <div className="max-w-[1076px]">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Lien
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Accounting
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #ConstructionTech
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Litigation
                      </span>
                    </div>

                    {/* Article Content */}
                    <div className="space-y-4">
                      <h2 className="text-white font-montserrat text-2xl lg:text-[30px] font-bold leading-[35px]">
                        How automation is changing the collections sector in
                        construction
                      </h2>
                      <p className="text-white font-montserrat text-sm lg:text-[15px] font-normal leading-[144%]">
                        Discover how new automation technologies are
                        revolutionizing billing processes in the construction
                        industry, increasing efficiency and reducing operational
                        costs.
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-2">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                          >
                            <path
                              d="M11.0834 12.5V11.3333C11.0834 10.7145 10.8375 10.121 10.3999 9.68342C9.96235 9.24583 9.36886 9 8.75002 9H5.25002C4.63118 9 4.03769 9.24583 3.6001 9.68342C3.16252 10.121 2.91669 10.7145 2.91669 11.3333V12.5"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00002 6.66667C8.28868 6.66667 9.33335 5.622 9.33335 4.33333C9.33335 3.04467 8.28868 2 7.00002 2C5.71136 2 4.66669 3.04467 4.66669 4.33333C4.66669 5.622 5.71136 6.66667 7.00002 6.66667Z"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-white font-inter text-xs">
                            Jane Doe
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M5.28668 1.41675V3.75008"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.95331 1.41675V3.75008"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7033 2.58325H3.53666C2.89233 2.58325 2.37 3.10559 2.37 3.74992V11.9166C2.37 12.5609 2.89233 13.0833 3.53666 13.0833H11.7033C12.3477 13.0833 12.87 12.5609 12.87 11.9166V3.74992C12.87 3.10559 12.3477 2.58325 11.7033 2.58325Z"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.37 6.08325H12.87"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-white font-inter text-xs">
                            July 10, 2025
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.79004 3.75V7.25L10.1234 8.41667"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.79 13.0834C11.0117 13.0834 13.6233 10.4717 13.6233 7.25008C13.6233 4.02842 11.0117 1.41675 7.79 1.41675C4.56834 1.41675 1.95667 4.02842 1.95667 7.25008C1.95667 10.4717 4.56834 13.0834 7.79 13.0834Z"
                              stroke="white"
                              strokeWidth="1.16667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-white font-inter text-xs">
                            12 min read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Blog Posts Section */}
        <div className="max-w-[1210px] mx-auto">
          <div className="space-y-9">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-[#0A0A0A] font-montserrat text-[32px] lg:text-[48px] font-bold leading-[31.5px]">
                Featured blog posts
              </h2>
              <p className="text-[#353535] font-montserrat text-sm lg:text-[15px] font-normal leading-[120%]">
                Essential insights for construction industry professionals
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-10">
              {/* First Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {/* Post 1 */}
                <Link to="/blog/lien-rights-management" className="block">
                  <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-[251px] bg-gray-100 relative">
                      <img
                        src="https://cdn.builder.io/o/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fdcfbe80bd39f499ebba2b11c1c85a58a?alt=media&token=d2e20782-42e4-45d2-8f63-ad17bb554b2e&apiKey=03ea23fe0fb94d879eff108b1cc9fb60"
                        alt="Lien Rights Management"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                          #Lien
                        </span>
                        <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                          #Legal
                        </span>
                      </div>
                      <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                        Lien Rights Management: Complete Guide for Contractors
                      </h3>
                      <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                        Understand how to protect your collection rights and
                        avoid losses in construction projects through ...
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                            >
                              <path
                                d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[#717182] font-inter text-xs">
                              Carlos Silva
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                            >
                              <path
                                d="M3.83997 1.125V2.875"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.33997 1.125V2.875"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1.65247 4.625H9.52747"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[#717182] font-inter text-xs">
                              July 8, 2025
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#717182] font-inter text-xs">
                            8 min read
                          </span>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M7.0625 1.5625H9.6875V4.1875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.875 6.375L9.6875 1.5625"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>

                {/* Post 2 */}
                <Link to="/blog/accounting-automation" className="block">
                  <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="h-[251px] bg-gray-100">
                      <img
                        src="https://cdn.builder.io/o/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F4cd13da4c7be42c095ccbbe5d1af11e2?alt=media&token=45acdc43-ed9f-4af7-8e64-8f093790033b&apiKey=03ea23fe0fb94d879eff108b1cc9fb60"
                        alt="Accounting Automation"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                          #Accounting
                        </span>
                        <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                          #Automation
                        </span>
                      </div>
                      <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                        Accounting Automation in Construction: Benefits and
                        Implementation
                      </h3>
                      <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                        Discover how to implement accounting automation systems
                        in construction companies to increase…
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                            >
                              <path
                                d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[#717182] font-inter text-xs">
                              Marina Santos
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                            >
                              <path
                                d="M3.83997 1.125V2.875"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.33997 1.125V2.875"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1.65247 4.625H9.52747"
                                stroke="#717182"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-[#717182] font-inter text-xs">
                              July 5, 2025
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#717182] font-inter text-xs">
                            10 min read
                          </span>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M7.0625 1.5625H9.6875V4.1875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.875 6.375L9.6875 1.5625"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>

                {/* Post 3 */}
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3dd534f0a84365b689908b04f5b7ae260299f883?width=766"
                      alt="Litigation in Construction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Litigation
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Legal
                      </span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                      Litigation in Construction: Prevention and Resolution
                      Strategies
                    </h3>
                    <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                      Learn about the main strategies to prevent and resolve
                      disputes in the construction sector effectively.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            Roberto Lima
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M3.83997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.65247 4.625H9.52747"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            July 3, 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#717182] font-inter text-xs">
                          15 min read
                        </span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M7.0625 1.5625H9.6875V4.1875"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.875 6.375L9.6875 1.5625"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {/* Post 4 */}
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/2173203878ea4f2a001a133f3e1e834fee1334e8?width=766"
                      alt="Technology on the Job Site"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #ConstructionTech
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Finance
                      </span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                      Technology on the Job Site: Financial Management Tools
                    </h3>
                    <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                      Explore the latest technological tools for financial
                      management on job sites and their…
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            Ana Paula
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M3.83997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.65247 4.625H9.52747"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            July 1, 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#717182] font-inter text-xs">
                          12 min read
                        </span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M7.0625 1.5625H9.6875V4.1875"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.875 6.375L9.6875 1.5625"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Post 5 */}
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/90a273d5facdaf8f4ebf3bd5fbccc6138cefcdc1?width=766"
                      alt="Compliance and Regulation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Compliance
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Regulation
                      </span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                      Compliance and Regulation in the Construction Sector
                    </h3>
                    <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                      Stay updated on the key regulations and compliance
                      practices for…
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            Pedro Oliveira
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M3.83997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.65247 4.625H9.52747"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            June 28, 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#717182] font-inter text-xs">
                          9 min read
                        </span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M7.0625 1.5625H9.6875V4.1875"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.875 6.375L9.6875 1.5625"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Post 6 */}
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b112f99cdbf82d3b30f449c76b5bcc9050e15111?width=766"
                      alt="Trends in Collections"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-1">
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Trends
                      </span>
                      <span className="px-2 py-1 bg-[#ECEEF2] rounded-md text-[#030213] font-inter text-xs">
                        #Future
                      </span>
                    </div>
                    <h3 className="text-[#0A0A0A] font-inter text-[15px] font-normal leading-[24.5px]">
                      Trends in Collections: The Future of the Construction
                      Sector
                    </h3>
                    <p className="text-[#717182] font-inter text-xs leading-[17.5px]">
                      Analyze the key trends that are shaping the future of
                      collections in the construction industry.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M8.3125 9.4375V8.5625C8.3125 8.09837 8.12813 7.65325 7.79994 7.32506C7.47175 6.99687 7.02663 6.8125 6.5625 6.8125H3.9375C3.47337 6.8125 3.02825 6.99687 2.70006 7.32506C2.37187 7.65325 2.1875 8.09837 2.1875 8.5625V9.4375"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.25 5.0625C6.2165 5.0625 7 4.279 7 3.3125C7 2.346 6.2165 1.5625 5.25 1.5625C4.2835 1.5625 3.5 2.346 3.5 3.3125C3.5 4.279 4.2835 5.0625 5.25 5.0625Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            Lucia Ferreira
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                          >
                            <path
                              d="M3.83997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.33997 1.125V2.875"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.65247 2H2.52747C2.04422 2 1.65247 2.39175 1.65247 2.875V9C1.65247 9.48325 2.04422 9.875 2.52747 9.875H8.65247C9.13572 9.875 9.52747 9.48325 9.52747 9V2.875C9.52747 2.39175 9.13572 2 8.65247 2Z"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.65247 4.625H9.52747"
                              stroke="#717182"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[#717182] font-inter text-xs">
                            June 25, 2025
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#717182] font-inter text-xs">
                          11 min read
                        </span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <path
                            d="M7.0625 1.5625H9.6875V4.1875"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.875 6.375L9.6875 1.5625"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.375 5.9375V8.5625C8.375 8.79456 8.28281 9.01712 8.11872 9.18122C7.95462 9.34531 7.73206 9.4375 7.5 9.4375H2.6875C2.45544 9.4375 2.23288 9.34531 2.06878 9.18122C1.90469 9.01712 1.8125 8.79456 1.8125 8.5625V3.75C1.8125 3.51794 1.90469 3.29538 2.06878 3.13128C2.23288 2.96719 2.45544 2.875 2.6875 2.875H5.3125"
                            stroke="#717182"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* View All Posts Button */}
              <div className="flex justify-center pt-8">
                <button className="flex items-center justify-center h-[63px] px-5 bg-[#0F0F0F] rounded-[18px] hover:bg-gray-800 transition-colors">
                  <span className="text-white font-montserrat text-sm font-semibold leading-6">
                    View all posts
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
