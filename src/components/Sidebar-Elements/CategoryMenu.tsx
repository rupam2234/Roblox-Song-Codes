import { FaCaretRight } from "react-icons/fa";

const SidebarMenu = () => {
  type MenuElements = {
    title: string;
    url: string;
  };

  const MenuItems: MenuElements[] = [
    {
      title: "Tracks By Vibe",
      url: "/vibes",
    },
    {
      title: "Popular Tracks",
      url: "/popular-tracks",
    },
    // {
    //   title: "Tracks By Artists",
    //   url: "/artists",
    // },
  ];

  return (
    <div className="mx-3 justify-end">
      {MenuItems.length ? (
        MenuItems.map((items) => (
          <div
            key={items.title}
            className="border border-gray-100 flex py-2 px-3"
          >
            <FaCaretRight size={18} className="mt-[3px] mr-3 text-gray-500 " />
            <p className="text-gray-500 text-[15px] hover:translate-x-2 transition-transform duration-300 ease-in-out">
              <a href={items.url}>{items.title}</a>
            </p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SidebarMenu;
