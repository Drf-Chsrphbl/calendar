"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import GoogleLogo from "@/components/google-logo.webp"
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
          className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-950 transition active:bg-slate-700"
        >
          <img src={GoogleLogo.src} alt="Google Logo" className="w-5 h-5 mr-2" />
          <span>Sign in with Google</span>
        </button>
      )}
    </div>
  );
}