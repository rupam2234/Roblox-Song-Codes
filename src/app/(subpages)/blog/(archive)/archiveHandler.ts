import { archiveModules } from "@/components/custom-components/constants";

let archive: archiveModules[] = [
  {
    postname: "How to test the song IDs on Roblox?",
    postFeatureImage: "/media/Roblox Song Code Blog.png",
    imageAlt: "test the song IDs on Roblox",
    postDescription:
      "In this page you will learn how to test roblox music IDs in free Roblox Boombox player.",
    postLink: "/how-to-test-roblox-song-ids-on-boombox",
  },
];

export function getArchive(): archiveModules[] {
  const savedArchive = localStorage.getItem("archive");
  if (savedArchive) {
    return JSON.parse(savedArchive) as archiveModules[];
  }
  return archive;
}
