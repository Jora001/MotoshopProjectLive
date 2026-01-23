"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

/* ================= TYPES ================= */
export interface WishlistProduct {
  id: number;
  model: string;
  price: string;
  img: string;
}

export interface WishlistContextType {
  wishlist: WishlistProduct[];
  toggleWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  hydrated: boolean;
}

/* ================= CONTEXT ================= */
const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

/* ================= PROVIDER ================= */
export const WishlistProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* === LOAD FROM LOCALSTORAGE === */
  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
    setHydrated(true);
  }, []);

  /* === SAVE TO LOCALSTORAGE === */
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, hydrated]);

  /* === ACTIONS === */
  const isInWishlist = (id: number) =>
    wishlist.some((item) => item.id === id);

  const toggleWishlist = (product: WishlistProduct) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        hydrated,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

/* ================= HOOK ================= */
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used within a WishlistProvider"
    );
  }

  return context;
};
