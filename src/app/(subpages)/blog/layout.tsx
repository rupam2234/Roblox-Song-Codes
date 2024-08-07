import Sidebar from "@/components/custom-components/sidebar";
import { Children } from "react";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="my-9">
      <div className="grid grid-cols-12 md:gap-6 min-h-screen lg:p-2 px-6 lg:px-[170px]">
        <div className="lg:col-span-8 col-span-12 flex-col items-center space-y-5 mb-10">
          {/* content will go here */}
          {children}
        </div>
        <div className="hidden lg:block lg:col-span-4 col-span-12">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default BlogLayout;
