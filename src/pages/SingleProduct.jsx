

function SingleProduct() {
  return (
    <div className="w-full px-4 py-10 flex flex-col lg:flex-row lg:items-start items-center justify-center gap-8 lg:gap-12">
    
      <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
        <img
          className="w-60 h-auto lg:w-full object-contain rounded-lg shadow-md"
          src="https://maliks.com/wp-content/uploads/2025/01/9781626569416.jpg"
          alt="Product"
        />
      </div>

     
      <div className=" lg:w-1/3 w-[80%]  flex flex-col gap-5 text-start">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Eat That Frog
          </h2>
          <p className="text-md text-gray-600">By Some Other</p>
          <p className="text-lg font-bold text-slate-700">$14.99</p>
        </div>
        <p className="text-sm text-justify text-gray-700 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="btn-primary w-fit px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
