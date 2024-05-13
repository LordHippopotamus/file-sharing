"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    console.log(await supabase.auth.signOut());
    router.refresh();
  };
  return <button onClick={handleSignOut}>Выйти</button>;
};

export default SignOutButton;
