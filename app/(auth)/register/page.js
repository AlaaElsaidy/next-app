'use client'
import React from "react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-orange-400 p-6">
      <div className="bg-[#112240] border border-gray-700 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center tracking-tight">
          Create Your Account
        </h1>

        <form className="flex flex-col gap-5">
          <div>
            <label className="text-sm text-orange-300 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-orange-200 placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm text-orange-300 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-orange-200 placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm text-orange-300 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-orange-200 placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-4 py-3 bg-orange-400 text-[#0a192f] rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-orange-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-orange-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}