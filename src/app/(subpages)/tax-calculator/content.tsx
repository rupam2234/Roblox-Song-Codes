import AdsDesktopIncontent from "@/components/adsense-ads/horizontal-desktop";
import AdsMobileIncontent from "@/components/adsense-ads/mobile-inContent";
import ResponsiveAd from "@/components/adsense-ads/responsiveAd";

const ContentSection = () => {
  return (
    <div className="space-y-6">
      <p>
        Want to know how much robux you&apos;ll pocket after uncle Roblox takes
        his cut? Roblox tax calculator can help you. This handy tool simplifies
        finding the selling or buying price for an item on the Roblox
        marketplace, helping you know exactly how much you or the creator will
        receive for the item.
      </p>
      <ResponsiveAd />
      <p>Here&apos;s how it works: </p>
      <ul className="terms-list space-y-3">
        <li>
          Enter the amount of Robux you are selling or buying an item for on the
          (Before Tax) box.
        </li>
        <li>
          The calculator will show the amount you/creator will receive after
          tax.
        </li>
        <li>
          You can also use the (After Tax) input to determine the likely selling
          price of an item if you want to receive a specific amount of Robux.
        </li>
        <li>
          The tax initially shows as a percentage but will also display the
          exact amount you&apos;ll pay in tax for a transaction soon you input
          your after/before tax values.
        </li>
      </ul>
      <p>
        Imagine you have an item to sell and you want to earn at least 300 Robux
        (R$). You&apos;ll need to enter 300 in the (After Tax Box), and the
        calculator will automatically display the selling price (Before Tax)
        needed to recieve a 300 Robux after Roblox Tax deduction.
      </p>
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        Robux Tax - What?
      </h2>
      <p>
        Roblox tax refers to the percentage of Robux that Roblox deducts from
        transactions made on its platform, such as selling items, game passes,
        or developer products. This deduction is commonly known as the Roblox
        marketplace fee or developer exchange fee, and it is used to cover
        platform costs and support Roblox&apos;s operations and infrastructure.
      </p>
      <p>
        The standard marketplace fee is 30%, which means that for every item
        sold, the seller receives 70% of the sale price in Robux, while Roblox
        retains 30%. This fee is kept to maintain and improve its platform,
        offering developers tools and resources to create and monetize their
        content.
      </p>
      <AdsMobileIncontent />
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        How is Roblox Tax Calculated?
      </h2>
      <p>
        As of date, with Roblox charges 30% of the selling price, here&apos;s
        how you can calculate net Robux you&apos;d recieve:
      </p>
      <div className="bg-gray-800 text-white py-3 px-3 text-[13px] rounded-sm">
        <p>Net Robux = Gross Robux - (Gross Robux * Tax Rate)</p>
      </div>
      <p>
        If you want to determine the selling price based on the amount of Robux
        you expect to receive, here&apos;s how to calculate it:
      </p>
      <div className="bg-gray-800 text-white py-3 px-3 text-[13px] rounded-sm">
        <p>Gross Robux = Net Robux / (1 - Tax Rate)</p>
      </div>
      <p>Here&apos;s an example:</p>
      <p>
        Suppose you want to recieve 70 Robux after a 30% marketplace fee,
        you&apos;ll need to put Net Robux = 70. This&apos;ll give you Gross
        Robux of 100 means you&apos;ll have to set the selling price of the item
        100 Robux.
      </p>
      <h2 className="font-bold text-[20px] text-[#5F8C81]">
        How Roblox Marketplace Fees Have Changed Over Time
      </h2>
      <p>
        The marketplace fee has always been a part of Roblox, skimming a
        percentage off the revenue from any sale. It all began when users first
        dipped their toes into the exciting world of creating and selling their
        own clothing. Back then, the fee was a mere 10%. But when the Limited
        item system came along, things changed. The clothing fee held steady at
        10%, while Limited items were hit with a 25% fee.
      </p>
      <p>
        Then, on July 25, 2012, everything changed. Roblox announced a new
        marketplace fee of 30% for all items, hoping to keep the Robux economy
        in check. It was a bold move, and many felt the sting of losing a bigger
        slice of their earnings.
      </p>
      <p>
        When Roblox opened up developer product and pass sales to users without
        Builders Club, the fee skyrocketed to a staggering 90% for them. It felt
        harsh, especially since this fee also applied to sales in Tickets,
        before they were phased out in 2016.
      </p>
      <p>
        But there was hope on the horizon. On April 2, 2020, a former Roblox
        administrator named Coefficients brought good news to the Developer
        Forum. They announced that the fee for developer products and passes had
        been slashed from a whopping ~90% for non-Premium users and ~30% for
        Premium users, down to a fair ~30% for everyone.
      </p>
      <p>
        The community&apos;s response was overwhelmingly positive, as developers
        celebrated this long-awaited change. It was a moment of triumph, a rare
        win for the creative minds powering the Roblox world.
      </p>
      <div>
        <p>
          <strong>Disclaimer:</strong> This tool is not an official Roblox
          Marketplace fee calculator. Fees may change, and updates might not be
          immediate. If you notice any discrepancies, please{" "}
          <a href="/contact-us" className="underline hover:no-underline">
            reach us out
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
