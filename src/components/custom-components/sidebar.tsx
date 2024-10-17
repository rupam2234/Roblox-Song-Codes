import Ads from "../Sidebar-Elements/Ads";
import SidebarMenu from "../Sidebar-Elements/CategoryMenu";
import RobloxGiftCard from "../Sidebar-Elements/RobloxGiftCard";
import Share from "../Sidebar-Elements/ShareButtons";

const Sidebar = () => {
  return (
    <div className="md:sticky top-20">
      <div className="hidden md:block ">
        <SidebarMenu />
        <Share />
        {/* <Ads /> */}
        <RobloxGiftCard />
      </div>
      {/* Other content */}
    </div>
  );
};

export default Sidebar;
