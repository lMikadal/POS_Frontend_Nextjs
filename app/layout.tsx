import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {links.map((link, idx) => (
          <span key={idx} className="mr-3">
            - <Link href={link.href}>{link.title}</Link>
          </span>
        ))}
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
