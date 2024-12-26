import { useStore } from '@/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProfilePage() {
  const { user, bookings } = useStore((state) => ({
    user: state.user,
    bookings: state.bookings,
  }));

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">My Profile</h1>
      
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile Details</TabsTrigger>
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member Since:</strong> {new Date().toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardHeader>
                  <CardTitle>Booking #{booking.id}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Check-in:</strong> {booking.checkIn.toLocaleDateString()}</p>
                    <p><strong>Check-out:</strong> {booking.checkOut.toLocaleDateString()}</p>
                    <p><strong>Guests:</strong> {booking.guests}</p>
                    <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
                    <p><strong>Status:</strong> {booking.status}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}