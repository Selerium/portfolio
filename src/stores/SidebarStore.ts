import { create } from "zustand";

export const useStore = create((set) => ({
    showLoader: false,
    showSidebar: false,
    loadedSite: false,
    toggleLoader: () => set((state: any) => ({showLoader: !state.showLoader})),
    setSidebar: (value: boolean) => set({showSidebar: value}),
    offLoadedSite: () => set({loadedSite: true}),
}));