export default function Footer() {
    return (
      <div className="bg-black text-white">
        {/* Support Section */}
        <div className="container mx-auto py-12 px-6 lg:flex lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <h2 className="text-4xl font-bold">
              <span className="text-orange-500">St</span>ill You Need Our Support?
            </h2>
            <p className="mt-4 text-sm">
              Don’t wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 p-3 text-black rounded-md"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>
  
        {/* Footer Links */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <p className="mt-4 text-sm">
              Corporate clients and leisure travelers rely on us for dependable, safe, and professional service worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Useful Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Help?</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Recent Posts</h3>
            <div className="mt-4 space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <p className="text-sm">Is fast food good for your body?</p>
                    <p className="text-xs text-gray-400">February 28, 2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-slate-900 py-4 text-center">
          <p className="text-sm">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {['facebook', 'skype', 'insta', 'utube'].map((icon, index) => (
              <div key={index} className="w-8 h-8 bg-white flex items-center justify-center">
                <div className={`w-6 h-6 bg-[url('/images/${icon}.png')] bg-cover`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  