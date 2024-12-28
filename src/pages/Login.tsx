import { EyeIcon } from 'lucide-react'
import Paralllax from '@/components/Paralllax';

function Login() {
  return (
    <>
    <Paralllax title="Login"  />
<div className="max-w-3xl mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-2xl font-normal mb-8">Login</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2">
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-sm"
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full border border-gray-300 p-3 rounded-sm pr-10"
              />
              <EyeIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded border-gray-300" />
              <span className="text-gray-600">Remember me</span>
            </label>
          </div>
          
          <button className="bg-[#b08968] text-white px-8 py-2">
            Log In
          </button>
          
          <div>
            <a href="#" className="text-gray-600 hover:underline">
              Lost your password?
            </a>
          </div>
        </div>
      </div>

      <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t">
        <div>
          <h2 className="text-lg mb-4">Follow Us</h2>
          <p className="text-gray-600">And keep up to date with Soho Hotel</p>
        </div>
        
        <div>
          <h2 className="text-lg mb-4">Contact</h2>
          <p className="text-gray-600">55 Columbus Circle, New York, NY</p>
        </div>
        
        <div>
          <h2 className="text-lg mb-4">Newsletter</h2>
          <p className="text-gray-600">Sign up to our newsletter for exclusive offers.</p>
        </div>
      </footer>
    </div>
    </>

  )
}

export default Login