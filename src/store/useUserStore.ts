import { create } from "zustand";

type User = {
  username: string;
  profileImage: string;
  nickname: string;
  address: string;
};

interface UserStore {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
