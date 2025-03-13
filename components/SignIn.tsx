"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession(); // Get session data (user info)

  return (
    <div className="flex justify-end">
      {session?.user ? (
        // If logged in, show the user's Google profile picture
        <button onClick={() => signOut()}>
          <img
            src={session.user.image || "/defaultProfile.png"}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </button>
      ) : (
        // If not logged in, show the Sign in with Google button
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition active:bg-slate-700"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}