import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
export default function CarGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted">
        <AnimatePresence mode="wait">
          <motion.img
    key={currentIndex}
    src={images[currentIndex]}
    alt={`Car view ${currentIndex + 1}`}
    className="w-full h-full object-cover"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
    onClick={goToPrevious}
    size="icon"
    variant="secondary"
    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
  >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
    onClick={goToNext}
    size="icon"
    variant="secondary"
    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
  >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-primary/80 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => <button
    key={index}
    onClick={() => setCurrentIndex(index)}
    className={`relative aspect-video rounded-lg overflow-hidden transition-all ${index === currentIndex ? "ring-2 ring-[#F97316] ring-offset-2" : "opacity-60 hover:opacity-100"}`}
  >
            <img
    src={image}
    alt={`Thumbnail ${index + 1}`}
    className="w-full h-full object-cover"
  />
          </button>)}
      </div>
    </div>;
}
