import { Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const user = true;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 group hover:bg-white py-5
        ${isScrolled ? 'bg-black' : 'bg-white/25'}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Hotel className={`h-6 w-6 transition-colors duration-300 
            ${isScrolled ? 'text-white' : 'text-white'} 
            group-hover:text-black`} 
          />
          <span className={`text-xl font-bold transition-colors duration-300 
            ${isScrolled ? 'text-white' : 'text-white'} 
            group-hover:text-black`}
          >
            MhantichStay
          </span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden space-x-4 md:flex">
            {['Home', 'Rooms', 'Book Now'].map((item) => (
              <NavigationMenuItem key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                  className={`text-sm font-medium transition-colors duration-300 relative
                    ${isScrolled ? 'text-white' : 'text-white'} 
                    group-hover:text-black`}
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <Button
              variant="ghost"
              asChild
              className={`transition-colors duration-300 
                ${isScrolled ? 'text-white' : 'text-white'} 
                hover:bg-transparent group-hover:text-black`}
            >
              <Link to="/profile">My Profile</Link>
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                className={`transition-colors duration-300 
                  ${isScrolled ? 'text-white' : 'text-white'} 
                  hover:bg-transparent group-hover:text-black`}
              >
                Sign In
              </Button>
              <Button
                className={`bg-white text-black hover:bg-black hover:text-white 
                  transition-colors duration-300 group-hover:bg-black group-hover:text-white`}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;