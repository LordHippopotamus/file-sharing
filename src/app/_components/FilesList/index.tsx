import { createClient } from "@/utils/supabase/server";
import Item from "./Item";

const FilesList = async () => {
  const supabase = createClient();

  const { data: list, error: listError } = await supabase.storage
    .from("main")
    .list("");

  if (listError) throw Error(listError.message);

  return (
    <ul className="flex flex-wrap gap-4 mt-4">
      {list.map((el) => (
        <Item path={el.name} key={el.id} />
      ))}
    </ul>
  );
};

export default FilesList;
