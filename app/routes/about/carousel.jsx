import { useEffect, useState } from 'react';

const images = [
  {
    src: "/images/carousel1.jpg",
    alt: "Jose Rizal's Childhood",
    caption: "Jose Rizal was born in Calamba, Laguna in 1861.",
  },
  {
    src: "/images/carousel2.jpg",
    alt: "Rizal Studying Abroad",
    caption: "He studied medicine in Europe and became a national hero.",
  },
  {
    src: "/images/carousel3.jpg",
    alt: "Rizal's Martyrdom",
    caption: "Rizal was executed in 1896, becoming a martyr for the Filipino cause.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Caption Overlay */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg shadow-lg text-center max-w-xl">
        <h2 className="text-xl font-semibold">{images[current].alt}</h2>
        <p className="text-sm mt-1 italic">{images[current].caption}</p>
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#6b4423] hover:bg-[#4a2c11] text-white px-4 py-2 rounded shadow-md font-semibold transition duration-300"
      >
        Next →
      </button>
    </div>
  );
}
