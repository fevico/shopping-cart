import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const Order = () => {
const orderItem = 
   [
    {
      name: "Wireless Earbuds (Active Noise Cancelling)",
      quantity: 2,
      amount: 68500.00,
      status: "delivered",
      reference: "ORD-REF-8K4P9X2M"
    },
    {
      name: "USB-C Fast Charging Cable (2m)",
      quantity: 5,
      amount: 12750.00,
      status: "shipped",
      reference: "ORD-REF-WYJ6U3LJ"
    },
    {
      name: "20,000mAh Power Bank",
      quantity: 1,
      amount: 38900.00,
      status: "processing",
      reference: "ORD-REF-EIDU7ZUB"
    },
    {
      "name": "Tempered Glass Screen Protector (iPhone 14)",
      "quantity": 3,
      "amount": 9450.00,
      "status": "delivered",
      "reference": "ORD-REF-S3VQ9JAR"
    },
    {
      "name": "Bluetooth Portable Speaker",
      "quantity": 1,
      "amount": 52000.00,
      "status": "pending",
      "reference": "ORD-REF-DYAW9INC"
    },
    {
      "name": "Silicone Phone Case (Samsung Galaxy A54)",
      "quantity": 4,
      "amount": 14800.00,
      "status": "cancelled",
      "reference": "ORD-REF-3VK2KUN1"
    },
    {
      "name": "1TB Portable External SSD",
      "quantity": 1,
      "amount": 145000.00,
      "status": "shipped",
      "reference": "ORD-REF-7VV1KKI6"
    },
    {
      "name": "Wireless Gaming Mouse",
      "quantity": 2,
      "amount": 29800.00,
      "status": "returned",
      "reference": "ORD-REF-4656ZH7W"
    },
    {
      name: "7-in-1 Multi-Port USB Hub",
      quantity: 3,
      amount: 24900.00,
      status: "delivered",
      reference: "ORD-REF-5U2JONLR"
    },
    {
      name: "Smartwatch Strap (Fitness Band Compatible)",
      quantity: 6,
      amount: 11400.00,
      status: "processing",
      reference: "ORD-REF-R1A6OJ6G"
    }
  ]

  return (
    <div>
        <Table>
            <TableCaption>Order Items</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Item</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orderItem && orderItem.length > 0 ? orderItem.map((item) => (
                <TableRow>
                    <TableCell>{item.reference}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>{item.name}</TableCell>
                </TableRow>
                )) : (
                    <p className='text-center text-xl font-bold'>No order items</p>
                )}
              
            </TableBody>
        </Table>
    </div>
  )
}

export default Order