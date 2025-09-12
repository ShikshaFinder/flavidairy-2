import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-black mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-black mb-2">
        Page Not Found
      </h2>
      <p className="text-black mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-hover transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
