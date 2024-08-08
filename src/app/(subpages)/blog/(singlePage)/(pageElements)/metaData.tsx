import { PostheadProps } from "@/components/custom-components/constants";
import Image from "next/image";
import React from "react";

const Posthead: React.FC<PostheadProps> = ({
  title,
  author,
  publishDate,
  featuredImage,
  featuredImageAlt,
}) => {
  return (
    <div className="py-4 space-y-6 border-b border-gray-200">
      <h1 className="font-bold text-[25px] text-[#5F8C81]">{title}</h1>
      <Image
        src={featuredImage}
        alt={featuredImageAlt}
        layout="responsive"
        width={1200} // Set this to the actual width of your image
        height={675} // Set this to the actual height of your image
        style={{ width: "100%", height: "auto" }}
      />
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="flex text-[13px] text-gray-600">Published by: {author}</p>
        <p className="flex text-[13px] text-gray-600">
          Published on: {publishDate}
        </p>
      </div>
    </div>
  );
};

export default Posthead;
