import { Metadata } from "next";
import TopContent from "./topcontent";
import SongIDtable from "./songidtable";

export const metadata: Metadata = {
  title: "Roblox Song Codes For Boombox",
  description: "Largest Roblox Music Code Database",
};

const HomePage = () => {
  return (
    <main className="grid-cols-12 grid gap-6 h-screen p-6 lg:px-[170px]">
      <section className="lg:col-span-8 col-span-12">

        {/* Content Section */}

        <TopContent/>
        <SongIDtable/>

      </section>
      <section className="hidden lg:block lg:col-span-4 col-span-12 bg-slate-400">

        {/* Sidebar */}

      </section>
    </main>
  );
};

export default HomePage;
