// Cart.js

import React, { useEffect, useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import Link from 'next/link';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleIncreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((product) =>
            product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCartItems(updatedCartItems);
    };

    const total = cartItems.reduce((totalPrice, product) => {
        return totalPrice + product.Price * product.quantity;
    }, 0);

    const handleDecreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((product) =>
            product.id === productId
                ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 } // Ensure quantity doesn't go below 1
                : product
        );

        // Filter out the product if its quantity becomes 0
        const filteredCartItems = updatedCartItems.filter((product) => product.quantity > 0);

        setCartItems(filteredCartItems);
    };
    useEffect(() => {
        async function fetchCartItems() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Cart.json');
                const data = await response.json();

                if (response.ok) {
                    const items = Object.values(data || {});
                    setCartItems(items);
                } else {
                    console.error('Error fetching cart items:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }

        fetchCartItems();
    }, []);


    return (
        <>
            <section className='overflow-hidden my-5'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-5'>
                    {cartItems.map((product, index) => (
                        <div key={index} className='product-card flex flex-col justify-center items-center'>
                            <div className='w-[290px] h-[300px] shadow bg-white rounded-lg flex overflow-hidden items-center justify-center'>
                                <img src={product.imageUrl} alt={product.Name} className='mt-12' />
                            </div>
                            <h3 className='text-[22px] font-medium py-2'>{product.Name}</h3>
                            <p className='text-[22px] font-medium'>${product.Price}</p>
                            <div className='flex justify-center items-center gap-1'>
                                <button
                                    onClick={() => handleDecreaseQuantity(product.id)}
                                    className='flex justify-center items-center px-1 w-8 py-1 hover:bg-[#00798C] bg-[#707378] rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                                >
                                    -
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                    onClick={() => handleIncreaseQuantity(product.id)}
                                    className='flex justify-center items-center px-1 w-8 py-1 hover:bg-[#00798C] bg-[#707378] rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center my-5'>
                    <p className='text-[18px] font-medium'>Total: ${total.toFixed(2)}</p>
                </div>
                <div className='flex justify-center my-5'>
                    <Link
                        href={"/Shipping"}
                        className='flex items-center justify-center gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer  h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                    >
                        <BsFillCartCheckFill size={15} className='text-white' />
                        Continue to Shipping
                    </Link>
                </div>

            </section>
        </>
    );
};

export default Cart;
