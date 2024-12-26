import React, { useState, useRef, useEffect } from "react";

const ParallaxSection = () => {
  const firstParallaxRef = useRef(null);
  const secondParallaxRef = useRef(null);
  const [firstParallaxOffset, setFirstParallaxOffset] = useState(0);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const lerp = (start: number, end: number, factor: number): number => start + (end - start) * factor;

  const calculateParallax = (element: HTMLElement | null, offset: number): number => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const distanceFromCenter = elementCenter - windowHeight / 2;
    return distanceFromCenter * -0.5 + offset;
  };

  useEffect(() => {
    let rafId: number;
    const smoothFactor = 0.5;

    const animate = () => {
      if (firstParallaxRef.current) {
        const targetFirst = calculateParallax(firstParallaxRef.current, 0);
        setFirstParallaxOffset((prev) => lerp(prev, targetFirst, smoothFactor));
      }



      rafId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mx-auto px-4 py-20 overflow-hidden">
      <div className="container mx-auto">
        {/* First Parallax Section */}
        <div className="flex flex-col lg:flex-row gap-8 font-serif">
          <div
            className="lg:w-1/2 hidden lg:inline relative h-[600px]"
            ref={firstParallaxRef}
          >
            <div className="absolute inset-0  overflow-hidden">
              <div
                className="absolute inset-0 w-full h-[600px] transform-gpu will-change-transform"
                style={{
                  transform: `translate3d(0, ${firstParallaxOffset}px, 0)`,
                  backgroundImage: "url(https://quitenicestuff.com/demos/sohohotel/site2/wp-content/uploads/2024/06/34.jpg",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-2 flex flex-col justify-center py-4 md:py-14">
            <div className="space-y-3 px-6 font-serif">
          
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-light">
                About us
              </h1>
              <p className="text-gray-600 leading-relaxed text-xl">
              Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim massa felis ad nulla donec porttitor nulla et tristique dignissim.
              </p>
           
              <button className="px-10 py-5 bg-amber-700 hover:bg-amber-700/75 text-white  underline">
                Discover More
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ParallaxSection;
