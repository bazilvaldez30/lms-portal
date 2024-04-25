import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section>
      <div className="min-h-screen bg-stone-900 px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg"
            alt=""
            className="mx-auto mb-8 inline-block h-56 w-56 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-bold text-custom-2 md:text-6xl">
            404 Error
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-custom-11 sm:text-base md:mb-6 lg:mb-8">
            Commodo, consequat turpis placerat ultrices sapien, tortor
            tincidunt. Sit quisque est metus auctor sed turpis lectus quis.
          </p>
          <Link href="/" className="button-primary rounded-lg bg-custom-1">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
