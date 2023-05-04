// import Navbar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
    return (
       <>
      
      <nav className="bg-gray-800 shadow-lg">
  <div className="max-w-8xl mx-auto px-80 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <a href="/">
          <img className="h-20 w-auto sm:h-10" src="/images/1.jpg" alt="Logo" />
        </a>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Home</a>
            <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">About</a>
            <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    </>
           
            
    )
}