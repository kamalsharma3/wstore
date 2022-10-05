import Image from "next/image";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-2xl title-font text-green-600 tracking-widest font-semibold mb-1">
                WStore
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-medium mb-4">
                Congratulations for your awesome purchase!
              </h1>
              <p className="leading-relaxed mb-4 text-lg">
                Order ID: #12324242
              </p>
              <div class="flex mb-4">
                <a class="flex-grow text-purple-500 border-b-2 border-purple-500 py-2 text-lg px-1">
                  Product Description
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Quantities
                </a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Total
                </a>
              </div>

              <div class="flex justify-start items-center gap-28 space-x-3 mb-4 text-center">
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">
                    RedmiK50i Phantom Blue {"(256GB/8GB)"}
                  </span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">1</span>
                </div>
                <div className="flex  border-t border-gray-200 py-2">
                  <span className="text-gray-500">₹ 20000</span>
                </div>
              </div>

              <div className="flex">
                <span className="title-font font-bold text-2xl text-gray-900 py">
                  Subtotal: ₹ 20000
                </span>
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
          </div>

          <Image
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/https://dummyimage.com/400x400"
            width={400}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default Order;
