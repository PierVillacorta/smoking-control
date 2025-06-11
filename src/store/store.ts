import { create } from "zustand";
import type { Notes, User } from "../types";

type UserState = {
  sucessfull: boolean;
  day: Notes["day"];
  accomplished: User["accomplished"];
  showModal: User["accomplished"];
  user: User[];
  quote: User["quote"];
  notesDay: Notes[];
  addUser: (data: User) => void;
  addNotes: (notes: Notes) => void;
  appReset: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  sucessfull: false,
  accomplished: false,
  user: [],
  day: 1,
  notesDay: [],
  showModal: false,
  quote: "",
  addUser: (data) => {
    set(() => ({
      user: [data],
    }));
  },

  addNotes: (notesDay) => {
    const isAcomplished = notesDay.achieved === "true";
    set((state) => ({
      notesDay: [
        ...state.notesDay,
        { ...notesDay, day: isAcomplished ? state.day + 1 : 1 },
      ],
      accomplished: isAcomplished,
      day: isAcomplished ? state.day + 1 : 1,
    }));
  },
  appReset:() => {
    set(() => ({
      sucessfull: false,
      day: 1,
      notesDay: [],
      accomplished: false,
    }))
  }
}));
