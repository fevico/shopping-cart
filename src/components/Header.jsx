import { Heart, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Header({item, wishlist}) {
 
  return (
    <div className="mx-8 mb-6">
      <header className="flex bg-blue-500 h-10 px-4 items-center text-white">
        <Link to="/">
        <h2 className="font-bold">Fevico Store</h2>
        </Link>

        <nav className="flex gap-6 ml-auto items-center">
    <Link to="/login">Login</Link>
    <Link to="/orders">Orders</Link>
    <Link to="/cart" className="relative">

       <ShoppingCart />

  <span className="absolute -top-2 -right-2 
                   bg-red-500 text-white 
                   text-xs w-5 h-5 
                   flex items-center justify-center 
                   rounded-full">
    {item.length}
  </span>
</Link>
<Link to="/wishlist" className="relative">
  <Heart/>
  <span className='absolute -top-2 -right-2 bg-red-500 text-white
   rounded-full w-5 h-5 text-xs flex items-center justify-center'>{wishlist.length}</span>
</Link>

        </nav>

      </header>
    </div>
  );
}

export default Header