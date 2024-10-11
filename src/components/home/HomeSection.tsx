import Link from "next/link";
import React from "react";

type Props = {};

export default function HomeSection({}: Props) {
  return (
    <section className="py-4 sm:py-8 lg:py-16">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-slate-200 sm:text-6xl lg:text-7xl">
              It's time for your{" "}
              <div className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-orange-500"></span>
                <h2 className="relative text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                  Glow Up.
                </h2>
              </div>
            </h1>

            <p className="mt-8 text-slate-200 sm:text-xl">
              Stay on track and achieve more with our all-in-one workout
              tracker. Whether you're lifting, running, or yoga, keep a log
              of every session, track your progress, and push yourself to new
              personal bests. Set goals, monitor performance, and stay motivated!
            </p>

            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
              <Link
                href="/workout-plan"
                title="Explore the workout plans"
                className="inline-flex items-center justify-center px-10 rounded py-4 text-base font-semibold text-slate-50 transition-all duration-200 bg-orange-500 hover:scale-[1.05] hover:bg-orange-600"
                role="button"
              >
                {" "}
                Start exploring{" "}
              </Link>
            </div>
          </div>

          <div className="animate-bounce-slow">
            <img
              className="w-full"
              src="/workout_tracker_banner.svg"
              alt="banner"
            />
          </div>
        </div>
    </section>
  );
}
