"use client";

import { login } from "./lib/actions/auth";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p>You are not signed in!</p>
        <button onClick={() => login()}>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
