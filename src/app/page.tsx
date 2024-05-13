import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import UploadFileForm from "./_components/UploadFileForm";
import FilesList from "./_components/FilesList";
import SignOutButton from "./_components/SignOutButton";

const Home = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <div>
      <SignOutButton />
      <UploadFileForm />
      <FilesList />
    </div>
  );
};

export default Home;
