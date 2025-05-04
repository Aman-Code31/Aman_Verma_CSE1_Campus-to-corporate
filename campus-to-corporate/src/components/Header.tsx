import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DarkModeToggle from '@/components/DarkModeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full gap-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-company-blue dark:text-white whitespace-nowrap mr-4">
            Campus<span className="text-company-darkblue">to</span>Corporate
          </Link>

          {/* Search Bar */}
          <form className="flex-1 max-w-xl mx-4 hidden md:flex">
            <input
              type="text"
              placeholder="Search for companies..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-company-blue"
            />
            <Button type="submit" className="rounded-l-none rounded-r-md bg-company-blue text-white px-6">
              Search
            </Button>
          </form>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-company-blue dark:hover:text-white">
              Home
            </Link>
            <Link to="/companies" className="text-gray-600 dark:text-gray-300 hover:text-company-blue dark:hover:text-white">
              Companies
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-company-blue dark:hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-company-blue dark:hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Right Side: Auth Buttons & Dark Mode */}
          <div className="flex items-center space-x-2 ml-4">
            <Link to="/signin">
              <Button variant="outline" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>
            <Button className="bg-company-blue hover:bg-company-darkblue">
              Get Started
            </Button>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;