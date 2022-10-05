import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="max-w-2xl my-12 mx-10 sm:mx-20 md:mx-auto">
        <div className="bg-white shadow-md border border-purple-200 rounded-lg min-w-max p-4 sm:p-6 lg:p-8 dark:bg-purple-800 dark:border-purple-700">
          <form className="space-y-6" action="#">
            <h3 className="text-xl font-medium text-purple-900 dark:text-white">
              Sign in
            </h3>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="bg-purple-50 border border-purple-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-purple-700 dark:border-purple-600 dark:focus:ring-blue-600 dark:ring-offset-purple-800"
                    required=""
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-purple-900 dark:text-purple-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link href={"/forgot"}>
                <a className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-purple-500 dark:text-purple-300">
              Not yet registered?{" "}
              <Link href={"/signup"}>
                <a className="text-blue-700 hover:underline dark:text-blue-500">
                  Sign up
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
