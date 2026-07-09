"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";
import { hydrateCart } from "../store/cartSlice";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Hydrate cart from localStorage on mount
  useEffect(() => {
    store.dispatch(hydrateCart());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
