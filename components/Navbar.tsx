"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoutButton } from "./LogOutButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="text-xl font-bold text-primary">
          Boiler Plate
        </Link>

        {/* Account or Auth Buttons */}
        <div className="flex items-center gap-2">
          {/* <Link href="/account">
            <Button variant="ghost">Account</Button>
          </Link> */}
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-primary transition ${
        active ? "text-primary font-medium" : "text-muted-foreground"
      }`}
    >
      {label}
    </Link>
  );
}
