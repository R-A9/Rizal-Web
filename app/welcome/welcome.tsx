import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

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

      {/* RA 1425 Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/rizal-bg-full.png')"}}>
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left side - RA 1425 */}
            <div className="w-full lg:w-1/2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] p-6 bg-black/30 backdrop-blur-sm rounded-xl">
              <h2 className="text-2xl font-bold text-amber-300 mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)]">
                <TypeAnimation
                  sequence={['Republic Act No. 1425']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </h2>
              <div className="mb-4 min-h-[100px] text-base leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
                <TypeAnimation
                  sequence={[
                    'An act to include in the curricula of all public and private schools, colleges and universities courses on the life, works and writings of Jose Rizal, particularly his novels Noli Me Tangere and El Filibusterismo, authorizing the printing and distribution thereof, and for other purposes.',
                    1000
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
              </div>
              <p className="text-sm text-amber-200 [text-shadow:_0_1px_3px_rgb(0_0_0_/_90%)]">
                <TypeAnimation
                  sequence={['Approved on June 12, 1956']}
                  wrapper="span"
                  cursor={false}
                  speed={50}
                  style={{ display: 'inline-block' }}
                />
              </p>
            </div>



            {/* Right side - CHED */}
            <div className="w-full lg:w-1/2 [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)] p-6 bg-black/30 backdrop-blur-sm rounded-xl">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_90%)]">
                  <TypeAnimation
                    sequence={['Commission on Higher Education']}
                    wrapper="span"
                    cursor={false}
                    speed={50}
                    style={{ display: 'inline-block' }}
                  />
                </h3>
              </div>
              <div className="min-h-[100px] text-base leading-relaxed [text-shadow:_0_2px_4px_rgb(0_0_0_/_80%)]">
                <TypeAnimation
                  sequence={[
                    'This website is sponsored by the Commission on Higher Education (CHED) to help students understand the life, works, and writings of Dr. Jose Rizal, the national hero of the Philippines, and his significant contributions to Philippine history and national identity.',
                    1000
                  ]}
                  wrapper="p"
                  speed={50}
                  style={{ whiteSpace: 'pre-line', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer with Rizal Image */}
      <div className="relative w-full h-40 md:h-64 -mt-20 md:-mt-32 mb-10 md:mb-20">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 w-48 md:w-64 h-auto">
          <img 
            src="/images/rizal-statue.png" 
            alt="Jose Rizal" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Introduction Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/rizal-bg-2.jpg" 
            alt="Jose Rizal Background"
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
