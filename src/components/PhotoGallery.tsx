import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ziad1 from '@/assets/ziad-1.jpg';
import ziad2 from '@/assets/ziad-2.jpg';
import ziad3 from '@/assets/ziad-3.jpg';
import ziad4 from '@/assets/ziad-4.jpg';
import ziad5 from '@/assets/ziad-5.webp';
import ziad6 from '@/assets/ziad-6.jpg';
import ziad7 from '@/assets/ziad-7.jpg';
import ziad8 from '@/assets/ziad-8.jpg';

const photos = [
  { src: ziad1, alt: 'Ziad Official 1' },
  { src: ziad2, alt: 'Ziad Official 2' },
  { src: ziad3, alt: 'Ziad Official 3' },
  { src: ziad4, alt: 'Ziad Official 4' },
  { src: ziad5, alt: 'Ziad Official 5' },
  { src: ziad6, alt: 'Ziad Official 6' },
  { src: ziad7, alt: 'Ziad Official 7' },
  { src: ziad8, alt: 'Ziad Official 8' },
];

const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="font-orbitron text-3xl md:text-5xl font-bold text-primary text-glow mb-4"
            animate={{ 
              textShadow: [
                "0 0 10px hsl(185 100% 50% / 0.5)",
                "0 0 20px hsl(185 100% 50% / 0.8)",
                "0 0 10px hsl(185 100% 50% / 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📸 معرض الصور
          </motion.h2>
          <motion.div 
            className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-square overflow-hidden rounded-2xl gradient-border image-shine">
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ boxShadow: "0 0 0 0 hsl(185 100% 50% / 0)" }}
                  whileHover={{ boxShadow: "0 0 30px 5px hsl(185 100% 50% / 0.3)" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner accents */}
                <motion.div
                  className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
            
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.4, type: "spring" }}
              src={photos[selectedIndex].src}
              alt="Selected"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl box-glow"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Photo counter */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 glass rounded-full text-foreground font-orbitron"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {selectedIndex + 1} / {photos.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
