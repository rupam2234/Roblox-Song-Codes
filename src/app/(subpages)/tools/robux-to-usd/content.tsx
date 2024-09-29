import FirstInContentAd from "@/components/adsense-ads/AdsenseAd1";
import InContentAd2 from "@/components/adsense-ads/AdsenseAd2";
import InContentAd3 from "@/components/adsense-ads/AdsenseAd3";
import Image from "next/image";

const Content = () => {
  return (
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
        Robux, you&apos;ll discover the equivalent value in USD and the exchange
        rate.
      </p>
      <p>
        Below the conversion, you&apos;ll see the exchange rate, and ofcourse
        you&apos;ll have the option to convert values in both directions.
      </p>
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        How to use this converter?
      </h2>
      <ul className="terms-list space-y-3">
        <li>Start with you Robux input within the Robux field.</li>
        <li>
          Then click on &quot;Currency?&quot; and select your desired currency.
        </li>
        <li>You&apos;ll notice the converted amount on the currency filed.</li>
        <li>
          Right below the price of Robux, you&apos;ll notice the conversion rate
          per Robux
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
        <strong>For example:</strong> When you have 2500 Robux, and you want to
        get USD on DevEx rate the calculation would be: 2500*0.0035 = $8.75
      </p>
      <p>
        For converting currency to Robux, it&apos;s simply the reverse process.
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
      <InContentAd2 />
      <h2 className="font-bold text-[20px] text-[#5F8C81]">What Can Change?</h2>
      <p>
        Exchange rates can fluctuate over time due to various factors, and as a
        result, converiosn results will be different.
      </p>
      <p>
        When the exchange rates changes updates to this calculator may not be
        instantaneous. However, the system is built to keep a constant watch on
        fluctuations in exchange rates and will update the values once new
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
  );
};

export default Content;
