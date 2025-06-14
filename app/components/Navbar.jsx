import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <header className="bg-[#e8d8b5] shadow-lg sticky top-0 z-50 border-b-2 border-[#6b4423]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/profile.jpg" 
            alt="Jose Rizal" 
            className="w-12 h-12 rounded-full border-2 border-[#5a3a1a] shadow-inner object-cover" 
          />
          <span className="text-xl font-semibold text-[#4a2c11] font-serif italic tracking-wider">
            José Rizal
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-20">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NovelsDropdown />
          <AboutDropdown />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to}
      className="text-[#4a2c11] hover:text-[#6b4423] font-medium px-3 py-2 font-serif italic hover:underline decoration-[#6b4423] decoration-2 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function NovelsDropdown() {
  return (
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
  );
}

function AboutDropdown() {
  return (
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
  );
}
