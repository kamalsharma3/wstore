import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <div className="max-w-2xl my-12 mx-10 sm:mx-20 md:mx-auto">
        <div className="bg-white shadow-md border border-purple-200 rounded-lg min-w-max p-4 sm:p-6 lg:p-8 dark:bg-purple-800 dark:border-purple-700">
          <form className="space-y-6" action="#">
            <h3 className="text-xl font-medium text-purple-900 dark:text-white">
              Register your account
            </h3>
            <p className="text-md font-medium text-purple-900 dark:text-white">
              or
              <Link href="/login" className="cursor-pointer ">
                <a className="underline text-xl"> Log in</a>
              </Link>
            </p>

            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                placeholder="Please type your name"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Please type your phone number"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please type your email"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Please type your password"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="repeatpassword"
                className="text-sm font-medium text-purple-900 block mb-2 dark:text-purple-300"
              >
                Password
              </label>
              <input
                type="password"
                name="repeatpassword"
                id="repeatpassword"
                placeholder="Please re-type your password"
                className="bg-purple-50 border border-purple-300 text-purple-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-purple-600 dark:border-purple-500 dark:placeholder-purple-400 dark:text-white"
                required=""
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
