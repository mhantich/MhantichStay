
function StaywithUs() {
  return (
    <div className="h-[70vh] flex items-center justify-center object-cover"    style={{
        backgroundImage: `url(4.webp)`,
        transformOrigin: "center center",
      }}>
      <div
       
      >


        {/* Content */}
        <div className=" z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1
              className={`mb-6 text-xl font-bold text-white transform transition-all duration-1000 ease-out
                 `}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quas ut officia suscipit repellat voluptate, exercitationem aliquam tempore cupiditate dolore. Sed maxime excepturi, doloribus dolores accusantium doloremque voluptate quod ex.
            </h1>
            <p
              className={`mb-8 text-xl text-gray-200 transform transition-all duration-1000 ease-out
              
                  }`}
            ></p>
            <button
              className={`px-8 py-3 bg-amber-700/50 text-white rounded-md font-semibold hover:bg-gray-100 
                  transform transition-all duration-1000 ease-out
                 `}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaywithUs;
