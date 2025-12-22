import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        setShowPrompt(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      setShowPrompt(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop />

      {/* Music Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
          >
            <motion.button
              onClick={handleStartMusic}
              className="flex items-center gap-3 px-6 py-3 glass gradient-border rounded-full text-foreground hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-cairo">🎵 اضغط لتشغيل الموسيقى</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Control */}
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass gradient-border flex items-center justify-center text-primary hover:text-foreground transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
        
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/30"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20"
              animate={{ scale: [1, 2], opacity: [0.3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
