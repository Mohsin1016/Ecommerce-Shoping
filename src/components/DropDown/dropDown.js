
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function DropDown() {
  const [categoryStates, setCategoryStates] = useState([]);
  const [Items, setItems] = useState([]);
  const [Products, setProducts] = useState([]);

  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const toggleCategory = (index) => {
    const updatedStates = [...categoryStates];
    updatedStates[index] = !updatedStates[index];
    setCategoryStates(updatedStates);
  };

  useEffect(() => {
    async function fetchSubItems() {
      try {
        const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/Categories.json');
        const data = await response.json();

        if (response.ok) {
          const Sub = Object.values(data || {});
          setItems(Sub);
          setCategoryStates(new Array(Sub.length).fill(false));
        } else {
          console.error('Error fetching cart items:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    fetchSubItems();
  }, []);

  useEffect(() => {
    async function fetchCatItems() {
      try {
        const response = await fetch('https://login-b6e02-default-rtdb.firebaseio.com/SubCategories.json');
        const data = await response.json();
        if (response.ok) {
          const Sub = Object.values(data || {});
          setProducts(Sub); // Store the fetched product data
          setCategoryStates(new Array(Sub.length).fill(false));
        } else {
          console.error('Error fetching cart items:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }
    fetchCatItems();
  }, []);

  return (
    <>
      <ul className="flex flex-col md:flex-row gap-3">
        {Items.map((cat) => (
          <div key={cat.id}>
            <li>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center"
                    id={`options-menu-${cat.id}`}
                    aria-expanded={categoryStates[cat.id]}
                    aria-haspopup="true"
                    onClick={() => {
                      toggleCategory(cat.id);
                    }}
                  >
                    {cat.title}
                  </button>
                </div>
                {categoryStates[cat.id] && (
                  <div
                    onMouseEnter={() => {
                    }}
                    onMouseLeave={() => {
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 items-center justify-center rounded-lg shadow-lg flex-col space-y-4 bg-white p-6"
                  >
                    <section className="overflow-hidden my-5">
                      <div className="flex flex-col justify-center items-center md:flex-row gap-6 mt-5">
                        {Products.map((itm) => (
                          itm.Category === cat.title && (
                            <Link
                              key={itm.id}
                              href={{
                                pathname: "/Products",
                                query: { id: itm.SubCategory },
                              }}>
                              <div
                                key={itm.id}
                                className="product-card flex flex-col justify-center items-center"
                                onClick={() => {
                                  setSelectedSubCategory(itm.SubCategory);

                                }}
                              >
                                <div className="w-[290px] h-[300px] shadow bg-white rounded-lg flex overflow-hidden items-center justify-center">
                                  <img src={itm.imageUrl} alt={itm.title} className="mt-12" />

                                </div>
                                <h3 className="text-[22px] font-medium py-2">
                                  {itm.SubCategory}
                                </h3>
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
