import { BookingForm } from "@/components/BookingForm";
import HeroSlider from "@/components/HeroSlider";


export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <BookingForm/>
    </div>
  );
}
