import { useState } from 'react'
import { Button } from './components/ui/button'
import { ShoppingCart, Heart  } from 'lucide-react';
import { products } from './data/products';
import ProductCard from './components/productCard';
import Cart from './components/Cart';
import { useCart } from './hooks/useCart';
 
function Header({item}) {
  return (
    <div className="mx-8 mb-6">
      <header className="flex bg-blue-500 h-10 px-4 items-center text-white">
        
        <h2 className="font-bold">Fevico Store</h2>

        <nav className="flex gap-6 ml-auto items-center">
          <a href="">Login</a>
          <a href="">Orders</a>
          <span className="relative">
       <ShoppingCart />

  <span className="absolute -top-2 -right-2 
                   bg-red-500 text-white 
                   text-xs w-5 h-5 
                   flex items-center justify-center 
                   rounded-full">
    {item.length}
  </span>
</span>
<span className='relative'>
  <Heart/>
  <span className='absolute -top-2 -right-2 bg-red-500 text-white
   rounded-full w-5 h-5 text-xs flex items-center justify-center'>1</span>
</span>

        </nav>

      </header>
    </div>
  );
}
    
function App() {
const {addToCart, cart, removeFromCart, updateQuantity} = useCart()
  return (
    <div className='bg gray-100'>
      <Header item={cart}/>
      <main className='flex w-full max-w-7xl gap-4 mx-10'>
        {/* left hand side  */}
        <section className='flex-1'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart}/>
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

export default App
