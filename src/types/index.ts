export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  available: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'guest' | 'admin';
  bookings?: Booking[];
}