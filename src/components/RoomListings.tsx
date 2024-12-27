import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { UserIcon } from 'lucide-react';

const RoomListings = ({ title, isActive }: { title: string; isActive: boolean }) => {
  const rooms = [
    {
      title: 'King Ensuite Room',
      capacity: '2 Adults',
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/34.jpg',
      size: '20m',
      city: 'Agadir',
    },
    {
      title: 'Queen Room',
      capacity: '2 Adults',
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/18-1470x920.jpg',
      size: '20m',
      city: 'Agadir',
    },
    {
      title: 'Deluxe Suite',
      capacity: '3 Adults',
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/17-1470x920.jpg',
      size: '30m',
      city: 'Marrakech',
    },
    {
      title: 'Standard Room',
      capacity: '2 Adults',
      image: 'https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/16-1470x920.jpg',
      size: '18m',
      city: 'Casablanca',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-1 py-12">
      <h1 className="text-3xl text-center font-medium mb-4">{title}</h1>
      {isActive && (
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim.
        </p>
      )}

      <div className="px-3"> {/* Added padding for better slide visibility */}
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
                  <h2 className="text-xl font-medium">{room.title}</h2>
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="h-5 w-5 text-amber-700 mr-2" />
                    <span className="font-bold">Capacity: {room.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="h-5 w-5 text-amber-700 mr-2" />
                    <span className="font-bold">Size: {room.size}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="h-5 w-5 text-amber-700 mr-2" />
                    <span className="font-bold">City: {room.city}</span>
                  </div>
                  <button className="px-5 py-3 mt-4 bg-amber-700 hover:bg-amber-600 text-white rounded-md transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomListings;