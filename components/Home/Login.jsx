import Link from "next/link";
const Login = () => {
  return (
    <div className="pl-24 ">
      <div className="pt-24">
        <h1 className="font-bold text-5xl">Login</h1>
        <p className="pt-4 text-2xl text-gray-500">
          Please login to your account
        </p>
      </div>

      <div className="pt-12">
        <p className="pt-6 text-3xl text-gray-500">Username</p>
        <input
          type="text"
          className="mt-5 border border-gray-500 rounded-lg px-4 text-xl h-16 w-3/5"
        />
      </div>

      <div className="pt-12">
        <p className="text-3xl text-gray-500">Password</p>
        <input
          type="Password"
          className="mt-5 border  border-gray-500 focus:border-blue-600 rounded-lg px-4 text-xl h-16 w-3/5"
        />
      </div>

      <div className="pt-8 flex flex-wrap w-3/5 justify-between">
        <div className="flex py-2">
          <input type="checkbox" className="h-8 w-8" />
          <p className="text-xl px-2 font-semibold">Remember Me</p>
        </div>
        <div className="flex py-2">
          <Link href="#">
            <a className=" text-xl text-gray-500 hover:text-gray-800 hover:font-semibold ">
              Forget Password ?
            </a>
          </Link>
        </div>
      </div>

      <div className="pt-16">
        <Link href="/dashboard">
          <button className="bg-accent-1 hover:bg-blue-600 text-3xl font-semibold text-white rounded-lg h-16 w-3/5">
            Login
          </button>
        </Link>
        <section className="w-3/5">
          <Link href="#">
            <a className="justify-end flex text-lg py-2 text-gray-500  hover:text-gray-800 hover:font-semibold">
              Login with cas
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;
