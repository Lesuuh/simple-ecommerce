import { useEffect, useState } from "react";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTPs Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error.message);
      }
    };
    fetchProducts();
  }, []);

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="px-5 md:px-16 lg:px-36">
      <h2 className="text-center py-10 font-bold text-xl">All Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="border rounded-xl p-2 flex flex-col justify-end"
            >
              <img
                src={product.image}
                alt=""
                className="h-[200px] object-contain"
              />
              <h3 className="font-bold">{truncateString(product.title, 30)}</h3>
              <h4>${product.price}</h4>
              <button className="text-white rounded-xl bg-gray-950 px-2 py-1 border-0 outline-none">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
