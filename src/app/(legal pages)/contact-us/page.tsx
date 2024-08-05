import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Roblox Music Code Database",
};

const Contact = () => {
  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Contact`}
          descriptionText1={
            "This is our comprehensive database of Roblox song codes, specially curated for Boombox enthusiasts. By accessing and using our website, you agree to adhere to the following terms and conditions."
          }
          descriptionText2={
            "To maintain the quality and functionality of our service, we automatically filter out any codes that are no longer available or have been deleted. We encourage users to respect the rules and guidelines provided herein, as they are designed to enhance your experience and ensure the seamless operation of the platform."
          }
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Contact;
