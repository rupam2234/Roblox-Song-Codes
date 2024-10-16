import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import InContentAd2 from "@/components/adsense-ads/AdsenseAd2";
import InContentAd3 from "@/components/adsense-ads/AdsenseAd3";
import Image from "next/image";
import Head from "next/head";

const Content = () => {
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

      <div className="space-y-6">
        <p>
          The Robux to USD converter lets you estimate real-world value of your
          Robux, based on Roblox&apos;s{" "}
          <a
            href="https://en.help.roblox.com/hc/en-us/articles/203314100-Developer-Exchange-DevEx-Overview-How-to-Submit-Requirements"
            rel="nofollow"
            target="_blank"
            className="underline hover:no-underline mr-1"
          >
            Developer Exchange program (DevEx)
          </a>
          and converted into other currencies like USD, GBP, CAD and EUR.
        </p>
        <FirstInContentAd />
        <p>
          We have configured the current payout rates such as Dev Exchange is
          0.0035 USD per Robux for each currencies. When you enter the amount of
          Robux, you&apos;ll discover the equivalent value in USD and the
          exchange rate.
        </p>
        <p>
          Below the conversion, you&apos;ll see the exchange rate, and of course
          you&apos;ll have the option to convert values in both directions.
        </p>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How to use this converter?
        </h2>
        <ul className="terms-list space-y-3">
          <li>Start with you Robux input within the Robux field.</li>
          <li>
            Then click on &quot;Currency?&quot; and select your desired
            currency.
          </li>
          <li>
            You&apos;ll notice the converted amount on the currency filed.
          </li>
          <li>
            Right below the price of Robux, you&apos;ll notice the conversion
            rate per Robux
          </li>
        </ul>
        <div className="flex  items-center">
          <Image
            src={"/media/Robux to USD converter.png"}
            alt={"Robux to USD converter"}
            height={300}
            width={600}
            className="border border-gray-200"
          />
        </div>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          How does it calculate?
        </h2>
        <p>
          Determining the dollar value of a specific amount of Robux is
          straightforward. The calculator multiplies the user-provided Robux
          amount by the chosen exchange rate and rounds the result upto four
          decimal places.
        </p>
        <div className="bg-gray-800 text-white py-4 px-3 text-[15px] rounded-sm">
          <p>Robux Currency Value = Robux * Exchange Rate</p>
        </div>
        <p>
          <strong>For example:</strong> When you have 2500 Robux, and you want
          to get USD on DevEx rate the calculation would be: 2500*0.0035 = $8.75
        </p>
        <p>
          For converting currency to Robux, it&apos;s simply the reverse
          process.
        </p>
        <div className="bg-gray-800 text-white py-4 px-3 text-[15px] rounded-sm">
          <p>Robux = Robux Currency Value / Exchange Rate</p>
        </div>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          Exchange Rates Configured On This Robux Converter:
        </h2>
        <ul className="terms-list space-y-3">
          <li>DevEx Rate: 0.0035 USD / Robux</li>
          <li>USD Rate: 0.0125 USD / Robux</li>
          <li>CAD Rate: 0.0162 CAD / Robux</li>
          <li>EUR Rate: 0.0102 EUR / Robux</li>
          <li>GBP Rate: 0.0088 GBP / Robux</li>
        </ul>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          DevX Eligibility & Conversion Prerequisite
        </h2>
        <p>
          To convert your Robux into USD you must participate in Roblox&apos;s
          Developer Exchange (DevEx) program. There are requirements for your
          Roblox account to be eligible for DevX program:
          <ul className="terms-list space-y-3 mt-[25px]">
            <li>You must be at least 13 years old.</li>
            <li>You must have a verified email address on Roblox.</li>
            <li>
              You must have earned at least 30,000 Robux to be able to process
              it.
            </li>
            <li>
              Your account should comply with Roblox&apos;s community standards
              and terms.
            </li>
            <li>You must have a valid DevEx portal account.</li>
            <li>You must provide valid tax documentation with Roblox.</li>
          </ul>
        </p>
        <InContentAd2 />
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          USD to Robux Conversion Table
        </h2>
        <p>
          This table represents Robux equivalent to USD for various amount of
          USD according to DevX current conversion rate:
        </p>
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 border-collapse w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-400">USD Amount</th>
                <th className="px-4 py-2 border border-gray-400">
                  Robux Equivalent
                </th>
              </tr>
            </thead>
            <tbody>
              {usdtorobux.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-400">
                    ${row.usd.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    {row.robux.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          Robux to USD Conversion Table
        </h2>
        <p>This table is for reverse conversion rates: Robux to USD</p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-400 border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-400">
                  Robux Amount
                </th>
                <th className="px-4 py-2 border border-gray-400">
                  USD Equivalent
                </th>
              </tr>
            </thead>
            <tbody>
              {robuxtousd.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-400">
                    {row.robux.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-400">
                    ${row.usd.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <InContentAd3 />
        <h2 className="font-bold text-[20px] text-[#5F8C81]">
          What Can Change?
        </h2>
        <p>
          Exchange rates can fluctuate over time due to various factors, and as
          a result, conversions results will be different.
        </p>
        <p>
          When the exchange rates changes updates to this calculator may not be
          instantaneous. However, the system is built to keep a constant watch
          on fluctuations in exchange rates and will update the values once new
          values is received.
        </p>
        <p>
          <strong>Disclaimer:</strong> This is not an official Robux currency
          converter. While the results provided are intended to be close to
          real-life values, they may not be exact. If you notice any
          discrepancies, please{" "}
          <a href="/contact-us" className="underline hover:no-underline">
            reach out to us
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Content;
