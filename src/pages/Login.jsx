export const Login = () => {
  return (
    <div className=" flex justify-center py-10 items-center px-5  md:px-16 lg:px-36 ">
      <div className=" flex flex-col gap-5 py-10  px-5 outline-1 border border-gray-300 rounded-md">
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            // placeholder="Username"
            className="border outline-1 border-slate-500 w-full px-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            // placeholder="Password"
            className="border outline-1 border-slate-500 px-2"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="ml-2">
            Remember me
          </label>
        </div>
        <button className="bg-gray-900 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

