import { useState } from "react";
import { X } from "lucide-react";

interface ScreenshotsGalleryProps {
  images: string[];
  title: string;
}

function ScreenshotsGallery({ images, title }: ScreenshotsGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (images.length === 0) return null;

  const isGalleryMode = images.length > 1;
  const mainImage = images[selectedImageIndex];

  const getTitleText = (projectTitle: string): string => {
    if (projectTitle.includes("BlueRoute")) {
      return "Platform Overview";
    }
    if (projectTitle.includes("Opusnexa")) {
      return "Concept System Preview";
    }
    return "Platform Preview";
  };

  const getCaptionText = (projectTitle: string): string => {
    if (projectTitle.includes("BlueRoute")) {
      return "Screens showcasing service structure, logistics workflow presentation, and platform layout.";
    }
    if (projectTitle.includes("Opusnexa")) {
      return "UI and system structure previews showing contractor discovery, category browsing, and platform workflow design currently under development.";
    }
    if (projectTitle.includes("Nexuskey")) {
      return "Interface showing email extraction workflows, keyword generation, and structured data processing.";
    }
    return "Platform Preview";
  };

  const handleMainImageClick = () => {
    setLightboxImage(mainImage);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="w-full space-y-4">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-widest text-cyan-400 font-semibold px-1">
        {getTitleText(title)}
      </h3>

      {/* Main Image Preview Frame with Browser Window */}
      <div className="relative w-full overflow-hidden rounded-xl border border-cyan-500/20 shadow-2xl bg-slate-900 group">
        {/* Browser Window Top Bar */}
        <div className="h-10 bg-slate-800 border-b border-cyan-500/10 flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          </div>
          <div className="flex-1 flex justify-end pr-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
            </div>
          </div>
        </div>
        
         {/* Image Content */}
         <div className="w-full aspect-video bg-slate-800 overflow-hidden cursor-pointer relative" onClick={handleMainImageClick}>
           <img
             src={mainImage}
             alt={`${title} main screenshot`}
             className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25 opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
         </div>
      </div>

      {/* Thumbnail Gallery */}
      {isGalleryMode && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${ 
                selectedImageIndex === index 
                  ? "border-cyan-400 shadow-lg shadow-cyan-500/30" 
                  : "border-cyan-500/20 hover:border-cyan-500/40"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Caption */}
      <p className="text-xs text-slate-400 px-1 pt-2">
        {getCaptionText(title)}
      </p>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage}
              alt="Lightbox view"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ScreenshotsGallery;
