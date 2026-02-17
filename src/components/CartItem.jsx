import React from 'react'
import { Card, CardDescription } from './ui/card'
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from './ui/button';

const CartItem = ({item, onRemove, onUpdate}) => {
  return (
    <div className='flex py-4 mx-2'>
        <Card className="w-full shadow-xl">
            <CardDescription className="flex flex-row gap-4 " >
                <img src={item.image} alt={item.name} className='w-40 h-20 object-cover' />
                <div className=''>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => onUpdate(item.id, item.quantity + 1)}>
                    <Plus />
                    </Button>
                    <span className=''>{item.quantity}</span>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => onUpdate(item.id, item.quantity -1)}>
                        <Minus />
                    </Button>
                </div>
                <div className='flex justify-end'>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={()=> onRemove(item.id)}>
                        <Trash2/>
                    </Button>
                </div>
            </CardDescription>
        </Card>
    </div>
  )
}

export default CartItem