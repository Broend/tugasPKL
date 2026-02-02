const Navbar = ({ setPage, currentPage }) => {
  return (
    <>
      <nav className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6" />
            <h1 className="font-bold text-xl">MediSmart AI</h1>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setPage("home")}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === "home"
                  ? "bg-white text-emerald-700 font-semibold"
                  : "hover:bg-emerald-500"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setPage("about")}
              className={`px-4 py-2 rounded-lg transition-all ${
                currentPage === "about"
                  ? "bg-white text-emerald-700 font-semibold"
                  : "hover:bg-emerald-500"
              }`}
            >
              About
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
