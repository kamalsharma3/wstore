import Link from "next/link";
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Checkout = ({ cart, subTotal, clearCart, addToCart, removeFromCart }) => {
  return (
    <div className="container m-auto p-10 relative top-40">
      <h1 className="font-bold text-3xl text-center">Checkout</h1>
      <h2 className="font-semibold text-xl mt-5">1. Delivery Details</h2>
      <div className="mx-3 my-2 flex gap-2">
        <div className="mb-4 w-1/2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mb-4 my-2">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="mx-3 my-2 flex gap-2">
        <div className="mb-4 w-1/2">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="mx-3 my-2 flex gap-2">
        <div className="mb-4 w-1/2">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4 w-1/2">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
            Pincode
          </label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <h2 className="font-semibold text-xl mt-5">2. Review items in cart </h2>
      <div className="sidecart h-full w-full right-0 top-28 bg-gray-100 px-1 py-16 z-10 fold-bold text-5xl pt-1 text-center">
        <ol className="list-decimal m-2 p-1 font-bold ">
          {Object.keys(cart).length == 0 && (
            <div className="m-3 text-2xl">😞😞 Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <>
                <li key={k} className="bg-green-200 px-1 py-2 text-lg">
                  <div className="flex justify-start items-center ">
                    <div className="font-bold mr-9 pr-5 text-2xl ">
                      {cart[k].name}
                    </div>
                    <div className="flex justify-center items-center gap-2 right-2 top-2 text-3xl ">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant,
                          );
                        }}
                        className="text-red-500 cursor-pointer"
                      />
                      <div className=" text-black text-2xl flex justify-center items-center">
                        {cart[k].qty}
                      </div>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant,
                          );
                        }}
                        className="text-green-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ol>
      </div>

      <div className="subtotal">
        <span className="font-bold text-lg">Subtotal: ₹ {subTotal}</span>
      </div>

      <div className="mx-5 font-bold">
        <Link href={"/checkout"}>
          <a className="mt-10 text-white bg-green-600 border-0 py-2 px-10 focus:outline-none hover:bg-blue-600 rounded text-xl flex items-center justify-center gap-1 text-center">
            <BsFillCartCheckFill /> Pay
          </a>
        </Link>
      </div>
      <button
        onClick={clearCart}
        className="flex items-center justify-center gap-2 mt-20 text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-xl"
      >
        <BsFillCartDashFill /> Clear Cart
      </button>
    </div>
  );
};

export default Checkout;
