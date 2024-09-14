import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";
import MainContent from "./mainContent";

export const metadata: Metadata = {
  title: "Terms Of Use",
  description: "Largest Roblox Music Code Database",
};

const TermsOfUse = () => {
  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Terms Of Use`}
          descriptionText1={
            "The following terms and conditions apply to your use of the Robloxsongcodes.com website and all content, services, and products available through it (collectively, the website)."
          }
          descriptionText2={`By using this website, you agree to these terms and conditions without any changes. This includes all rules, policies, and procedures that Robloxsongcodes.com may update from time to time.`}
          image={"/media/terms-of-service.png"}
          altText={"Terms Of service"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
          <MainContent />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
