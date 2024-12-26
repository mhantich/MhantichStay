import { BookingForm } from "@/components/BookingForm";
import HeroSlider from "@/components/HeroSlider";
import ParallaxSection from "@/components/ParallaxSection";
import RoomListings from "@/components/RoomListings";
import WelcomeSection from "@/components/WelcomeSection";


export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <BookingForm/>
      <WelcomeSection />
      <ParallaxSection />
      <RoomListings />
    </div>
  );
}
