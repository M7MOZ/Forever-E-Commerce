/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const value = {
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
