import { Link } from "react-router";
import { useEffect, memo, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import { perfUtils } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

export function meta() {
  return [
    { title: "Timeline - Jose Rizal" },
    { name: "description", content: "A timeline of the important events in the life of Dr. Jose Rizal." },
  ];
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Timeline = memo(() => {
  useEffect(() => {
    perfUtils.scrollToTop();
  }, []);

  const events = useMemo(() => [
    {
      year: "June 19, 1861",
      title: "Birth",
      description: "Jose Protacio Rizal Mercado y Alonso Realonda was born in Calamba, Laguna, Philippines."
    },
    {
      year: "1870",
      title: "Early Education",
      description: "Began his early education in Calamba and Biñan under the guidance of Justiniano Aquino Cruz."
    },
    {
      year: "1872",
      title: "Ateneo Municipal de Manila",
      description: "Enrolled at the Ateneo Municipal de Manila where he earned a Bachelor of Arts degree."
    },
    {
      year: "1877-1882",
      title: "University of Santo Tomas",
      description: "Studied Philosophy and Letters and later Medicine at the University of Santo Tomas."
    },
    {
      year: "1882-1885",
      title: "Studies in Spain",
      description: "Traveled to Spain and enrolled at the Universidad Central de Madrid, earning a degree in Medicine."
    },
    {
      year: "1887",
      title: "Noli Me Tangere Published",
      description: "Published his first novel 'Noli Me Tangere' in Berlin, Germany."
    },
    {
      year: "1891",
      title: "El Filibusterismo Published",
      description: "Published his second novel 'El Filibusterismo' in Ghent, Belgium."
    },
    {
      year: "1892",
      title: "Exile to Dapitan",
      description: "Founded La Liga Filipina and was subsequently exiled to Dapitan, Mindanao by Spanish authorities."
    },
    {
      year: "1896",
      title: "Arrest and Execution",
      description: "Arrested, tried, and executed by firing squad on December 30 in Bagumbayan (now Rizal Park), Manila."
    },
    {
      year: "1911",
      title: "National Hero",
      description: "Officially declared the national hero of the Philippines by the American colonial government."
    }
  ], []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />

      <div
        className="bg-cover bg-center min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 py-12"
        style={{ backgroundImage: `url('/images/Timeline.png')` }}
      >
        <main className="backdrop-blur-md bg-white/60 max-w-4xl w-full rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#4a2c11' }}>Timeline - Jose Rizal</h1>
            <p className="text-xl" style={{ color: '#4a2c11' }}>A chronological timeline of important events in the life of Dr. Jose Rizal</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4" style={{ borderColor: '#e8d8b5' }}></div>
            <ul className="space-y-14 relative z-10">
              {events.map((event, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.li
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={isLeft ? fadeInLeft : fadeInRight}
                  >
                    <div className="md:w-1/2 md:px-6">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-sm font-medium" style={{ color: '#4a2c11' }}>{event.year}</p>
                        <h3 className="text-lg font-bold" style={{ color: '#4a2c11' }}>{event.title}</h3>
                        <p className="text-base" style={{ color: '#4a2c11' }}>{event.description}</p>
                      </div>
                    </div>                    <div className="w-8 h-8 rounded-full bg-[#e8d8b5] flex items-center justify-center ring-8 ring-white z-20 md:mx-6 my-4">
                      <span className="text-xs font-bold text-[#4a2c11]">•</span>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#4a2c11] mb-6 text-left">Extended Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/about/legacy" className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]">
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Legacy</h3>
                <p className="text-[#4a2c11] pb-2">Discover how Rizal's political thoughts shaped Philippine history and continue to influence the nation.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link to="/about/biography" className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]">
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Biography</h3>
                <p className="text-[#4a2c11] pb-2">Trace Rizal's journey from childhood to his final days and the legacy he left behind.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link to="/about/quotes" className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]">
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">Quotes</h3>
                <p className="text-[#4a2c11] pb-2">Read powerful quotes that reflect Rizal's political philosophy and vision.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
              <Link to="/novels/el-filibusterismo" className="relative p-6 bg-white/90 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#4a2c1110] hover:border-[#4a2c11]">
                <h3 className="text-xl font-semibold text-[#4a2c11] mb-2">El Filibusterismo</h3>
                <p className="text-[#4a2c11] pb-2">Explore Rizal's second novel that delves into political themes and social issues.</p>
                <ArrowRightIcon className="absolute bottom-4 right-4 w-5 h-5 text-[#4a2c11]" />
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
