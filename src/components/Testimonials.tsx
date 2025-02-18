import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { id: 1, image: "https://ik.imagekit.io/nag93ze07/Testimonials/1_20250218_182013_0000.jpg?updatedAt=1739883267821" },
  { id: 2, image: "https://ik.imagekit.io/nag93ze07/Testimonials/2_20250218_182013_0001.jpg?updatedAt=1739883268099" },
  { id: 3, image: "https://ik.imagekit.io/nag93ze07/Testimonials/3_20250218_182013_0002.jpg?updatedAt=1739883267914" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full py-10  pt-1 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Testimonials</h1>
      {/* Laptop View */}
      <div className="hidden md:flex gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg w-96 h-[500px] bg-white"
          >
            <img src={item.image} alt={`Testimonial ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="relative w-90 h-96 md:hidden overflow-hidden flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-[-1px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-70 hover:opacity-100"
        >
          <ChevronLeft size={30} />
        </button>
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg w-full h-full bg-white"
        >
          <img
            src={testimonials[currentIndex].image}
            alt={`Testimonial ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <button
          onClick={nextSlide}
          className="absolute right-[-1px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-70 hover:opacity-70"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}
