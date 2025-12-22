import { motion } from 'framer-motion';
import { Play, Video, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const videos = [
  { src: '/videos/video-1.mp4', title: 'تمرين 1' },
  { src: '/videos/video-2.mp4', title: 'تمرين 2' },
];

const VideosSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    // Pause other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
    
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingIndex(index);
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  return (
    <section id="videos" className="py-24 px-4 relative">
      {/* Section divider */}
      <div className="section-divider w-full absolute top-0" />
      
      <div className="max-w-6xl mx-auto">
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
            <Video className="w-8 h-8 text-accent" />
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-primary text-glow">
              الفيديوهات
            </h2>
            <Sparkles className="w-8 h-8 text-accent" />
          </motion.div>
          <p className="text-muted-foreground font-cairo text-lg">شاهد التمارين والحركات 🔥</p>
          <motion.div 
            className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="video-card gradient-border aspect-[9/16] md:aspect-video">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  className="w-full h-full object-cover rounded-2xl"
                  loop
                  playsInline
                  onClick={() => handlePlay(index)}
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex(prev => prev === index ? null : prev)}
                />
                
                {/* Play button overlay */}
                {playingIndex !== index && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                    initial={{ opacity: 1 }}
                    onClick={() => handlePlay(index)}
                  >
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-dark flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px hsl(340 90% 55% / 0.4)",
                          "0 0 40px hsl(340 90% 55% / 0.6)",
                          "0 0 20px hsl(340 90% 55% / 0.4)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary ml-1" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Title overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="font-orbitron text-lg text-foreground flex items-center gap-2">
                    <span className="text-primary">#</span>
                    {video.title}
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🔥
                    </motion.span>
                  </h3>
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary/50 z-10" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/50 z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
