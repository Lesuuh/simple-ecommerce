import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { CartContext } from "../contexts/Cart";
import { useContext } from "react";

export const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-10">
      <div className="flex justify-between items-center h-[60px] shadow-sm px-5 lg:px-36 mx-auto">
        <div className="logo text-xl md:text-2xl font-bold">
          <Link to="/">ShopNow</Link>
        </div>
        <ul className="md:flex gap-5 hidden">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="products">
            <li>Product</li>
          </Link>
        </ul>

        <ul className=" flex gap-5 items-center">
          <div className="md:flex hidden gap-5 items-center">
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </div>

          <li className="md:hidden">
            <RxHamburgerMenu />
          </li>

          <Link to="/cart">
            <li className="flex items-center relative">
              <FaOpencart className="text-2xl" />
              <span className="text-red-500 font-bold absolute top-[-7px] right-[-5px]">
                {cartItems.length}
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
