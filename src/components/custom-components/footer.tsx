import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear();

  const NavItem: { title: string; href: string }[] = [
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Use",
      href: "/terms-of-use",
    }
  ];

  return (
    <div className="p-6  bg-[#333333] lg:px-[170px] lg:py-7">
      <div className="flex-row lg:flex justify-between text-gray-300 text-sm">
        <div className="flex lg:justify-start justify-center">
          © {year} Roblox Song Codes. All Rights Reserved.
        </div>
        <div className="flex mt-6 md:mt-0 lg:mt-0 lg:justify-end justify-center">
          {NavItem.map((items, index) => (
            <Link key={index} href={items.href} className="mr-4 hover:underline">{items.title}</Link>
          ))}
        </div>
      </div>
      <div className="mt-8 text-gray-300 flex justify-center items-center sm:block">
        <p className="text-center text-sm">
          Roblox Song Codes is not endorsed, moderated, owned, or affiliated with Roblox Corporation or any of its partners. The authors of this site have no affiliation with Roblox Corporation.
        </p>
      </div>
    </div>
  );
};

export default Footer;
