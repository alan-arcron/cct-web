import Navigation from "@/components/Navigation";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-montserrat font-semibold text-[#0F0F0F] mb-4">
            {title}
          </h1>
          <p className="text-lg text-[#0F0F0F] opacity-70 mb-8">
            {description || "This page is coming soon. Continue prompting to fill in the content for this page."}
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <p className="text-gray-600 font-montserrat">
              This is a placeholder page. You can continue prompting to add specific content and functionality to this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
