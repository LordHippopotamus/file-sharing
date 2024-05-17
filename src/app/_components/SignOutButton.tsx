"use client";

import Button from "@/components/Button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return <Button onClick={handleSignOut}>Выйти</Button>;
};

export default SignOutButton;
