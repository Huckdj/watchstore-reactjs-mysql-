import React from 'react';
import { useCart } from './CartContext';
import Header from './Header'
function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <>
        <Header/>
        <div className='bodyind'>
            <h1>Giỏ hàng của bạn</h1>
            {cart.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Cart;