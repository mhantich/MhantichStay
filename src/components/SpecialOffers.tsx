import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SpecialOffers = () => {
  const rooms = [
    {
      title: 'King Ensuite Room',
 
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/34.jpg',
   
    },
    {
      title: 'Queen Room',
   
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/18-1470x920.jpg',
  
    },
    {
      title: 'Deluxe Suite',

      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/17-1470x920.jpg',

    },
    {
      title: 'Standard Room',
 
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/16-1470x920.jpg',

    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl text-center font-medium mb-4">Special Offers</h1>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim.
      </p>

      <div className="px-8"> {/* Added padding for better slide visibility */}
        <Swiper
          spaceBetween={30} // Increased space between slides
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 }, // Increased space for larger screens
          }}
          navigation={false}
          pagination={{ clickable: false }}
          className="py-8" // Added vertical padding
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index} className="px-2"> {/* Added horizontal padding to each slide */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col gap-4">
                    <div className=' border-b-[1px] py-2'>

                  <h2 className="text-xl font-thin  ">{room.title}</h2>
                    </div>
                  <h2 className="text-xl font-thin text-gray-400">10% off for families in March</h2>
           
  
              
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialOffers;