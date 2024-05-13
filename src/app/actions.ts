"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file");
  if (!(file instanceof File)) return;
  const supabase = createClient();
  const { error } = await supabase.storage.from("main").upload(file.name, file);
  if (error) throw Error(error.message);
  revalidatePath("/", "page");
};
