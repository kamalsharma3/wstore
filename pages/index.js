import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>WStore - Your Shopping Needs End Here</title>
        <meta name="description" content="WStore" />
        <link rel="icon" href="/WStore logo 180 x 50.png" />
      </Head>

      <div className="flex">
        <Image
          src="/Wstore Home1 1500 x 900px 1.png"
          alt="WStore Home"
          width={2000}
          height={900}
        />
      </div>
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 my-12 py-12 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-5xl text-green-500 tracking-widest font-medium title-font mb-1">
              WSTORE - Your Online Store
            </h1>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Shop with WStore
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Enjoy your shopping
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-green-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
