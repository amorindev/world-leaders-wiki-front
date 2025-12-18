"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/shared/redux/hooks";

export default function Navbar() {
  const { auth } = useAppSelector((state) => state.authReducer);
  const router = useRouter();

  return (
    <nav className="w-full bg-black px-6 py-2 flex items-center justify-between border-b border-white/10">
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Lideres
      </div>

      {auth?.user ? (
        <div className="flex items-center gap-3">
          {auth.user.img_url && (
            <Image
              src={auth.user.img_url}
              width={32}
              height={32}
              alt="User avatar"
              className="rounded-full border border-white/20 object-cover"
              unoptimized
            />
          )}

          <span className="text-sm opacity-90">
            {auth.user.email}
          </span>

          <button
            onClick={() => router.push("/home")}
            className="px-4 py-1 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 transition"
          >
            Go to Home
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/sign-in")}
          className="px-4 py-1 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 transition"
        >
          Sign in
        </button>
      )}
    </nav>
  );
}
