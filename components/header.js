import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  BsCart4,
  BsFillCartCheckFill,
  BsFillCartDashFill,
} from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";

const Header = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();
  return (
    <div className="sticky top-0 w-full z-20 ">
      <header className="text-gray-600 body-font bg-green-500  py-1 shadow-lg shadow-blue-600/50 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center pb-3">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src="/WStore logo 180 x 50.png"
                alt="WStore logo"
                width={180}
                height={40}
              />
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-1 font-bold text-zinc-600 py-5 md:text-xl">
            <Link href={"/mobiles"}>
              <a className="mr-5 hover:text-gray-900">Mobiles</a>
            </Link>
            <Link href={"/headphones"}>
              <a className="mr-5 hover:text-gray-900">Headphones</a>
            </Link>
            <Link href={"/earphones"}>
              <a className="mr-5 hover:text-gray-900">Earphones</a>
            </Link>

            <Link href={"/smartwatches"}>
              <a className="mr-5 hover:text-gray-900">Smartwatches</a>
            </Link>
          </nav>

          <Link href={"/login"}>
            <a className="flex justify-center items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 hover:text-white rounded m-1 font-semibold absolute right-14 sm:right-20 top-2 md:top-1">
              <RiAccountBoxFill className="text-2xl sm:text-4xl" />
            </a>
          </Link>

          <button className="flex justify-center items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 hover:text-white rounded m-1 font-semibold absolute right-1 top-2 md:top-1">
            <BsCart4
              onClick={() => {
                togglecart();
              }}
              className="text-2xl sm:text-4xl"
            />
          </button>
        </div>
      </header>
      {/* -----------------------------------Shopping Cart Sidebar------start-------------------------- */}
      <div
        ref={ref}
        className={`sidecart h-[100vh] w-[60vw] sm:[40vw] md:w-[35vw] absolute right-0 top-40 md:top-28 bg-gray-300 px-1 py-16 z-10  transform transition-transform ${
          Object.keys(cart).length == 0 ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <h3 className="fold-bold text-2xl pt-8 text-center ">Shopping Cart</h3>

        <span className="absolute -top-5 sm:top-1 right-1 mr-1 sm:mr-2 flex gap-1">
          <AiFillCloseCircle
            onClick={togglecart}
            className="cursor-pointer text-3xl text-red-400 mt-7 sm:mt-3"
          />
        </span>
        <ol className="list-decimal m-2 pl-2 font-semibold ">
          {Object.keys(cart).length == 0 && (
            <div className="m-3 text-2xl">😞😞 Your cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <>
                <li key={k} className="bg-blue-300 px-1 py-2 text-lg">
                  <div className="flex justify-start items-center ">
                    <div className="font-semibold mr-9 pr-5">
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
                      <div className=" text-white text-lg flex justify-center items-center">
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
        <div className="font-bold text-lg">Subtotal: ₹ {subTotal}</div>
        <div className="md:flex justify-center items-center gap-3">
          <Link href={"/checkout"}>
            <button className="flex items-center justify-center gap-1 mt-10 text-white bg-blue-700 border-0 py-1 px-1 focus:outline-none hover:bg-blue-600 rounded text-xl mx-1">
              <BsFillCartCheckFill /> Checkout
            </button>
          </Link>
          <button
            onClick={() => {
              clearCart();
            }}
            className="flex items-center justify-center gap-1 mt-10 text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-xl"
          >
            <BsFillCartDashFill /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
