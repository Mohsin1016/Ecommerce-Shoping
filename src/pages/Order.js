import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const Order = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        async function fetchFormData() {
            try {
                const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/formSubmissions.json');
                const data = await response.json();

                if (response.ok) {
                    // Assuming data is an object with unique IDs as keys
                    // Here, we just take the first object's data for demonstration
                    const firstSubmissionId = Object.keys(data)[0];
                    const firstSubmissionData = data[firstSubmissionId];
                    setFormData(firstSubmissionData);
                } else {
                    console.error('Error fetching form data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        }

        fetchFormData();
    }, []);

    return (
        <div>
            <div className='flex justify-center my-5'>
                <h1 className="text-xl font-semibold leading-6 text-gray-900">Your Order Details</h1>
            </div>
            {formData ? (
                <>
                    <div className="flex justify-center my-5">
                        <div className=" p-4 bg-white shadow rounded">
                            <div className="px-4 sm:px-6">
                                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                    Order Details
                                </h3>
                            </div>
                            <div className="mt-6 border-t border-gray-200">
                                <dl className="divide-y divide-gray-200">
                                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium leading-5 text-gray-500">
                                            Contact
                                        </dt>
                                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2 sm:mt-0">
                                            {formData.email}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium leading-5 text-gray-500">
                                            Ship to
                                        </dt>
                                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2 sm:mt-0">
                                            {formData.streetAddress}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium leading-5 text-gray-500">
                                            Method
                                        </dt>
                                        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:col-span-2 sm:mt-0">
                                            Free Shipping + FBR POS Fee · Rs1.00
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <div className='flex justify-center my-5'>
                <h1 className="text-xl font-semibold leading-6 text-gray-900">Payment</h1>
            </div>
            <div className='flex justify-center my-5'>
                <p className=" text-gray-900">All transactions are secure and encrypted.</p>
            </div>
            <div className="flex justify-center my-5">
                <div className=" w-full sm:w-96 p-4 bg-white shadow rounded">

                    <div className="flex items-center py-5">
                        <input className="form-radio h-4 w-4 text-indigo-600" readOnly type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="ml-2 block text-sm text-gray-600" htmlFor="flexRadioDefault1">
                            Cash on Delivery (COD)
                        </label>
                    </div>
                    <div className="flex items-center py-5 border-t border-gray-200">
                        <input className="form-radio h-4 w-4 text-indigo-600" readOnly type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="ml-2 block text-sm text-gray-600" htmlFor="flexRadioDefault2">
                            Credit/Debit Card - XPay
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <Link
                    href={"/Order"}
                    className='flex items-center justify-center gap-3 hover:bg-[#00798C] bg-[#707378] px-5 py-2 rounded-md md:cursor-pointer  h-12 flex-shrink-0 text-white text-[16px] ease-in duration-300 transition-all'
                >
                    Complete Order
                </Link>
            </div>
        </div>
    );
};

export default Order;
