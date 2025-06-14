import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState, memo, useCallback } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '../utils';

// Global styles for WebKit scrollbars - memoized to prevent recreation
const scrollbarStyles = `
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: #e8d8b5;
    border-radius: 4px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #d4b98a;
    border-radius: 4px;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background-color: #c5a97b;
  }
`;

// Add styles to the document head only once
if (typeof document !== 'undefined' && !document.querySelector('#navbar-scrollbar-styles')) {
  const styleElement = document.createElement('style');
  styleElement.id = 'navbar-scrollbar-styles';
  styleElement.textContent = scrollbarStyles;
  document.head.appendChild(styleElement);
}

// Mobile dropdown components - memoized for better performance
const MobileNovelsDropdown = memo(({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleNavigate = useCallback(() => {
    setOpen(false);
    onNavigate();
  }, [onNavigate]);

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-[#4a2c11] hover:bg-[#d4b98a] font-serif italic"
        onClick={handleClick}
      >
        Novels
        <ChevronDownIcon
          className={`h-5 w-5 flex-none text-[#6b4423] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="mt-2 space-y-2 pl-6">
          <Link
            to="/novels/noli-me-tangere"
            onClick={handleNavigate}
            className="block rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-[#4a2c11] hover:bg-[#d4b98a] font-serif italic"
          >
            Noli Me Tangere
          </Link>
          <Link
            to="/novels/el-filibusterismo"
            onClick={handleNavigate}
            className="block rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-[#4a2c11] hover:bg-[#d4b98a] font-serif italic"
          >
            El Filibusterismo
          </Link>
        </div>
      )}
    </div>
  );
});

MobileNovelsDropdown.displayName = 'MobileNovelsDropdown';

function MobileAboutDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { to: '/about/biography', label: 'Biography' },
    { to: '/about/timeline', label: 'Timeline' },
    { to: '/about/political-thought', label: 'Political Thought' },
    { to: '/about/legacy', label: 'Legacy' },
    { to: '/about/quotes', label: 'Quotes' },
    { to: '/about/interview', label: 'Interview & Opinions' },
  ];

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-[#4a2c11] hover:bg-[#d4b98a] font-serif italic"
        onClick={() => setOpen(!open)}
      >
        About
        <ChevronDownIcon
          className={`h-5 w-5 flex-none text-[#6b4423] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="mt-2 space-y-2 pl-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => {
                setOpen(false);
                onNavigate();
              }}
              className="block rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-[#4a2c11] hover:bg-[#d4b98a] font-serif italic"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#e8d8b5] shadow-lg sticky top-0 z-50 border-b border-[#6b4423]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/images/profile.jpg" 
              alt="Jose Rizal" 
              className="w-12 h-12 rounded-full border-2 border-[#5a3a1a] shadow-inner object-cover" 
            />
            <span className="text-lg font-semibold text-[#4a2c11] font-serif italic tracking-wider">
              José Rizal
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/works">Works</NavLink>
            <NovelsDropdown />
            <AboutDropdown />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4a2c11] hover:text-[#6b4423] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          className="md:hidden mt-4"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#e8d8b5] rounded-lg shadow-lg">
            <NavLinkMobile to="/" onClick={() => setIsOpen(false)}>Home</NavLinkMobile>
            <NavLinkMobile to="/works" onClick={() => setIsOpen(false)}>Works</NavLinkMobile>
            <MobileNovelsDropdown onNavigate={() => setIsOpen(false)} />
            <MobileAboutDropdown onNavigate={() => setIsOpen(false)} />
          </div>
        </Transition>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link 
      to={to}
      className="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#4a2c11] hover:text-[#6b4423] font-serif italic px-2.5 py-1.5 -my-1.5 hover:underline decoration-[#6b4423] decoration-1.5 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function NavLinkMobile({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-base font-medium text-[#4a2c11] hover:bg-[#d4b98a] hover:text-[#4a2c11] rounded-md font-serif italic"
    >
      {children}
    </Link>
  );
}

function NovelsDropdown() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#4a2c11] hover:text-[#6b4423] font-serif italic px-2.5 py-1.5 -my-1.5">
        Novels
        <ChevronDownIcon className="h-5 w-5 flex-none text-[#6b4423]" aria-hidden="true" />
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
        <Menu.Items 
          className="absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a] max-h-[70vh] overflow-y-auto scrollbar-thin"
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: '#d4b98a #e8d8b5',
            msOverflowStyle: 'thin'
          }}
        >
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
      <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#4a2c11] hover:text-[#6b4423] font-serif italic px-2.5 py-1.5 -my-1.5">
        About
        <ChevronDownIcon className="h-5 w-5 flex-none text-[#6b4423]" aria-hidden="true" />
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
        <Menu.Items 
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#e8d8b5] shadow-lg ring-1 ring-[#6b4423] ring-opacity-50 focus:outline-none border border-[#d4b98a] max-h-[70vh] overflow-y-auto scrollbar-thin" 
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: '#d4b98a #e8d8b5',
            msOverflowStyle: 'thin',
            maxHeight: 'calc(100vh - 100px)'
          }}
        >
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
