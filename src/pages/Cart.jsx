import { Card, CardDescription } from '@/components/ui/card'
import { useCart } from '@/hooks/useCart'
import { Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'  
import { Button } from '@/components/ui/button'

const Cart = () => {
    const {cart, removeFromCart, updateQuantity} = useCart()
  return (
    <div className='mx-10'>
        <main className='flex w-full'>
            <section className='flex-1'>
                <h2>Cart items</h2>
            <div className='grid grid-cols-1 gap-4'>
                {cart.map((item) => (
                <Card className="w-full max-w-sm px-4 shadow-xl">
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
                                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={()=> removeFromCart(item.id)}>
                                            <Trash2/>
                                        </Button>
                                    </div>
                    </CardDescription>
                </Card>
                ))}

            </div>
            </section>

            <aside className='flex-1'>
                <h3>Checkout</h3>
            </aside>
        </main>
    </div>
  )
}

export default Cart