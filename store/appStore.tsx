import { create } from "zustand";

interface AppState {
  drawerOpen: boolean;
}

interface AppAction {
  reset: () => void;
  toggleDrawer: () => void;
}

type AppStore = AppState & AppAction;

const initialState: AppState = {
  drawerOpen: false,
};

export const useAppStore = create<AppStore>()((set, get) => ({
  ...initialState,
  reset: () => set(initialState),
  toggleDrawer: () => set((s) => ({ drawerOpen: !s.drawerOpen })),
}));
