
const WelcomeSection = () => {
  return (
    <section className="bg-gray-100 h-[60vh] py-20 px-6">
      <div className="text-center items-center  flex flex-col gap-2 max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="lg:text-4xl text-gray-700 text2xl font-bold mb-4">Welcome To MhantichStay Hotel</h2>
        {/* Divider */}
        <div className="w-12 h-1 bg-brown-500 mx-auto mb-6"></div>
        {/* Description */}
        <p className="text-gray-600 text-sm mb-8">
          Nullam et aliquam leo. Pellentesque eget sapien massa. Cras ac est
          faucibus, auctor urna sed, mollis magna. Vestibulum a ante porttitor,
          tincidunt neque in, semper ipsum. Morbi hendrerit sed risus in
          venenatis.
        </p>
        {/* Button */}
        <button className="bg-brown-500 text-white  bg-amber-700 px-10 py-4 w-fit shadow-md hover:bg-brown-600 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
