import type { MetaArgs } from "../+types/about";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function meta({}: MetaArgs) {
  return [
    { title: "Timeline - Jose Rizal" },
    { name: "description", content: "A chronological timeline of important events in the life of Dr. Jose Rizal" },
  ];
}

export default function Timeline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const events = [
    {
      year: "June 19, 1861",
      title: "Birth",
      description: "Jose Protacio Rizal Mercado y Alonso Realonda was born in Calamba, Laguna, Philippines.",
      icon: "👶"
    },
    {
      year: "1870",
      title: "Early Education",
      description: "Began his early education in Calamba and Biñan under the guidance of Justiniano Aquino Cruz.",
      icon: "📚"
    },
    {
      year: "1872",
      title: "Ateneo Municipal de Manila",
      description: "Enrolled at the Ateneo Municipal de Manila where he earned a Bachelor of Arts degree.",
      icon: "🎓"
    },
    {
      year: "1877-1882",
      title: "University of Santo Tomas",
      description: "Studied Philosophy and Letters and later Medicine at the University of Santo Tomas.",
      icon: "🏛️"
    },
    {
      year: "1882-1885",
      title: "Studies in Spain",
      description: "Traveled to Spain and enrolled at the Universidad Central de Madrid, earning a degree in Medicine.",
      icon: "✈️"
    },
    {
      year: "1887",
      title: "Noli Me Tangere Published",
      description: "Published his first novel 'Noli Me Tangere' in Berlin, Germany.",
      icon: "📖"
    },
    {
      year: "1891",
      title: "El Filibusterismo Published",
      description: "Published his second novel 'El Filibusterismo' in Ghent, Belgium.",
      icon: "📚"
    },
    {
      year: "1892",
      title: "Exile to Dapitan",
      description: "Founded La Liga Filipina and was subsequently exiled to Dapitan, Mindanao by Spanish authorities.",
      icon: "🏝️"
    },
    {
      year: "1896",
      title: "Arrest and Execution",
      description: "Arrested, tried, and executed by firing squad on December 30 in Bagumbayan (now Rizal Park), Manila.",
      icon: "⚰️"
    },
    {
      year: "1911",
      title: "National Hero",
      description: "Officially declared the national hero of the Philippines by the American colonial government.",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  JR
                </div>
                <span className="text-xl font-semibold">Jose Rizal</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium px-3 py-2">
                Home
              </Link>
              <Link to="/works" className="text-gray-700 hover:text-purple-600 font-medium px-3 py-2">
                Works
              </Link>

              {/* Novels Dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-700 hover:text-purple-600 font-medium px-3 py-2 flex items-center">
                  Novels
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/novels/noli-me-tangere"
                            className={classNames(
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                <Menu.Button className="text-purple-600 font-medium px-3 py-2 flex items-center">
                  About
                  <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/about/biography"
                            className={classNames(
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
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
                              active ? 'bg-gray-100 text-purple-600' : 'text-gray-700',
                              'block px-4 py-2 text-sm font-medium'
                            )}
                          >
                            Interview and Opinions
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Timeline of Jose Rizal's Life</h1>
            <p className="text-xl text-purple-100">Key events in the life of the Philippine National Hero</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flow-root">
          <ul className="-mb-8">
            {events.map((event, eventIdx) => (
              <li key={eventIdx}>
                <div className="relative pb-8">
                  {eventIdx !== events.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                        <span className="text-white text-sm font-medium">{event.icon}</span>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {event.year}
                        </p>
                        <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                        <p className="text-base text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to About Link */}
        <div className="mt-12 text-center">
          <Link 
            to="/about" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            ← Back to About
          </Link>
        </div>
      </main>
    </div>
  );
}
