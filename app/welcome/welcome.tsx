import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Welcome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#e8d8b5] shadow-lg sticky top-0 z-50 border-b-2 border-[#6b4423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/profile.jpg" alt="Jose Rizal" className="w-12 h-12 rounded-full border-2 border-[#5a3a1a] shadow-inner object-cover" />
            <span className="text-xl font-semibold text-[#4a2c11] font-serif italic tracking-wider">José Rizal</span>
          </div>
          
          <nav className="hidden md:flex space-x-20">
            <Link 
              to="/" 
              className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 font-serif italic hover:underline decoration-[#6b4423] decoration-2 transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              to="/works" 
              className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 font-serif italic hover:underline decoration-[#6b4423] decoration-2 transition-all duration-200"
            >
              Works
            </Link>

            {/* Novels Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 flex items-center font-serif italic group transition-all duration-200">
                Novels
                <ChevronDownIcon className="ml-1 h-5 w-5 text-[#6b4423] group-hover:text-[#5a3a1a] transition-transform duration-200" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a]">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/novels/noli-me-tangere"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic'
                          )}
                        >
                          Noli Me Tangere
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/novels/el-filibusterismo"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic'
                          )}
                        >
                          El Filibusterismo
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* About Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 flex items-center font-serif italic group transition-all duration-200">
                About
                <ChevronDownIcon className="ml-1 h-5 w-5 text-[#6b4423] group-hover:text-[#5a3a1a] transition-transform duration-200" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-1 w-64 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a] overflow-y-auto max-h-[80vh]">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/biography"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Biography
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/timeline"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Timeline
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/political-thought"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Political Thought
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/legacy"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Legacy
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/quotes"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Quotes
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/about/interview"
                          className={classNames(
                            active ? 'bg-[#d4b98a] text-[#4a2c11]' : 'text-[#4a2c11]',
                            'block px-4 py-2 text-sm font-serif italic hover:bg-[#d4b98a] transition-colors duration-200'
                          )}
                        >
                          Interview & Opinions
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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
      <section id="bgpic" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/rizal-bg-full.png')"}}>
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

      {/* Image Collage with Background */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/rizalquestion.png" 
            alt="Jose Rizal Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Left Container - Rizal */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src="/images/rizal solo.png" 
                alt="Jose Rizal Portrait"
                className="max-w-[80%] max-h-[80vh] object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Middle Container - Book */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="relative -left-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src="/images/bok.png" 
                alt="Bok"
                className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Container - Fight */}
          <div className="w-full md:w-1/3 h-screen flex items-center justify-center p-4">
            <div className="transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md hover:z-10">
              <img 
                src="/images/fight.png" 
                alt="Fight"
                className="max-w-full max-h-[90vh] object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Genially Interactive Content */}
      <div className="w-full bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#4a2c11] font-serif">Do You Know Rizal?</h2>
          <div className="w-full">
            <div className="relative pb-[56.25%] pt-0 h-0">
              <iframe 
                title="Do you know Rizal?"
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://view.genial.ly/658196a63efd51001456a7b0"
                allowFullScreen
                scrolling="yes"
                allowScriptAccess="always"
                allowNetworking="all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
