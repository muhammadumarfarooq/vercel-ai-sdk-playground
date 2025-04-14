"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <Button onClick={handleLogout} variant="ghost" className="border">
      Log out
    </Button>
  );
}
