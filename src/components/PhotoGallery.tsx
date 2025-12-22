import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import ziad1 from '@/assets/ziad-1.jpg';
import ziad2 from '@/assets/ziad-2.jpg';
import ziad3 from '@/assets/ziad-3.jpg';

const photos = [
  { src: ziad1, alt: 'Ziad Official 1' },
  { src: ziad2, alt: 'Ziad Official 2' },
  { src: ziad3, alt: 'Ziad Official 3' },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-primary text-glow mb-4">
            📸 معرض الصور
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl gradient-border image-shine card-hover">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-8 h-8" />
          </motion.button>
          
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedPhoto}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl box-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default PhotoGallery;
