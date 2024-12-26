import { create } from 'zustand';
import { User, Room, Booking } from '@/types';

interface StoreState {
  user: User | null;
  rooms: Room[];
  bookings: Booking[];
  setUser: (user: User | null) => void;
  setRooms: (rooms: Room[]) => void;
  setBookings: (bookings: Booking[]) => void;
  addBooking: (booking: Booking) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: null,
  rooms: [],
  bookings: [],
  setUser: (user) => set({ user }),
  setRooms: (rooms) => set({ rooms }),
  setBookings: (bookings) => set({ bookings }),
  addBooking: (booking) => set((state) => ({ 
    bookings: [...state.bookings, booking] 
  })),
}));