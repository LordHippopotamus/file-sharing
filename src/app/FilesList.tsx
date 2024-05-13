import { createClient } from "@/utils/supabase/server";

const FilesList = async () => {
  const supabase = createClient();

  const { data: list, error: listError } = await supabase.storage
    .from("main")
    .list("");

  if (listError) throw Error(listError.message);

  const { data: urls, error: urlsError } = await supabase.storage
    .from("main")
    .createSignedUrls(
      list.map((el) => el.name),
      60
    );

  if (urlsError) throw Error(urlsError.message);

  return (
    <ul>
      <h3>List</h3>
      {urls.map((el) => (
        <li key={el.path}>
          <a href={el.signedUrl} download={el.path}>
            {el.path}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FilesList;
