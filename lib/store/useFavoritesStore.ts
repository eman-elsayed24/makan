import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: number[];
  hydrated: boolean;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  setHydrated: (state: boolean) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      hydrated: false,
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
      isFavorite: (id) => get().favorites.includes(id),
      setHydrated: (state) => set({ hydrated: state }),
    }),
    {
      name: "makan-favorites",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
