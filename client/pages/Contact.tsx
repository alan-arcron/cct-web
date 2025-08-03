import Navigation from "@/components/Navigation";
import Icon from "@/assets/images/CC-logo-symbol.png";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      <Navigation />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch w-full">
          {/* Contact Form */}
          <div className="flex-1 w-full flex flex-col">
            <div className="bg-white rounded-[30px] p-6 lg:p-12 shadow-sm flex-grow">
              <div className="max-w-[504px] mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="space-y-8">
                    <h1 className="text-[#0A0A0A] font-montserrat text-[32px] lg:text-[40px] font-bold leading-[100%]">
                      Let's Talk.
                    </h1>
                    <p className="text-[#717182] font-montserrat text-sm lg:text-[15px] font-normal leading-[139%]">
                      Have questions, need support, or want to talk to our team?
                      Send us a message and we'll get back to you within a
                      business day.
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* First and Last Name Row */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-[#0A0A0A] font-inter text-xs font-normal mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full h-[47px] px-3 bg-[#F3F3F5] rounded-md border-none outline-none text-[#717182] font-inter text-xs placeholder:text-[#717182]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-[#0A0A0A] font-inter text-xs font-normal mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full h-[47px] px-3 bg-[#F3F3F5] rounded-md border-none outline-none text-[#717182] font-inter text-xs placeholder:text-[#717182]"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[#0A0A0A] font-inter text-xs font-normal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-[46px] px-3 bg-[#F3F3F5] rounded-md border-none outline-none text-[#717182] font-inter text-xs placeholder:text-[#717182]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#0A0A0A] font-inter text-xs font-normal mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="w-full h-[103px] px-3 py-2 bg-[#F3F3F5] rounded-md border-none outline-none text-[#717182] font-inter text-xs placeholder:text-[#717182] resize-none"
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="w-[14px] h-[14px] rounded border border-black/10 bg-[#F3F3F5] shadow-sm"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-[#0A0A0A] font-inter text-[11px] font-normal"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-[#030213] underline">
                        privacy policy
                      </a>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button className="text-white text-center font-montserrat text-base font-semibold leading-[150%] flex px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-[#0F0F0F] relative z-10 hover:bg-gray-800 transition-colors">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Get in Touch Info Card */}
          <div className="flex-1 w-full flex flex-col">
            <div className="flex items-center justify-center flex-grow">
              <img src={Icon} alt="Construct Collect" className="w-full" />

              {/* Contact Info Card */}
              {/* <div className="bg-white rounded-[30px] p-8 shadow-sm">
                <div className="max-w-[415px]">
                  <div className="mb-9">
                    <h2 className="text-[#0A0A0A] font-montserrat text-[28px] lg:text-[32px] font-semibold leading-[100%] mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-[#717182] font-montserrat text-lg lg:text-xl font-normal leading-[121%]">
                      Our team is here to help. Reach out through any of these
                      channels.
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-[35px] h-[35px] bg-black/10 rounded-lg">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M16.0413 5.35352L9.4854 9.52945C9.26293 9.65867 9.01023 9.72673 8.75296 9.72673C8.49568 9.72673 8.24298 9.65867 8.02051 9.52945L1.45801 5.35352"
                            stroke="#030213"
                            strokeWidth="1.45833"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.583 3.16602H2.91634C2.11093 3.16602 1.45801 3.81893 1.45801 4.62435V13.3743C1.45801 14.1798 2.11093 14.8327 2.91634 14.8327H14.583C15.3884 14.8327 16.0413 14.1798 16.0413 13.3743V4.62435C16.0413 3.81893 15.3884 3.16602 14.583 3.16602Z"
                            stroke="#030213"
                            strokeWidth="1.45833"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[#717182] font-montserrat text-xs font-normal">
                          Email
                        </div>
                        <div className="text-[#0A0A0A] font-montserrat text-sm font-normal">
                          contact@constructcollect.com
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-[35px] h-[35px] bg-black/10 rounded-lg">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M10.0855 12.3315C10.2361 12.4006 10.4058 12.4164 10.5665 12.3763C10.7273 12.3361 10.8696 12.2424 10.97 12.1105L11.2288 11.7715C11.3647 11.5904 11.5408 11.4434 11.7433 11.3421C11.9458 11.2409 12.1691 11.1882 12.3955 11.1882H14.583C14.9698 11.1882 15.3407 11.3418 15.6142 11.6153C15.8877 11.8888 16.0413 12.2597 16.0413 12.6465V14.834C16.0413 15.2208 15.8877 15.5917 15.6142 15.8652C15.3407 16.1387 14.9698 16.2923 14.583 16.2923C11.102 16.2923 7.76365 14.9095 5.30223 12.4481C2.84082 9.98668 1.45801 6.64828 1.45801 3.16732C1.45801 2.78054 1.61165 2.40961 1.88514 2.13612C2.15863 1.86263 2.52957 1.70898 2.91634 1.70898H5.10384C5.49062 1.70898 5.86155 1.86263 6.13504 2.13612C6.40853 2.40961 6.56217 2.78054 6.56217 3.16732V5.35482C6.56217 5.58122 6.50946 5.80451 6.40821 6.007C6.30697 6.2095 6.15996 6.38565 5.97884 6.52148L5.63759 6.77742C5.50373 6.87963 5.40938 7.02504 5.37056 7.18893C5.33175 7.35282 5.35087 7.52509 5.42467 7.67648C6.42121 9.70055 8.06019 11.3375 10.0855 12.3315Z"
                            stroke="#030213"
                            strokeWidth="1.45833"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[#717182] font-montserrat text-xs font-normal">
                          Phone
                        </div>
                        <div className="text-[#0A0A0A] font-montserrat text-sm font-normal">
                          (800) 555-0199
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10">
                    <div className="text-[#717182] font-montserrat text-[11px] font-normal leading-[17px]">
                      <span className="font-bold">Business Hours:</span>
                      <br />
                      Monday - Friday: 8:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 9:00 AM - 2:00 PM EST
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
