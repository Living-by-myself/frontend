import { create } from "zustand";

interface CommunityWriteStore {
  title: string;
  body: string;
  category: string;
  file: File | null;
}

export const useCommunityWriteStore = create<CommunityWriteStore>((set) => ({
  title: "",
  body: "",
  category: "",
  file: null,
  setTitle: (title: string) => set({ title }),
  setBody: (body: string) => set({ body }),
  setCategory: (category: string) => set({ category }),
  setFile: (file: File | null) => set({ file }),
}));
