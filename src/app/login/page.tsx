"use client";

import Button from "@/components/Button";
import { login } from "./actions";
import { useState } from "react";
import Input from "@/components/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
    } catch (error: any) {
      setError("Неверный email или пароль");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4">
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded-md p-4 flex flex-col gap-2 max-w-96 mt-32 mx-auto"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Авторизация</h1>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
          required
          type="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          name="password"
          required
          type="password"
        />
        {error && (
          <div className="border border-red-400 bg-red-100 p-2 rounded flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-red-700"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
            {error}
          </div>
        )}
        <Button disabled={loading}>Войти</Button>
      </form>
    </div>
  );
}
