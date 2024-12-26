import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "4.webp",
    title: "Experience MhantichStay Like Never Before",
    description: "Discover our handpicked collection of MhantichStay accommodations",
  },
  {
    image: "1.webp",
    title: "Your Perfect Getaway Awaits",
    description: "Indulge in world-class amenities and breathtaking views",
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1500); // Increased to match total animation duration
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); // Increased to give more time to view each slide
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            currentSlide === index 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Scale Animation */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[8000ms] ease-out ${
              currentSlide === index ? 'scale-125' : 'scale-100'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transformOrigin: 'center center',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 
                className={`mb-6 text-5xl font-bold text-white transform transition-all duration-1000 ease-out
                  ${currentSlide === index 
                    ? 'translate-y-0 opacity-100 delay-500' 
                    : 'translate-y-8 opacity-0'
                  }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`mb-8 text-xl text-gray-200 transform transition-all duration-1000 ease-out
                  ${currentSlide === index 
                    ? 'translate-y-0 opacity-100 delay-700' 
                    : 'translate-y-8 opacity-0'
                  }`}
              >
                {slide.description}
              </p>
              <button 
                className={`px-8 py-3 bg-amber-700/50 text-white rounded-md font-semibold hover:bg-gray-100 
                  transform transition-all duration-1000 ease-out
                  ${currentSlide === index 
                    ? 'translate-y-0 opacity-100 delay-900' 
                    : 'translate-y-8 opacity-0'
                  }`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-amber-500/30 
          backdrop-blur-sm hover:bg-amber-500/50 transition-all duration-300 text-white"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-amber-500/30
          backdrop-blur-sm hover:bg-amber-500/75 transition-all duration-300 text-white"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-amber-400 w-8' 
                : 'bg-amber-500/50 hover:bg-white/75'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;