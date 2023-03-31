"use client";
import React, { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  // const { data: session } = useSession();
  // const { user } = session || {};
  const segment = useSelectedLayoutSegment();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logo = (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="148"
      height="100"
      style={{ marginBottom: 32 }}
    >
      <path
        fill="#"
        d="M60.408,65.072l4.656-0.096q1.728,0,1.728,0.24q0,0.624-7.008,1.104q-4.464,8.736-4.464,11.904q0,2.208,1.392,2.208q0.528,0,1.32-0.648t0.96-0.648t0.168,0.24q-0.24,0.864-1.464,1.44t-2.064,0.576t-1.32-0.096q-1.152-0.432-1.152-2.784q0-4.848,3.696-12.336l-5.76,0.144q-6.432,6.288-12.912,11.04q-9.696,7.056-15.168,7.056q-0.336,0-0.672-0.048q-7.392-0.624-7.392-7.584q0-4.128,2.592-8.736q3.456-6.144,9.456-10.488t10.752-4.344t4.752,3.504q0,2.352-1.44,5.232t-2.928,3.648q-0.144,0.048-0.312,0.048t-0.168-0.096l1.584-2.592q1.632-2.544,1.632-4.464t-0.84-3.096t-2.664-1.176q-3.744,0-8.952,4.176t-7.92,10.272t-2.712,9.504q0,5.136,5.232,5.136q4.992,0,13.536-6.432q3.792-2.832,12.336-10.704q-1.68,0.096-3.12,0.336q-3.072,0.576-2.88-0.192q0.192-1.776,1.824-1.776q3.168,0.384,5.328,0.384q4.128-3.792,12.336-12.432q5.52-5.808,6.72-5.808q0.528,0,0.528,0.816t-0.432,2.544t-0.96,2.112q-1.104,0.768-2.064,2.088t-2.736,4.944t-3.024,5.88z M64.248,53.36l-12.288,11.52l2.832,0q1.008,0.048,2.496,0.048q1.392-2.736,6.96-11.568z M77.36016,57.824q0.528,0,0.528,1.32t-0.72,7.176l0.816,0l3.288,0t3.816-0.096q0.048,0.096,0.048,0.144q0,0.672-3.024,1.248q-1.776,0.24-5.328,0.816q-0.624,2.352-1.584,4.752t-1.536,2.4q-0.48,0-0.744-0.528t-0.12-0.96l1.488-5.472q-7.296,0-7.296-1.104q0-0.48,0.408-0.816t0.984-0.336t2.112-0.048l4.464,0q1.68-4.992,2.352-8.496l0.048,0z M103.81632,90.992q-1.824,0-3.576-1.296t-1.752-2.88q0-1.008,1.008-1.008q0.24,0,0.72,0.096q0.576,2.016,0.96,2.736q0.816,1.296,2.784,1.296q5.904,0,14.496-16.128l8.64-15.408q-9.264,9.888-13.128,13.752t-5.304,4.728q-2.88,1.728-4.752,1.728q-2.736,0-2.736-3.216q0-3.84,3.264-7.92q0.24-0.288,2.04-2.472t4.224-5.208t4.032-5.832t1.608-3.936t-0.672-1.464q-1.392-0.72-3.168-0.72q-5.088,0-14.064,6.144q-3.744,2.544-5.952,5.904t-2.208,6.192t2.736,3.552q0.864,0.24,1.68,0.24q2.448,0,5.424-2.112q3.504-2.352,3.936-2.496q-0.48,1.776-3.792,3.888q-3.648,2.256-6.816,2.256q-0.432,0-1.608-0.168t-2.328-1.752t-1.152-3.84q0-6.528,9.552-13.344q2.784-2.016,7.344-3.648t7.368-1.632t4.272,0.888t1.464,2.832t-2.688,6.048t-8.496,11.16q-1.2,1.392-2.208,3.624t-1.008,3.552t1.032,1.32t3.096-1.488q5.856-4.176,11.688-10.128t8.568-9.984q1.968-2.832,4.176-2.832q0.768,0,0.768,0.48q0,0.096-0.096,0.384q-6.048,10.56-16.464,28.032q-3.072,5.04-6.552,7.56t-6.36,2.52z"
      />
      <path fill="#" d="" />
    </svg>
  );

  const daysToGo = () => {
    const currentDate = new Date();
    const targetDate = new Date("2023-07-02");
    const differenceInTime = targetDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <div
      className="bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/topimage.png')` }}
    >
      <div className="container mx-auto px-6 py-3" style={{ height: "750px" }}>
        <div className="text-center py-6" style={{ marginTop: "250px" }}>
          <p className="font-gilda text-5xl font-light tracking-widest">
            ARUBA AND YASEEN
          </p>
        </div>
        <div className="text-center py-6">
          <p className="font-gilda text-xl font-light tracking-widest">
            JULY 2, 2023
          </p>
          <p className="font-gilda text-xl font-light tracking-widest">
            {daysToGo()} DAYS TO GO!
          </p>
        </div>
        <nav className="flex items-center justify-between flex-wrap p-6 font-gilda">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow text-center">
              <button
                className="lg:hidden block mr-4 relative focus:outline-none"
                onClick={toggleNav}
              >
                <svg
                  className="fill-current text-gray-600 hover:text-gray-700 h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  {isNavOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.414 4.586a2 2 0 00-2.828 0L12 9.172 7.414 4.586a2 2 0 10-2.828 2.828L9.172 12l-4.586 4.586a2 2 0 102.828 2.828L12 14.828l4.586 4.586a2 2 0 102.828-2.828L14.828 12l4.586-4.586a2 2 0 000-2.828z"
                      fill="currentColor"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H6z"
                      fill="currentColor"
                    />
                  )}
                </svg>
              </button>
              <div
                className={`${
                  isNavOpen ? "block" : "hidden"
                } lg:block mt-4 lg:inline-block lg:mt-0 text-gray-600 mr-4 relative`}
              >
                <Link href="/">
                  <p
                    className={`block mt-4 lg:inline-block lg:mt-0 text-gray-600 mr-4 relative hover-underline tracking-widest italic ${
                      !segment ? "current-page" : "underline-page"
                    }`}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/rsvp">
                  <p
                    className={`block mt-4 lg:inline-block lg:mt-0 text-gray-600 mr-4 relative hover-underline tracking-widest italic ${
                      segment === "rsvp" ? "current-page" : "underline-page"
                    }`}
                  >
                    RSVP
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
