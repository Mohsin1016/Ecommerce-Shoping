import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import { useRouter } from 'next/router';

import { BsArrowRight, BsFillCartCheckFill, BsStarFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const Products = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [SubItems, setSubItems] = useState([]);

  const handleAddToCart = async (product) => {
    setCartProducts([...cartProducts, product]);
    
    const isProductInCart = cartProducts.some((p) => p.id === product.id);

    if (isProductInCart) {
      console.log(`Product ${product.Name} is already in the cart.`);
      return;
    }

    try {
      const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Cart.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        console.log(`Added product ${product.Name} to cart in Firebase Realtime Database`);
      } else {
        console.error('Error adding product to cart:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  useEffect(() => {
    async function fetchSubItems() {
      try {
        const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Products.json');
        const data = await response.json();
        if (response.ok) {
          const Sub = Object.values(data || {});
          setSubItems(Sub);
        } else {
          console.error('Error fetching cart items:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    
    fetchSubItems();
  }, []);
  const router = useRouter()
  const { id } = router.query;
  return (
    <section className='overflow-hidden my-5'>
      <div className='flex flex-col justify-center items-center md:flex-row gap-6 mt-5'>
        {SubItems.map((itm , index) => (
          id === itm.SubCategory && (
            <div key={index} className='product-card flex flex-col justify-center items-center'>
              <div className='w-[290px] h-[300px] shadow bg-white rounded-lg flex overflow-hidden items-center justify-center'>
                <img src={itm.imageUrl} alt={itm.title} className='mt-12' />
              </div>
              <h3 className='text-[22px] font-medium py-2'>{itm.title}</h3>
              <div className='text-sm text-gray-950 flex items-center justify-center gap-3 pb-3'>
              </div>
              <p className='text-[22px] font-medium'>${itm.Price}</p>
              <div className='flex justify-center items-center gap-2 w-full mt-3'>
                <button
                  onClick={() => handleAddToCart(itm)}
                  className='flex items-center justify-center gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer w-52 h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                >
                  <BsFillCartCheckFill size={15} className='text-white' />
                  Add to cart
                </button>
                <button
                  className='flex justify-center items-center px-1 w-16 py-1 hover:bg-[#00798C] bg-[#707378] rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                >
                  <AiFillHeart size={25} className='text-white' />
                </button>
              </div>
            </div>
          )
        ))}</div>
    </section>
  );
};

export default Products;
