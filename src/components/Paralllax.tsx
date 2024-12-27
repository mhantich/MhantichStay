import { useEffect, useState } from 'react';

function Parallax({ title }: { title: string }) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative w-full mb-10 h-[70vh] overflow-hidden">
        {/* Background with parallax effect and dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/4.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${offset * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-200 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>{title}</span>
            </div>
            <h1 className="text-6xl font-bold text-amber-500">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax;