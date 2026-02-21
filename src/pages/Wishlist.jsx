import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/hooks/useCart'
import { useCheckout } from '@/hooks/useCheckout'
import { useWishlist } from '@/hooks/useWishlist'
import { Minus, Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const Wishlist = () => {
     const [form, setForm] = useState({name: "", email: "", address: ""})
  const checkout = useCheckout(state => state.checkout);
  const loading = useCheckout(state => state.loading);
  const error = useCheckout(state => state.error);
  const message = useCheckout(state => state.message);
  const {cart, removeFromCart, updateQuantity} = useCart()
    const {items, removeFromWishlist} = useWishlist() 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  
  const handleCheckout = () => {
    if (!form.email) return alert("Email is required");
    if (!cart.length) return alert("Cart is empty");
  
    console.log("click!")
  
    checkout(form.email);
    setForm({name: "", email: "", address: ""})
  };

  return (
    <div className='mx-10'>
        <main className='md:flex w-full grid grid-cols-1'>
            <section className='flex-1'>  
                <h2 className='text-center text-xl font-bold'>Wishlist items</h2>
            <div className='grid grid-cols-1 gap-4'> 
                { items && items.length > 0 ? items.map((item) => (
                <Card className="w-full max-w-sm px-4 shadow-xl" key={item.id}>
                    <CardDescription>
                    <img src={item.image} alt={item.name} className='w-96 h-48 object-cover rounded-sm' />
                    <span className='flex flex-row justify-between'>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    </span>
                    <div className={`text-gray-500 font-bold text-xl text-center`}>Quantity: {item.quantity}</div>
                                    <div className=''>
                                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Plus />
                                        </Button>
                                        <span className=''>{item.quantity}</span>
                                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => updateQuantity(item.id, item.quantity -1)}>
                                            <Minus />
                                        </Button>
                                    </div>
                                    <div className='flex justify-end'>
                                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={()=> removeFromWishlist(item.id)}>
                                            <Trash2/>
                                        </Button>
                                    </div>
                    </CardDescription>
                </Card>
                )) : (<p className='flex flex-row justify-center h-screen items-center'>No cart items</p>)}

            </div>
            </section> 

            <aside className='flex-1'>
                <h3 className='text-center text-xl font-bold'>Checkout</h3>
                <Card className="w-full rounded-xl px-4">
                    <CardHeader>
                        <CardTitle className="text-center">Items Summary</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        <div className='flex flex-row justify-between'>
                            <span className='text-2xl font-bold'>Total:</span>
  <span className="font-bold">₦{totalAmount.toLocaleString()}</span>
                        </div>
                        <form action="">
                        <div className='mb-2'>
                            <Label htmlFor="email" className="py-2">Email Address</Label>
                            <Input type="email" name="email" placeholder="email address" value={form.email} onChange={handleChange}/>
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor="name" className="py-2">Name</Label>
                            <Input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor="address" className="py-2">Address</Label>
                            <Input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange}/>
                        </div>
                        </form>
                    </CardDescription>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => {handleCheckout}}  disabled={loading}>{loading ? <Spinner/> : "Checkout"}</Button>
                </Card>
            </aside>
        </main>
    </div>
  )
}

export default Wishlist