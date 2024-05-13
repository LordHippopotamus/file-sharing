"use client";

import { useState } from "react";
import { uploadFile } from "../actions";

const UploadFileForm = () => {
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
    <form onSubmit={handleSubmit}>
      <input name="file" type="file" required />
      <button disabled={loading}>Отправить</button>
      {error}
    </form>
  );
};

export default UploadFileForm;
