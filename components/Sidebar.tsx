import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      href: "/",
      title: "หน้าหลัก",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      id: 2,
      href: "/product",
      title: "เพิ่มสินค้า",
      icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    },
  ];
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu px-2 pt-4 md:p-4 w-44 md:w-56 min-h-full bg-base-200 text-base-content">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={link.icon}
                  />
                </svg>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
