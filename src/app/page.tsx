import { createClient } from "@/utils/supabase/server";

const Home = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  if (!user) return;

  return <div>{JSON.stringify(user)}</div>;
};

export default Home;
