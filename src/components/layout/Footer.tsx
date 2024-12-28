import { Hotel, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Hotel className="h-6 w-6" />
              <span className="text-xl font-bold text-white">MhantichStay</span>
            </div>
            <p className="mt-4">Experience luxury and comfort in our carefully curated accommodations.</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><p className="hover:text-white">Our Rooms</p></li>
              <li><p  className="hover:text-white">Book Now</p></li>
              <li><p  className="hover:text-white">About Us</p></li>
              <li><p  className="hover:text-white">Contact</p></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                  Agadir City
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +212653446430
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Mohame.mhantich6@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md px-4 py-2 text-gray-900 focus:outline-none"
              />
              <button className="rounded-r-md bg-primary px-4 py-2 text-white hover:bg-primary/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} <a className='text-white' href="https://mhantich.vercel.app/">Mhantich</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}