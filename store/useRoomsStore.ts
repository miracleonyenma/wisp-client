import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Room = {
  id: string;
  userId: string;
};

type RoomsStore = {
  rooms: Room[];
  setRooms: (rooms: Room[]) => void;
  addRoom: (room: Room) => void;
  removeRoom: (roomId: string) => void;
};

export const useRoomsStore = create<RoomsStore>()(
  persist(
    (set) => ({
      rooms: [],
      setRooms: (rooms: Room[]) => set({ rooms }),
      addRoom: (room: Room) =>
        set((state) => ({
          rooms: state.rooms.filter((r) => r.id !== room.id).concat(room),
        })),
      removeRoom: (roomId: string) =>
        set((state) => ({
          rooms: state.rooms.filter((room) => room.id !== roomId),
        })),
    }),
    {
      name: "rooms",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
