import React from 'react'

const Cart = ({ cartItems, setCartItems }) => {
  return (
    <h1 className='cart'>
      {cartItems}
    </h1>
  )
}

export default Cart