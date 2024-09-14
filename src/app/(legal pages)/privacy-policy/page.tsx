import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";
import MainPolicyContent from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This privacy policy explains our policies and procedures regarding the collection, use, and disclosure of your information when you use our service. It also informs you about your privacy rights and how the law protects you.",
};

const PrivacyPolicy = () => {
  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Privacy Policy`}
          descriptionText1={
            "This privacy Policy explains our policies and procedures regarding the collection, use, and disclosure of your information when you use our service. It also informs you about your privacy rights and how the law protects you."
          }
          descriptionText2={
            "We use cookies to improve our appliaction. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy."
          }
          image="/media/Privacy Policy.png"
          altText={"Privacy-Policy"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
          <MainPolicyContent/>
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
