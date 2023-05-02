import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-6 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-2">Contact Us</h3>
            <p className="text-gray-400 mb-2">1234 Main St.</p>
            <p className="text-gray-400 mb-2">Suite 500</p>
            <p className="text-gray-400 mb-2">New York, NY 12345</p>
            <p className="text-gray-400 mb-2">Email: info@example.com</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg font-medium mb-2">Links</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg font-medium mb-2">Social Media</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-gray-400 text-center">
          <p>© 2023 My App. All rights reserved.</p>
          <p>Made with ❤️ by John Doe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
