import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
      href: "/",
      title: "หน้าหลัก",
    },
    {
      href: "/tag",
      title: "เพิ่มแท็ก",
    },
    {
      href: "/product",
      title: "เพิ่มสินค้า",
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
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
