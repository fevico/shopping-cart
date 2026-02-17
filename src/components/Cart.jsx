import React from 'react'
import CartItem from './CartItem'

const Cart = ({cart, onRemove, onUpdate}) => {
    if(cart.length === 0){
        return <div className='text-center text-xl text-gray-500 font-semibold'>Your cart is empty</div>
    }
  return (
    <div className='flex flex-col'>
        <h3 className='text-center'>Shopping Cart</h3>
        {cart.map((item, index) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate}/>
        ))}
    </div>
  )
}

export default Cart