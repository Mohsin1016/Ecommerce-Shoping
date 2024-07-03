
import React, { useEffect, useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import Link from 'next/link';

const Shipping = () => {

    const [cartItems, setCartItems] = useState([]);
    const [SubItems, setSubItems] = useState([]);



    const total = SubItems.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.quantity;
    }, 0);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/cart.json');
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

    useEffect(() => {
        async function fetchSubItems() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Sub.json');
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

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'Pakistan',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store form data in Firebase
        const firebaseUrl = 'https://login-b6e02-default-rtdb.firebaseio.com/formSubmissions.json';
        fetch(firebaseUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log('Form data submitted successfully');
                } else {
                    console.error('Error submitting form data');
                }
            })
            .catch(error => {
                console.error('Error submitting form data:', error);
            });
    };

    return (
        <>

        <section className='overflow-hidden my-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
            {/* Left Column */}
            <div className='flex flex-col p-4 justify-center items-center'>
                <section className='overflow-hidden my-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
                        {SubItems.map((product) => (
                            <div key={product.id} className='product-card flex flex-col justify-center items-center'>
                                <div className=' shadow bg-white rounded-lg flex overflow-hidden items-center justify-center'>
                                    <img src={product.image} alt={product.title} className='mt-12' />
                                </div>
                                <h3 className='text-[22px] font-medium py-2'>{product.title}</h3>
                                <p className='text-[22px] font-medium'>${product.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center my-5'>
                        <p className='text-[18px] font-medium'>Total: ${total.toFixed(2)}</p>
                    </div>
                </section>
            </div>

            {/* Right Column */}
            <div className='flex flex-col border-t border-gray-900/10 pt-4 md:border-t-0 md:border-l border-gray-900/10 justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-6'>
                    <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Contact</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Have an Account or <a href="/Login">Login</a> </p>
                                <div className="col-span-full">
                                    <div className="mt-2">
                                        <input type="text" required name="email" onChange={handleInputChange} placeholder='Email' id="email" autocomplete="street-address" className=" px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label for="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                        <div className="mt-2">
                                            <input type="text" required name="firstName" onChange={handleInputChange} id="firstName" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label for="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                        <div className="mt-2">
                                            <input type="text" required name="lastName" onChange={handleInputChange} id="lastName" autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label for="Phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                        <div className="mt-2">
                                            <input id="Phone" required name="Phone" onChange={handleInputChange} type="Phone" autocomplete="Phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                        <div className="mt-2">
                                            <select id="country" name="country" autocomplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>Pakistan</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label for="streetAddress" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                        <div className="mt-2">
                                            <input type="text" required name="streetAddress" onChange={handleInputChange} id="streetAddress" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                        <div className="mt-2">
                                            <input type="text" required name="city" id="city" onChange={handleInputChange} autocomplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                        <div className="mt-2">
                                            <input type="text" required name="region" onChange={handleInputChange} id="region" autocomplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="postalCode" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                        <div className="mt-2">
                                            <input type="text" required name="postalCode" onChange={handleInputChange} id="postalCode" autocomplete="postalCode" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* ... (your existing form fields) */}
                    </div>

                    <div className='flex flex-col md:flex-row justify-center my-5 space-y-4 md:space-y-0 md:space-x-4'>
                        <button
                            type='submit'
                            className='w-full md:w-auto flex items-center justify-center gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                        >
                            Submit
                        </button>
                        <Link
                            href={"/Order"}
                            className='w-full md:w-auto flex items-center justify-center gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                        >
                            Place Order
                        </Link>
                    </div>
                    <div className='mt-6 flex items-center justify-start gap-x-6'>
                        <Link href={"/"}>Refund Policy</Link>
                        <Link href={"/"}>Terms of Service</Link>
                    </div>
                </form>
            </div>
        </div>
    </section>
        </>
    );
};

export default Shipping;
