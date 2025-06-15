import { TypeAnimation } from 'react-type-animation';

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

export default function Timeline() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-8 flex flex-col gap-8">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="bg-black/30 backdrop-blur-md rounded-xl p-6 shadow-lg text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_80%)]"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">
              <TypeAnimation
                sequence={[event.icon]}
                wrapper="span"
                cursor={false}
                speed={50}
                style={{ display: 'inline-block' }}
              />
            </span>
            <span className="text-lg font-semibold text-amber-300">
              <TypeAnimation
                sequence={[event.year]}
                wrapper="span"
                cursor={true}
                speed={50}
                style={{ display: 'inline-block' }}
              />
            </span>
          </div>
          <h3 className="text-xl font-bold mb-1">
            <TypeAnimation
              sequence={[event.title]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </h3>
          <p className="text-base">
            <TypeAnimation
              sequence={[event.description]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ display: 'inline-block' }}
            />
          </p>
        </div>
      ))}
    </div>
  );
}