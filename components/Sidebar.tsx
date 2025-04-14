"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [{ name: "Dashboard", path: "/dashboard" }];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <h2 className="text-xl font-semibold mb-6">Boiler Plate</h2>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <span
              className={`block px-4 py-2 rounded hover:bg-gray-100 ${
                pathname === item.path ? "bg-gray-200 font-medium" : ""
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
