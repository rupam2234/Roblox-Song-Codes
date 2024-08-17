import { Metadata } from "next";
import Breadcrumbs from "../breadcrumbs";
import TopSection from "../tax-calculator/topSection";
import Sidebar from "@/components/custom-components/sidebar";
import Converter from "./converter";
import Content from "./content";

export const metadata: Metadata = {
  title: "Robux To USD Converter - Roblox Currency Conversion",
  description:
    "This tool helps you estimate the value of Robux in USD based on the exchange rate used by the DevEx converter.",
  publisher: "Geek Guidez",
  keywords:
    "Robux To USD Converter, Robux To USD, USD to Robux, DevEx calculator",
};

const RobloxToUSD = () => {
  return (
    <>
      <div className="bg-[#eef8f3] px-6 py-14 lg:px-[170px] flex items-center">
        <div>
          <Breadcrumbs />
          <TopSection
            title={"Robux To USD Converter - Roblox Currency Conversion"}
          />
        </div>
      </div>
      <div className="my-7 grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-10 mb-10">
          {/* Calculator */}
          <Converter />
          <Content />
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default RobloxToUSD;
