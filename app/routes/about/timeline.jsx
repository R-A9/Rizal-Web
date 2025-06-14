import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function meta() {
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
