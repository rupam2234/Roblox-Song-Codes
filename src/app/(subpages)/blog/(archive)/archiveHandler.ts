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
  {
    postname: "Latest Working Roblox Song Codes in 2024",
    postFeatureImage: "/media/Working Roblox Song Codes.png",
    imageAlt: "Working Roblox Song Codes",
    postDescription:
      "These are some of the most used currently working Roblox song codes in 2024. These roblox music IDs are filtered from our tested song ID database.",
    postLink: "/latest-roblox-song-codes",
  },
  {
    postname: "Latest Monstercat Roblox Song IDs",
    postFeatureImage: "/media/Working Monstercat Roblox Song IDs.png",
    imageAlt: "Working Monstercat Roblox Song IDs",
    postDescription:
      "Here’s a list of Roblox music IDs published by Monstercat. We’ve tested all codes to ensure they work on your Boombox, so you can enjoy them without issues.",
    postLink: "/monstercat-roblox-songs",
  },
  {
    postname: "300+ Roblox Music Codes That Are Not Copyrighted",
    postFeatureImage: "/media/Roblox Music Codes That Are Not Copyrighted.png",
    imageAlt: "Roblox-Music-Codes-That-Are-Not-Copyrighted",
    postDescription:
      "Here’s a list of copyright free Roblox music IDs. We have programmatically tested these codes so you can enjoy them without issues.",
    postLink: "/roblox-music-codes-not-copyrighted",
  },
  {
    postname: "30+ Evade Music Codes That You Should Not Miss",
    postFeatureImage: "/media/Roblox Music Codes That Are Not Copyrighted.png",
    imageAlt: "Roblox-Music-Codes-That-Are-Not-Copyrighted",
    postDescription:
      "Here’s a list of copyright free Roblox music IDs. We have programmatically tested these codes so you can enjoy them without issues.",
    postLink: "/evade-music-codes",
  },
];

export function getArchive(): archiveModules[] {
  const savedArchive = localStorage.getItem("archive");
  if (savedArchive) {
    return JSON.parse(savedArchive) as archiveModules[];
  }
  return archive;
}
