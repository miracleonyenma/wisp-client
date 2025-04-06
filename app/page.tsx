"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RoomCreator from "@/components/Room/Creator";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon } from "@hugeicons/core-free-icons";

export default function Home() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);

  const handleJoinRoom = (roomId: string) => {
    router.push(`/chat/${roomId}`);
  };

  return (
    <main className="min-h-screen">
      <div className="site-header">
        <div className="wrapper">
          <h1 className="text-2xl font-bold">Ephemeral Chat</h1>
        </div>
      </div>

      <section className="site-section">
        <div className="wrapper flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-4xl font-bold">Anonymous. Ephemeral. Secure.</h2>
          <p className="text-xl">
            Chat without leaving a trace. Messages disappear when you
            disconnect.
          </p>

          <div className="mt-8 flex flex-col gap-6 w-full max-w-md">
            <RoomCreator
              onRoomCreated={handleJoinRoom}
              isLoading={isCreating}
              setIsLoading={setIsCreating}
            />

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
              <span className="text-gray-400 dark:text-gray-500">or</span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Join an existing room</h3>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Enter room ID"
                  onChange={(e) => {
                    if (e.target.value.trim()) {
                      e.target.nextElementSibling?.removeAttribute("disabled");
                    } else {
                      e.target.nextElementSibling?.setAttribute(
                        "disabled",
                        "true"
                      );
                    }
                  }}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      (e.target as HTMLInputElement).value.trim()
                    ) {
                      handleJoinRoom(
                        (e.target as HTMLInputElement).value.trim()
                      );
                    }
                  }}
                />
                <button
                  className="btn primary"
                  disabled
                  onClick={(e) => {
                    const input = (e.target as HTMLElement)
                      .previousElementSibling as HTMLInputElement;
                    if (input.value.trim()) {
                      handleJoinRoom(input.value.trim());
                    }
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-gray-100 dark:bg-gray-800">
        <div className="wrapper">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                <HugeiconsIcon
                  icon={Shield01Icon}
                  className="icon h-8 w-8 text-blue-600 dark:text-blue-300"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl font-bold">Anonymous</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No login required. No personal data stored.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                <svg
                  className="icon h-8 w-8 text-green-600 dark:text-green-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Ephemeral</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Messages disappear when you disconnect.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center text-center">
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                <svg
                  className="icon h-8 w-8 text-purple-600 dark:text-purple-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Real-time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Instant messaging with push notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-section bg-gray-800 text-gray-200 py-6">
        <div className="wrapper text-center">
          <p>Ephemeral Chat © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
