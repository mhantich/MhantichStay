import { useStore } from '@/store/useStore';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function RoomsPage() {
  const rooms = useStore((state) => state.rooms);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Rooms</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="rounded-t-lg object-cover"
                />
              </AspectRatio>
              <CardTitle>{room.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{room.description}</p>
              <ul className="mt-4 space-y-2">
                {room.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-lg font-bold">${room.price}/night</span>
              <Button>Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}