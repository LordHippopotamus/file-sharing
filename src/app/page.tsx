import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import UploadFileForm from "./_components/UploadFileForm";
import FilesList from "./_components/FilesList";

const Home = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div>
      <UploadFileForm />
      <FilesList />
    </div>
  );
};

export default Home;
