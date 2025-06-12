import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
              JR
            </div>
            <span className="text-xl font-semibold">Jose Rizal</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-amber-600 font-medium">Home</Link>
            <Link to="/works" className="text-gray-500 hover:text-amber-600 font-medium">Works</Link>
            <Link to="/novels" className="text-gray-500 hover:text-amber-600 font-medium">Novels</Link>
            <Link to="/about" className="text-gray-500 hover:text-amber-600 font-medium">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/rizal-bg.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Empty div to maintain layout */}
            <div className="hidden md:block"></div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-['Rosarivo'] italic">DR. JOSE RIZAL</h1>
              <p className="text-xl text-amber-600">José Protacio Rizal Mercado y Alonzo Realonda</p>
              <p className="text-lg text-gray-700 max-w-lg">
                A Filipino nationalist, writer and polymath active at the end of the Spanish colonial period of the Philippines. He is considered one of the greatest heroes of the Philippines and is widely considered the greatest genius of the Malay race.
              </p>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-8 py-3 border-2 border-blue-800 text-base font-medium rounded-md text-white bg-blue-800 hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Introduction Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/introduction.png" 
            alt="Introduction to Jose Rizal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center py-16 md:py-24">
          <div className="text-center text-white max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold font-['Rosarivo'] italic mb-6">Introduction</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
            {/* Add your introduction content here */}
          </div>
        </div>
      </section>
    </div>
  );
}
