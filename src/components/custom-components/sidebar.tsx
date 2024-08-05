import Ads from "../Sidebar-Elements/Ads";
import SidebarMenu from "../Sidebar-Elements/CategoryMenu";
import Share from "../Sidebar-Elements/ShareButtons";

const Sidebar = () => {
  return (
    <div className="md:sticky top-5">
      <div className="hidden md:block ">
        <SidebarMenu />
        <Share />
        <Ads />
      </div>
      {/* Other content */}
    </div>
  );
};

export default Sidebar;
