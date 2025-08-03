import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Introduction",
  ]);

  const getBlogPostData = (postId: string) => {
    const blogPosts = {
      "automation-collections": {
        title:
          "How automation is changing the collections sector in construction",
        author: "Jane Doe",
        date: "July 10, 2025",
        readTime: "12 min read",
        tags: ["#Lien", "#Accounting", "#ConstructionTech", "#Litigation"],
        coverImage:
          "https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fddac1ceb615d45aa86beba00174f9c94?format=webp&width=800",
        excerpt:
          "Articles and insights on collections, accounting, litigation, and innovation in the construction industry.",
        contentImage:
          "https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F26d018cb6cd24a42a51853925ab1e54e?format=webp&width=800",
        sections: [
          {
            id: "introduction",
            title: "Introduction",
            description:
              "Overview of automation and its relevance to the construction industry.",
            content:
              "Automation is rapidly transforming industries worldwide — and construction is no exception. In a sector historically known for manual processes and legacy systems, automation introduces a much-needed shift toward efficiency. This article explores how automation is reshaping the collections landscape in construction, optimizing everything from invoicing to debt recovery.",
          },
          {
            id: "traditional-collections",
            title: "The Traditional Collections Process in Construction",
            description: "",
            content:
              "Before automation, billing and collections in construction were often slow, fragmented, and error-prone. Manual invoice tracking, paper-based documentation, and delayed communications created bottlenecks, cash flow issues, and increased the risk of disputes. These inefficiencies impacted both small contractors and large firms alike, reducing financial predictability.",
          },
          {
            id: "automation-benefits",
            title: "What Automation Brings to the Table",
            description: "",
            content:
              "Automation introduces consistency, speed, and accuracy into the collections workflow. Tasks like invoice generation, payment reminders, lien management, and compliance tracking can now be streamlined with minimal manual input. As a result, companies benefit from reduced human error, faster payments, and a clearer overview of receivables — all while improving client communication and internal accountability.",
          },
          {
            id: "automation-tools",
            title: "Automation Tools Revolutionizing the Sector",
            description: "",
            content:
              "Modern automation tools are specifically designed for the construction industry's unique needs. From AI-powered invoice processing to automated lien management systems, these technologies are transforming how companies handle their financial operations.",
          },
          {
            id: "real-world-impact",
            title: "Real-World Impact: Efficiency & Cost Reduction",
            description: "",
            content:
              "Firms that adopt automation report significant improvements in operational efficiency and cost savings. Reduced administrative workload, faster dispute resolution, and improved cash flow forecasting are just a few measurable outcomes. In many cases, automation has cut days — or even weeks — from the collections cycle, giving businesses a competitive edge in an increasingly demanding industry.",
          },
        ],
      },
      "lien-rights-management": {
        title: "Lien Rights Management: Complete Guide for Contractors",
        author: "Carlos Silva",
        date: "July 8, 2025",
        readTime: "8 min read",
        tags: ["#Lien", "#Legal"],
        coverImage:
          "https://cdn.builder.io/o/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fdcfbe80bd39f499ebba2b11c1c85a58a?alt=media&token=d2e20782-42e4-45d2-8f63-ad17bb554b2e&apiKey=03ea23fe0fb94d879eff108b1cc9fb60",
        excerpt:
          "Understand how to protect your collection rights and avoid losses in construction projects through effective lien management strategies.",
        contentImage:
          "https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F7ca53048471347dab2a76b28a6669b42?format=webp&width=800",
        sections: [
          {
            id: "introduction",
            title: "Introduction",
            description:
              "Overview of lien rights and their importance in construction.",
            content:
              "Lien rights are crucial protections for contractors and suppliers in the construction industry. Understanding how to properly establish, preserve, and enforce these rights can mean the difference between getting paid and suffering significant financial losses.",
          },
        ],
      },
      "accounting-automation": {
        title:
          "Accounting Automation in Construction: Benefits and Implementation",
        author: "Marina Santos",
        date: "July 5, 2025",
        readTime: "10 min read",
        tags: ["#Accounting", "#Automation"],
        coverImage:
          "https://cdn.builder.io/o/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F4cd13da4c7be42c095ccbbe5d1af11e2?alt=media&token=45acdc43-ed9f-4af7-8e64-8f093790033b&apiKey=03ea23fe0fb94d879eff108b1cc9fb60",
        excerpt:
          "Discover how to implement accounting automation systems in construction companies to increase efficiency and reduce operational costs.",
        contentImage:
          "https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fa91e6b61c2fe46e3af7789f0f3176e8a?format=webp&width=800",
        sections: [
          {
            id: "introduction",
            title: "Introduction",
            description:
              "Overview of accounting automation and its relevance to construction.",
            content:
              "The construction industry is rapidly embracing digital transformation, and accounting automation is at the forefront of this change. By implementing automated systems, construction companies can streamline their financial processes, reduce errors, and focus on strategic growth.",
          },
        ],
      },
    };

    return blogPosts[postId as keyof typeof blogPosts] || null;
  };

  const post = getBlogPostData(id || "");

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
        <Navigation />

        <div className="max-w-[1440px] mx-auto px-4 lg:px-[101px] pt-24 pb-16">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[#0A0A0A] font-montserrat text-[48px] font-bold leading-[50px] mb-6">
              Post Not Found
            </h1>
            <p className="text-[#353535] font-montserrat text-lg mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center h-[48px] px-6 bg-[#0F0F0F] text-white rounded-[18px] font-montserrat font-semibold hover:bg-gray-800 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background Gradient */}
      <div className="absolute -left-[245px] -top-[1017px] w-[1679px] h-[1731px] transform rotate-[11.962deg] bg-gradient-to-r from-transparent via-[rgba(145,66,231,0.45)] to-transparent opacity-60 pointer-events-none" />

      <Navigation />

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 pt-12 lg:pt-[195px]">
        <div className="max-w-[1280px] mx-auto mb-14">
          <div className="flex flex-col gap-14 lg:gap-[56px]">
            <div className="flex flex-col gap-10 lg:gap-[42px]">
              <div className="flex flex-col gap-6 lg:gap-[27px]">
                <div className="flex flex-col gap-6 lg:gap-[25px] py-[18px]">
                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#3B3B3B] rounded-md text-white font-inter text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Subtitle */}
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[#0A0A0A] font-montserrat text-[40px] lg:text-[64px] font-bold leading-[100%]">
                      {post.title}
                    </h1>
                    <p className="max-w-[851px] text-[#0A0A0A] font-montserrat text-lg lg:text-xl font-normal leading-[113%]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                      <path
                        d="M11.0834 12.5V11.3333C11.0834 10.7145 10.8376 10.121 10.4 9.68342C9.96241 9.24583 9.36892 9 8.75008 9H5.25008C4.63124 9 4.03775 9.24583 3.60017 9.68342C3.16258 10.121 2.91675 10.7145 2.91675 11.3333V12.5"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.00008 6.66667C8.28875 6.66667 9.33341 5.622 9.33341 4.33333C9.33341 3.04467 8.28875 2 7.00008 2C5.71142 2 4.66675 3.04467 4.66675 4.33333C4.66675 5.622 5.71142 6.66667 7.00008 6.66667Z"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-black font-inter text-xs">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M5.28687 1.41675V3.75008"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.95337 1.41675V3.75008"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.7035 2.58325H3.53678C2.89245 2.58325 2.37012 3.10559 2.37012 3.74992V11.9166C2.37012 12.5609 2.89245 13.0833 3.53678 13.0833H11.7035C12.3478 13.0833 12.8701 12.5609 12.8701 11.9166V3.74992C12.8701 3.10559 12.3478 2.58325 11.7035 2.58325Z"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.37012 6.08325H12.8701"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-black font-inter text-xs">
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M7.79004 3.75V7.25L10.1234 8.41667"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.79012 13.0834C11.0118 13.0834 13.6235 10.4717 13.6235 7.25008C13.6235 4.02842 11.0118 1.41675 7.79012 1.41675C4.56846 1.41675 1.95679 4.02842 1.95679 7.25008C1.95679 10.4717 4.56846 13.0834 7.79012 13.0834Z"
                        stroke="black"
                        strokeWidth="1.16667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-black font-inter text-xs">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-[400px] lg:h-[598px] rounded-[30px] border border-black/10 shadow-sm overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${post.coverImage}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/18 backdrop-blur-[23.9px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 pb-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Table of Contents Sidebar */}
          <div className="w-full lg:w-[414px] lg:flex-shrink-0">
            <div className="sticky top-8">
              <div className="flex flex-col">
                {/* TOC Header */}
                <div className="flex justify-between items-center py-4 border-b border-[#BFBFBF]">
                  <h2 className="text-black font-montserrat text-[28px] font-bold leading-[100%]">
                    Table of contents
                  </h2>
                  <button className="p-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12.001 5V19.002"
                        stroke="#141B34"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.002 12.002H5"
                        stroke="#141B34"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* TOC Sections */}
                {post.sections.map((section, index) => (
                  <div key={section.id} className="border-b border-[#BFBFBF]">
                    <div className="py-4">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <span className="text-black font-montserrat text-lg font-medium leading-[100%] text-left">
                          {section.title}
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`transition-transform ${expandedSections.includes(section.id) ? "rotate-180" : ""}`}
                        >
                          {expandedSections.includes(section.id) ? (
                            <path
                              d="M6 15C6 15 10.4189 9 12 9C13.5812 9 18 15 18 15"
                              stroke="#3C3C3C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ) : (
                            <>
                              <path
                                d="M12.001 5V19.002"
                                stroke="#141B34"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M19.002 12.002H5"
                                stroke="#141B34"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </>
                          )}
                        </svg>
                      </button>
                      {expandedSections.includes(section.id) &&
                        section.description && (
                          <p className="mt-6 text-[#494949] font-montserrat text-sm leading-[134%] max-w-[351px]">
                            {section.description}
                          </p>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="flex-1 max-w-[848px]">
            <div className="flex flex-col gap-12 lg:gap-[51px]">
              {post.sections.map((section, index) => (
                <div
                  key={section.id}
                  className="flex flex-col gap-6 lg:gap-[38px]"
                >
                  <div className="flex flex-col gap-6 lg:gap-[26px]">
                    <h2 className="text-black font-montserrat text-[32px] lg:text-[42px] font-bold leading-[100%]">
                      {section.title}
                    </h2>
                    <p className="text-[#4D4D4D] font-montserrat text-lg lg:text-xl font-normal leading-[142%] text-justify">
                      {section.content}
                    </p>
                  </div>

                  {/* Content Image - only show for first section */}
                  {index === 0 && post.contentImage && (
                    <img
                      src={post.contentImage}
                      alt=""
                      className="w-full h-[409px] object-cover rounded-[30px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Blog Posts Section */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-8 lg:gap-[35px]">
            {/* Section Header */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4">
                <h2 className="text-[#0A0A0A] font-montserrat text-[32px] lg:text-[48px] font-bold leading-[31.5px]">
                  Featured blog posts
                </h2>
              </div>
              <Link
                to="/blog"
                className="flex items-center justify-center h-[63px] px-5 bg-[#0F0F0F] rounded-[18px] hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-montserrat text-sm font-semibold leading-6">
                  View all posts
                </span>
              </Link>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
              {/* Post 1 */}
              <Link to="/blog/lien-rights-management" className="block">
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-[465px]">
                  <div className="h-[251px] bg-gray-100 relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F7ca53048471347dab2a76b28a6669b42?format=webp&width=800"
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
                      Understand how to protect your collection rights and avoid
                      losses in construction projects through ...
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
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-[465px]">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2Fa91e6b61c2fe46e3af7789f0f3176e8a?format=webp&width=800"
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
                      Discover how to implement accounting automation systems in
                      construction companies to increase…
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
              <Link to="/blog/litigation-prevention" className="block">
                <article className="bg-white rounded-[14px] border border-black/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-[465px]">
                  <div className="h-[251px] bg-gray-100">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F03ea23fe0fb94d879eff108b1cc9fb60%2F741ccb72be774dd6a8602b36f8bd8802?format=webp&width=800"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
