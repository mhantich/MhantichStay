import { BookingForm } from "@/components/BookingForm";
import Facilities from "@/components/Facilities";
import HeroSlider from "@/components/HeroSlider";
import ParallaxRewview from "@/components/ParallaxRewview";
import ParallaxSection from "@/components/ParallaxSection";
import RoomListings from "@/components/RoomListings";
import SpecialOffers from "@/components/SpecialOffers";
import StaywithUs from "@/components/StaywithUs";
import WelcomeSection from "@/components/WelcomeSection";


export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <BookingForm/>
      <WelcomeSection />
      <ParallaxSection />
      <RoomListings />
      <ParallaxRewview/>
      <SpecialOffers/>
      <StaywithUs/>
      <Facilities/>
    </div>
  );
}
