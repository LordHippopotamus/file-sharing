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
    <li className="bg-indigo-50 p-4 rounded-md">
      <span className="text-center">{path}</span>
      <div className="flex gap-2 mt-2">
        <a
          href={url.signedUrl}
          target="_blank"
          className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </a>
        <a
          href={downloadUrl.signedUrl}
          className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <DeleteFile path={path} />
      </div>
    </li>
  );
};

export default Item;
