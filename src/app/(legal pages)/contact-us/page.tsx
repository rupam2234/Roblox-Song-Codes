import FeaturedBox from "@/components/custom-components/featuredBox";
import Sidebar from "@/components/custom-components/sidebar";
import { Metadata } from "next";
import React from "react";
import ContactFormHandler from "./contactForm";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact information to reach out Roblox music code database creator.",
};

const Contact = () => {
  return (
    <main>
      <div className="p-6 lg:px-[140px]">
        <FeaturedBox
          title={`Contact`}
          descriptionText1={
            "If you have any questions or would like to discuss anything related to the content on this website, please feel free to reach out using the contact details provided."
          }
          descriptionText2={
            "You can either connect with us at this address: support@robloxsongcodes.com or you can use the contact form below | 123 Main Street, Anytown, CA 12345, United States"
          }
          image="/media/Contact_bg.png"
          altText={"contact-us"}
        />
      </div>
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
          <ContactFormHandler />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Contact;
