import React from 'react'
import './index.css'

// FIXME Create a global way to monitor cart
const itemsInCart = [
  {
    name: `Ticket to Chili when it's Chilly Cook-Off`,
    price: 15,
    quantity: 2
  },
  {
    name: `"Time for Chili" Novelty Baseball Cap`,
    price: 12,
    quantity: 2
  }
]

function ShoppingCart() {
  if (!itemsInCart || !itemsInCart.length) {
    return (
      <>
        <span id="cart-title">Shopping Cart</span>
        <span id="empty">Your shopping cart is empty.</span>
        <span id="visit-store">Visit our store.</span>
      </>
    )
  }
  
  // FIXME Controlled quantity input
  return (
    <>
      <span id="cart-title">Shopping Cart</span>
      {
        itemsInCart.map(item => (
          <div key={item.name} className='cart-item'>
            <span className="item-name">
              {item.name}
            </span>
            <span className="item-price">
              x ${item.price}
            </span>
            <input
              className="quantity"
              type="number"
              defaultValue={item.quantity}
            ></input>
          </div>
        ))
      }
      <div>
        <span id="cart-total">
          Total: ${itemsInCart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
        </span>
      </div>
      <div>
        <button id="check-out">Check Out</button>
      </div>
    </>
  )
}

export default ShoppingCart
