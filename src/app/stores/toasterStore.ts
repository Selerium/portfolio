import { create } from "zustand";

export const toasterStore = create((set) => ({
    title: 'Issue',
    message: 'This is a description of the issue.',
    showToaster: false,
    setTitle: (value: string) => set({title: value}),
    setMessage: (value: string) => set({message: value}),
    setShowToaster: (value: boolean) => set({showToaster: value}),
}));