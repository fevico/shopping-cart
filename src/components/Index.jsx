import React from 'react'
import { ShoppingCart, Heart  } from 'lucide-react';
import { Link } from "react-router-dom";
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { products } from '@/data/products';


const Index = () => {
  const {addToCart, cart, removeFromCart, updateQuantity} = useCart()
const {addToWishlist, removeFromWishlist, clearWishlist, items} = useWishlist()
  return (
    <div className='bg gray-100'>
      <main className='flex w-full max-w-7xl gap-4 mx-10'>
        {/* left hand side  */}
        <section className='flex-1'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist}/>
            ))}
          </div>
        </section>

        {/* right hand side  */}
        <aside className='w-90 shadow-xl sticky h-fit max-h-[80vh] overflow-y-auto border-bg-gray-700 rounded-xl'>
          <Cart cart={cart} onRemove={removeFromCart} onUpdate={updateQuantity}/>
        </aside>
      </main>
    </div>
  )
}

export default Index