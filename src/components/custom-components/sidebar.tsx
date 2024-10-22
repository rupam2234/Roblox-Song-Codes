import Ads from "../Sidebar-Elements/Ads";
import SidebarMenu from "../Sidebar-Elements/CategoryMenu";
import RobloxGiftCard from "../Sidebar-Elements/RobloxGiftCard";
import Share from "../Sidebar-Elements/ShareButtons";
import CountSongID from "../Sidebar-Elements/SongIDCounter";

const Sidebar = () => {
  return (
    <div className="md:sticky top-20">
      <div className="hidden md:block ">
        <Ads />
        <CountSongID />
        <SidebarMenu />
        <Share />
        {/* <RobloxGiftCard /> */}
      </div>
      {/* Other content */}
    </div>
  );
};

export default Sidebar;
