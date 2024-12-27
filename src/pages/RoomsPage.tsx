
import Paralllax from '@/components/Paralllax';
import RoomListings from '@/components/RoomListings';

export function RoomsPage() {

  return (
    <div className=" ">
      <Paralllax title="Our Rooms" />
      <div className="max-w-7xl mx-auto px-4 py-12">
       <RoomListings title="All Rooms" isActive={false} />
       <RoomListings title="Rooms for you" isActive={false} />
      </div>
    </div>
  );
}