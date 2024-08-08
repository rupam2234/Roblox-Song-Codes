import { Metadata } from "next";
import Archive from "./(archive)/archiveDesign";

export const metadata: Metadata = {
  title: "Blog Archive",
  description: "Learn how to use this Roblog Music Code database",
};

const BlogPage = () => {
  return (
    <div>
      <Archive />
    </div>
  );
};

export default BlogPage;
