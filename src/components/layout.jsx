import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";

const Layout = () => {
  const { cart} = useCart()
  const wishlist = useWishlist(state => state.items);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header item={cart} wishlist={wishlist} />

      {/* Page content renders here */}
      <Outlet />
    </div>
  );
};

export default Layout;
