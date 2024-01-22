import Link from "next/link";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      href: "/",
      title: "หน้าหลัก",
    },
    {
      id: 2,
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
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
