import { Button } from "@/components/ui/button";
import Breadcrumbs from "./breadcrumbs";
import TopSection from "./tax-calculator/topSection";

type Tools = {
  name: string;
  url: string;
  image: string;
};

const toolData: Tools[] = [
  {
    name: "Robux To USD Converter",
    url: "/tools/robux-to-usd",
    image: "/media/Robux to USD converter.png",
  },
  {
    name: "Robux Tax Calculator",
    url: "/tools/tax-calculator",
    image: "/media/Roblox Tax Calculator.png",
  },
];

const Tools = () => {
  return (
    <div>
      <div className="bg-[#eef8f3] px-6 py-14 lg:px-[170px]">
        <div>
          <Breadcrumbs />
          <TopSection title={"Free Roblox Utilities"} />
        </div>
      </div>
      <div className="lg:px-[170px] my-14 grid grid-cols-12 gap-7 mx-6 md:mx-0">
        {toolData.map((tool, index) => (
          <div
            key={index}
            className="p-6 rounded-sm bg-[#EDF2ED] col-span-12 md:col-span-4"
          >
            <div className="flex justify-between items-center text-[15px] font-bold text-gray-600">
              <h2>{tool.name}</h2>
              <a href={tool.url}>
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="hover:bg-gray-400/50"
                >
                  Open
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
