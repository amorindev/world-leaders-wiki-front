"use client";

import { getRandomThunk } from "@/features/app/leader/redux/thunks/get_random";
import { useAppDispatch, useAppSelector } from "@/shared/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Content() {
  const dispatch = useAppDispatch();
  const { leader, isLoading, error } = useAppSelector(
    (state) => state.leaderReducer
  );

  useEffect(() => {
    if (!leader && !isLoading) {
      dispatch(getRandomThunk());
    }
  }, [leader, isLoading, error, dispatch]);

  return (
    <main className="flex-1 flex">
      {isLoading && (
        <div className="flex-1 flex items-center justify-center text-white/60">
          Loading leader...
        </div>
      )}

      {error && (
        <div className="flex-1 flex items-center justify-center text-red-400">
          Error loading leader
        </div>
      )}

      {leader && (
        <>
          {/* ---------- left side ---------- */}
          <div className="w-1/2 px-16 flex flex-col justify-center">
            {/* SEARCH */}
            <input
              placeholder="Search leader..."
              className="mb-8 bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm focus:outline-none"
            />

            {/* NAME */}
            <h1 className="text-5xl font-bold leading-tight">
              {leader.full_name}
            </h1>

            {/* NICKNAME */}
            {leader.nickname && (
              <p className="mt-2 text-xl text-white/60">“{leader.nickname}”</p>
            )}

            {/* PHRASE */}
            {leader.phrase && (
              <p className="mt-6 italic text-white/80">{leader.phrase}</p>
            )}

            {/* BIO */}
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-xl">
              {leader.biography}
            </p>

            {/* ACTION */}
            <div className="mt-10">
              <Link href={`/${leader.slug}`}>
                <button
                  className="px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold
                             hover:bg-white/90 transition"
                >
                  View more about the leader →
                </button>
              </Link>
            </div>
          </div>

          {/* ---------- right side ---------- */}
          <div className="w-1/2 relative pt-10">
            {leader.banner_url && (
              <Image
                src={leader.banner_url}
                alt={`${leader.full_name} banner`}
                fill
                className="object-cover object-top"
                unoptimized
              />
            )}
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-l from-black/30 to-black" />
          </div>
        </>
      )}
    </main>
  );
}

export default Content;
