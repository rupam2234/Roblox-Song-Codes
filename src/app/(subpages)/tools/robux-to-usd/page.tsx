import { Metadata } from "next";
import Breadcrumbs from "../breadcrumbs";
import TopSection from "../tax-calculator/topSection";
import Sidebar from "@/components/custom-components/sidebar";
import Converter from "./converter";
import Content from "./content";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Robux To USD Converter - Roblox Currency Conversion",
  description:
    "This converter helps you estimate the value of Robux in USD based on DevEx exchange rate and vise-versa including conversion to other currencies. ",
  publisher: "RobloxSongCodes.com",
  keywords:
    "Robux To USD Converter, Robux To USD, USD to Robux, DevEx calculator",
};

const RobloxToUSD = () => {
  const usdtorobux = [
    { usd: 1, robux: 285.71 },
    { usd: 10, robux: 2857.14 },
    { usd: 100, robux: 28571.43 },
    { usd: 1000, robux: 285714.29 },
    { usd: 2000, robux: 571428.57 },
    { usd: 3000, robux: 857142.86 },
    { usd: 5000, robux: 1428571.43 },
    { usd: 10000, robux: 2857142.86 },
    { usd: 15000, robux: 4285714.29 },
    { usd: 30000, robux: 8571428.57 },
    { usd: 100000, robux: 28571428.57 },
    { usd: 1000000, robux: 285714285.71 },
    { usd: 10000000, robux: 2857142857.14 },
  ];

  const robuxtousd = [
    { robux: 100, usd: 0.35 },
    { robux: 1000, usd: 3.5 },
    { robux: 10000, usd: 35.0 },
    { robux: 100000, usd: 350.0 },
    { robux: 285714, usd: 1000.0 },
    { robux: 500000, usd: 1750.0 },
    { robux: 1000000, usd: 3500.0 },
    { robux: 2000000, usd: 7000.0 },
    { robux: 5000000, usd: 17500.0 },
    { robux: 10000000, usd: 35000.0 },
    { robux: 20000000, usd: 70000.0 },
    { robux: 30000000, usd: 105000.0 },
    { robux: 100000000, usd: 350000.0 },
  ];

  // Schema Markup in JSON-LD
  const RobuxToUSDschemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Robux to USD Conversion Table",
    itemListElement: robuxtousd.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.robux} Robux equals $${item.usd}`,
      url: `https://robloxsongcodes.com/tools/robux-to-usd/${item.robux}-robux-to-usd`,
    })),
  };

  // Schema Markup in JSON-LD
  const USDtoRobuxSchemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "USD to Robux Conversion Table",
    itemListElement: usdtorobux.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `$${item.usd} equals ${item.robux} Robux`,
      url: `https://robloxsongcodes.com/tools/robux-to-usd/${item.usd}-usd-to-robux`,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RobuxToUSDschemaMarkup),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(USDtoRobuxSchemaMarkup),
          }}
        />
      </Head>
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
