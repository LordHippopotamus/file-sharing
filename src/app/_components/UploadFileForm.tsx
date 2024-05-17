"use client";

import { useState } from "react";
import { uploadFile } from "../actions";
import Button from "@/components/Button";

const UploadFileForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await uploadFile(new FormData(event.currentTarget));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label className="relative min-w-48 cursor-pointer border border-dashed border-slate-300 p-2 rounded">
        <input
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          name="file"
          type="file"
          required
          className="absolute z-[-1] block w-0 h-0 opacity-0"
        />
        {file ? (
          file.name
        ) : (
          <span className="text-slate-300">Выберите файл</span>
        )}
      </label>
      <Button disabled={loading || !file}>
        <div className="flex gap-1">
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          Отправить
        </div>
      </Button>
      {error}
    </form>
  );
};

export default UploadFileForm;
