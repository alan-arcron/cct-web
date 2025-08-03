import Logo from "@/assets/images/CC-logo-H.png";

const Footer = () => {
  return (
    <footer className="relative mt-16 lg:mt-24">
      <div className="w-full px-4 lg:px-20 py-20 lg:py-[80px] bg-[#0F0F0F] rounded-t-[70px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-16 lg:gap-[65px]">
            {/* Logo */}
            <div className="flex justify-start">
              <img
                src={Logo}
                alt="Construct Collect Logo"
                className="w-[149px] h-[47px] object-contain"
              />
            </div>

            {/* Footer Content */}
            <div className="flex flex-col gap-10 lg:gap-[42px]">
              {/* Main Footer Links and Newsletter */}
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                {/* Footer Links - 3 Columns */}
                <div className="flex flex-col lg:flex-row justify-between w-full lg:w-[680px] gap-8 lg:gap-0">
                  {/* Platform Column */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[#F5F5F5] font-montserrat text-2xl font-bold leading-[150%] mb-2.5">
                      Platform
                    </h3>
                    <a
                      href="/platform"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      Dashboard
                    </a>
                    <a
                      href="/platform"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      Features
                    </a>
                    <a
                      href="/use-cases"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      Use Cases
                    </a>
                  </div>

                  {/* Company Column */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[#F5F5F5] font-montserrat text-2xl font-bold leading-[150%] mb-2.5">
                      Company
                    </h3>
                    <a
                      href="/contact"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      Careers
                    </a>
                    <a
                      href="/contact"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      Blog
                    </a>
                  </div>

                  {/* Get in Touch Column */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-[#F5F5F5] font-montserrat text-2xl font-bold leading-[150%] mb-2.5">
                      Get in touch
                    </h3>
                    <a
                      href="mailto:support@constructcollect.com"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] hover:opacity-70 transition-opacity"
                    >
                      📧 support@constructcollect.com
                    </a>
                    <div className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%]">
                      📍 Ft. Lauderdale, FL
                    </div>
                    <a
                      href="https://www.constructcollect.com"
                      className="text-[#F5F5F5] font-roboto text-xl font-normal leading-[150%] underline hover:opacity-70 transition-opacity"
                    >
                      🌐 www.constructcollect.com
                    </a>
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col w-full lg:w-[552px] gap-10 lg:gap-[42px]">
                  <h3 className="text-white font-montserrat text-xl font-medium leading-[110%]">
                    Subscribe to our newsletter
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2">
                    {/* Email Input */}
                    <div className="flex-1">
                      <div className="flex items-center h-[63px] px-3 border border-white/16 rounded-[18px] bg-white/20 backdrop-blur-sm">
                        <input
                          type="email"
                          placeholder="Example@email.com"
                          className="flex-1 bg-transparent text-[#D9D9D9] font-montserrat text-base font-normal leading-6 placeholder-[#D9D9D9] outline-none"
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex h-[63px] px-1 justify-center items-center rounded-[18px] relative">
                      {/* Gradient Background */}
                      <div
                        className="absolute w-full h-[60px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(270deg, #9142E7 0%, #9142E7 45.93%, #1CC199 100%)",
                          filter: "blur(2.5px)",
                          transform: "rotate(-10.246deg)",
                          right: "0",
                          top: "0",
                        }}
                      />
                      <button className="border border-[#1CC199] text-[#0F0F0F] text-center font-montserrat text-base font-semibold leading-[150%] flex px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-white relative z-10 hover:bg-gray-50 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-3.5 border-t border-[#F5F5F5] gap-4">
                <div className="text-white font-montserrat text-lg font-normal leading-7">
                  Copyright © 2025{" "}
                  <span className="font-bold">Construct Collect</span>
                </div>
                <div className="text-white font-montserrat text-lg font-medium leading-7">
                  All rights reserved |{" "}
                  <a
                    href="#"
                    className="text-[#3B82F6] hover:opacity-70 transition-opacity"
                  >
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a
                    href="#"
                    className="text-[#3B82F6] hover:opacity-70 transition-opacity"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Large Background Text */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
            <div
              className="text-[#4B4B4B] font-bold uppercase leading-[120%] select-none text-center"
              style={{
                fontSize: "clamp(60px, 8vw, 130px)",
                transform: "translateY(20%)",
                fontFamily:
                  "TT Firs Neue Trl, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              constructcollect
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
