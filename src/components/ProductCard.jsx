import React from 'react'
import {Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';

const ProductCard = ({product, addToCart, addToWishlist}) => {
  return (
    <div>
        <Card className="w-full max-w-sm">
            <CardContent>
                <div>
                <img src={product.image} alt={product.name} className='w-96 h-48 object-cover' />
                <p className="text-sm text-xl">{product.name}</p>
                <span className='flex flex-row justify-between'>
                <h3 className='text-sm text-gray-500'>Category: {product.category}</h3>
                <h3 className='text-gray-500'>Price: ₦{product.price.toLocaleString()}</h3>
                </span>
                <div className='md:flex flex-row justify-between mt-2 flex-col space-y-2 w-full max-w-md'>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={()=> addToCart(product)}>Add To Cart <ShoppingCart/> </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => addToWishlist(product)}>Add To Wishlist<Heart/> </Button>
                </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductCard