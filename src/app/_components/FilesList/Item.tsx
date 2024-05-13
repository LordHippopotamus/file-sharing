import { createClient } from "@/utils/supabase/server";
import DeleteFile from "./DeleteFile";

const Item = async ({ path }: { path: string }) => {
  const supabase = createClient();

  const { data: url, error: urlError } = await supabase.storage
    .from("main")
    .createSignedUrl(path, 60, { download: false });

  if (urlError) throw Error(urlError.message);

  const { data: downloadUrl, error: downloadUrlError } = await supabase.storage
    .from("main")
    .createSignedUrl(path, 60, { download: true });

  if (downloadUrlError) throw Error(downloadUrlError.message);

  return (
    <li>
      {path}
      <a href={url.signedUrl} target="_blank">
        Предпросмотр
      </a>
      <a href={downloadUrl.signedUrl}>Скачать</a>
      <DeleteFile path={path} />
    </li>
  );
};

export default Item;
