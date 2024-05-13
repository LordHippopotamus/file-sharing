"use client";

import { deleteFile } from "@/app/actions";
import { useState } from "react";

const DeleteFile = ({ path }: { path: string }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      await deleteFile(path);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button disabled={loading} onClick={handleClick}>
        Удалить
      </button>
      {error}
    </>
  );
};

export default DeleteFile;
