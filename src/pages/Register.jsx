import { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    rememberMe: false,
  });

  const handleSubmit = () => {
    if (formData == "") {
      alert("put something");
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : e.target.value,
    }));
  };

  return (
    <div className="flex h-[90dvh] justify-center  flex-col py-10 items-center px-5 md:px-16 lg:px-36 ">
      <h2 className="py-5 text-2xl font-bold">Welcome to ShopNow</h2>
      <div className=" flex flex-col px-5 gap-5 py-10 w-full max-w-[400px] outline-1 border border-gray-300 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="border outline-1 border-slate-500 w-full max-w-[500px] px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="lastname"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="border outline-1 border-slate-500 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border outline-1 border-slate-500 px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="border outline-1 border-slate-500 px-2 py-1 rounded"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe" className="ml-2">
            Remember me
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#10A37F] text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};
