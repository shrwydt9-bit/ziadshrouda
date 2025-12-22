import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
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
    <section id="gallery" className="py-24 px-4 relative">
      {/* Section divider */}
      <div className="section-divider w-full absolute top-0" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <Camera className="w-8 h-8 text-accent" />
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-primary text-glow">
              معرض الصور
            </h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </motion.div>
          <p className="text-muted-foreground font-cairo text-lg">اللحظات المميزة</p>
          <motion.div 
            className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Photo Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
              }}
              className={`relative group cursor-pointer ${
                index === 0 || index === 5 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className={`overflow-hidden rounded-2xl gradient-border image-shine ${
                index === 0 || index === 5 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "0 0 40px 10px hsl(340 90% 55% / 0.4)" }}
                />

                {/* Number indicator */}
                <motion.div
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full glass-dark flex items-center justify-center font-orbitron text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {index + 1}
                </motion.div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-xl p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 glass-dark rounded-full text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 glass-dark rounded-full text-foreground hover:text-primary transition-colors z-10"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 glass-dark rounded-full text-foreground hover:text-primary transition-colors z-10"
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
              className="max-w-full max-h-[85vh] object-contain rounded-2xl box-glow-intense"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Photo counter */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 glass-dark gradient-border rounded-full text-foreground font-orbitron"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">{selectedIndex + 1}</span>
              <span className="mx-2 text-muted-foreground">/</span>
              <span>{photos.length}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
