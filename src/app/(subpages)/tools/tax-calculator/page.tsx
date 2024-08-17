import Sidebar from "@/components/custom-components/sidebar";
import TaxCalculatorHandler from "./taxCalculatorHandler";
import TopSection from "./topSection";
import ContentSection from "./content";
import { Metadata } from "next";
import Breadcrumbs from "../breadcrumbs";

export const metadata: Metadata = {
  title: "Roblox Tax Calculator – Estimate Your Robux After Taxes",
  description:
    "This calculator helps you estimate the selling price of items on the Roblox marketplace and shows how much you'll receive after a sale.",
  publisher: "Geek Guidez",
  keywords: "Robux Tax Calculator",
};

const TaxCalculator = () => {
  return (
    <>
      <div className="bg-[#eef8f3] px-6 py-14 lg:px-[170px] flex items-center">
        <div>
          <Breadcrumbs />
          <TopSection
            title={"Roblox Tax Calculator – Estimate Your Robux After Taxes"}
          />
        </div>
      </div>
      <div className="my-7 grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-10 mb-10">
          <TaxCalculatorHandler />
          <ContentSection />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default TaxCalculator;
