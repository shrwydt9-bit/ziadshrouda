import { motion } from 'framer-motion';
import { Instagram, Heart, Phone, MapPin, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1 
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ZIAD OFFICIAL
        </motion.h1>
        
        <motion.div 
          className="h-1 w-48 md:w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground font-cairo mb-8 max-w-2xl mx-auto"
        >
          <span className="text-primary">🏆</span> لاعب رياضي محترف | Calisthenics • Fitness • MMA
        </motion.p>
      </motion.div>

      {/* Info Cards */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <InfoCard icon={<Calendar className="w-5 h-5" />} label="العمر" value="17 سنة" delay={1.1} />
        <InfoCard icon={<MapPin className="w-5 h-5" />} label="السكن" value="الصداقة الجديدة" delay={1.2} />
        <InfoCard icon={<Heart className="w-5 h-5" />} label="الحالة" value="Single 💔" delay={1.3} />
        <InfoCard icon={<Phone className="w-5 h-5" />} label="التواصل" value="01140337447" delay={1.4} />
      </motion.div>

      {/* Instagram Button */}
      <motion.a
        href="https://instagram.com/4hz_z3"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex items-center gap-3 px-8 py-4 glass gradient-border rounded-full text-foreground hover:text-primary transition-all duration-300 group card-hover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram className="w-6 h-6 text-primary group-hover:animate-pulse" />
        <span className="font-orbitron font-bold">@4hz_z3</span>
        <span className="text-muted-foreground">• تابعني على انستغرام</span>
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

const InfoCard = ({ 
  icon, 
  label, 
  value, 
  delay 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass gradient-border rounded-xl p-4 text-center card-hover"
  >
    <div className="text-primary mb-2 flex justify-center">{icon}</div>
    <p className="text-xs text-muted-foreground font-cairo">{label}</p>
    <p className="text-sm font-bold text-foreground font-cairo">{value}</p>
  </motion.div>
);

export default HeroSection;
