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
    <div className="m-4">
      <div className="bg-indigo-50 flex items-center justify-between gap-2 shadow-md p-4 rounded-md">
        <h1 className="text-lg">
          Документооборот&nbsp;
          <span className="text-indigo-700 font-bold ">МФЦ</span>
        </h1>
        <SignOutButton />
      </div>
      <div className="shadow-md p-4 rounded-md mt-4">
        <UploadFileForm />
        <FilesList />
      </div>
    </div>
  );
};

export default Home;
