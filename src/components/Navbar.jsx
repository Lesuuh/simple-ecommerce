import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[60px] shadow-sm px-5 lg:px-36 mx-auto">
      <div className="logo text-2xl font-bold">ShopNow</div>
      <ul className="flex gap-5">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="products">
          <li>Product</li>
        </Link>
      </ul>

      <ul className="flex gap-5 items-center">
        <li>Login</li>
        <li>Register</li>
        <li><FaOpencart /></li>
      </ul>
    </div>
  );
};
