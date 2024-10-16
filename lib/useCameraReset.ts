// store/useCameraStore.ts
import { create } from 'zustand';

interface CameraReset {
  resetCamera: boolean;
  setResetCamera: (value: boolean) => void;
}

export const useCameraReset = create<CameraReset>((set) => ({
  resetCamera: false, // Trigger state
  setResetCamera: (value) => set({ resetCamera: value }),
}));
