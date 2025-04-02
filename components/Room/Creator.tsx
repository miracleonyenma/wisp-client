"use client";

interface RoomCreatorProps {
  onRoomCreated: (roomId: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function RoomCreator({
  onRoomCreated,
  isLoading,
  setIsLoading,
}: RoomCreatorProps) {
  const handleCreateRoom = async () => {
    setIsLoading(true);

    try {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const response = await fetch(`${API_URL}/api/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create room");
      }

      const data = await response.json();
      onRoomCreated(data.roomId);
    } catch (error) {
      console.error("Error creating room:", error);
      // Could show an error message here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-lg font-semibold">Create a new room</h3>
      <button
        className="btn primary w-full"
        onClick={handleCreateRoom}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating...
          </div>
        ) : (
          <>
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Create New Room
          </>
        )}
      </button>
    </div>
  );
}
