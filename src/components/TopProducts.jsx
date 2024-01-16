import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTPs Error: ${response.status}`);
        }
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(`HTTPs Error: ${response.status}`);
        }
        const data = await response.json();

        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error.message);
      }
    };

    fetchCategories();
  }, []);

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  const renderProductSection = (category, maxProduct = 5) => {
    const filteredProducts = products.filter(
      (product) =>
        product.category.toLowerCase().trim() === category.toLowerCase().trim()
    );

    return (
      <div key={category}>
        <h4>{category.toUpperCase()}</h4>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
          {loading
            ? // Use Skeleton Loader when data is still loading
              Array.from({ length: maxProduct }).map((_, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-2 flex flex-col justify-end"
                >
                  <Skeleton height={200} />
                  <Skeleton
                    height={50}
                    width={150}
                    style={{ marginTop: "8px" }}
                  />
                  <Skeleton
                    height={20}
                    width={50}
                    style={{ marginTop: "4px" }}
                  />
                  <Skeleton
                    height={50}
                    width={100}
                    style={{ marginTop: "4px" }}
                  />
                </div>
              ))
            : // Render actual products when data is loaded
              filteredProducts.slice(0, maxProduct).map((product) => (
                <div
                  key={product.id}
                  className="border rounded-xl p-2 flex flex-col justify-end"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="h-[200px] object-contain"
                  />
                  <h3 className="font-bold">
                    {truncateString(product.title, 50)}
                  </h3>
                  <h4>${product.price}</h4>
                  <button className="text-white rounded-xl bg-gray-950 px-2 py-1 border-0 outline-none">
                    Add to Cart
                  </button>
                </div>
              ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-5 md:px-16 lg:px-36">
      <h2>Top Products</h2>
      <div className="flex gap-10 flex-col">
        {categories.map((category) => renderProductSection(category))}
      </div>
    </div>
  );
};
