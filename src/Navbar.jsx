function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl hover:text-orange-400 font-bold hover:underline">
        Explore
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#home" className="hover:text-orange-400 hover:underline p-1">
            Home
          </a>
        </li>

        <li>
          <a
            href="#products"
            className="hover:text-orange-400 hover:underline p-1"
          >
            Products
          </a>
        </li>

        <li>
          <a
            href="#offers"
            className="hover:text-orange-400 hover:underline p-1"
          >
            Offers
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-orange-400 hover:underline p-1"
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="#search"
            className="hover:text-orange-400 hover:underline p-1"
          >
            Search
          </a>
        </li>
      </ul>

      {/* Cart */}
      <div className="cursor-pointer hover:text-orange-400 hover:underline p-1">🛒 Cart</div>
    </nav>
  );
}
export default Navbar;
