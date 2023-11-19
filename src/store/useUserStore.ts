import { UserProfile } from "@/types/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
  profile: UserProfile | null;
  token: string | null;
  setProfile: (user: UserProfile) => void;
  setToken: (token: string) => void;
  isLogged: boolean;
  clearToken: () => void;
  logout: () => void;
}

const initValue = {
  profile: {
    nickname: "김철수",
    profileImage: "https://picsum.photos/100",
    level: 10,
    address: "서울 강남구",
    beobJeongDong: "11111",
    cash: 12345,
  },
  token: "12345",
  isLogged: true,
};

const initValue2 = {
  profile: null,
  token: null,
  isLogged: false,
};

const useUserStore = create(
  devtools<UserStore>((set) => ({
    ...initValue2,
    setProfile: (user) => set({ profile: user }),
    setToken: (token) => set({ token }),
    clearToken: () => set({ token: null }),
    logout: () => set({ profile: null, token: null }),
  })),
);

useUserStore.subscribe((state) => {
  state.isLogged = !!state.token;
});

export default useUserStore;
