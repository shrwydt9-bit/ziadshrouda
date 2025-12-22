import { motion } from 'framer-motion';
import { Instagram, Heart, Phone, MapPin, Calendar, Zap, Crown, Star } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const typingTexts = [
  'اسمي معروف في كل حتة 🔥',
  'لاعب رياضي محترف 💪',
  'Calisthenics • Fitness • MMA 🏆',
  'الأقوى في كل مكان 💯',
];

const HeroSection = () => {
  const typedText = useTypingEffect(typingTexts, 80, 40, 2500);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <Star className="w-3 h-3 text-primary/30" />
          </motion.div>
        ))}
      </div>

      {/* Floating Crown */}
      <motion.div
        className="absolute top-20 right-10 md:right-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Crown className="w-12 h-12 md:w-16 md:h-16 text-accent drop-shadow-[0_0_20px_hsl(45_100%_60%/0.6)]" />
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-6 h-6 text-accent" />
          </motion.span>
          <span className="font-orbitron text-sm md:text-base text-accent tracking-[0.3em] uppercase">
            The Legend
          </span>
          <motion.span
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-6 h-6 text-accent" />
          </motion.span>
        </motion.div>

        <motion.h1 
          className="font-bebas text-7xl md:text-9xl lg:text-[12rem] font-black tracking-wider leading-none"
          initial={{ scale: 0.5, rotateX: -90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <motion.span
            className="relative inline-block text-glow-multi"
            style={{ color: 'hsl(var(--primary))' }}
            animate={{ 
              textShadow: [
                "0 0 20px hsl(340 90% 55% / 0.8), 0 0 40px hsl(45 100% 60% / 0.4)",
                "0 0 40px hsl(340 90% 55% / 1), 0 0 80px hsl(45 100% 60% / 0.6)",
                "0 0 20px hsl(340 90% 55% / 0.8), 0 0 40px hsl(45 100% 60% / 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ZIAD
            <motion.span
              className="absolute -right-8 -top-4 text-4xl md:text-6xl"
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              😎
            </motion.span>
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-orbitron text-2xl md:text-4xl text-accent text-glow-accent tracking-[0.5em] -mt-2 md:-mt-4"
        >
          OFFICIAL
        </motion.div>
        
        {/* Animated divider */}
        <motion.div 
          className="h-1 w-64 md:w-96 mx-auto bg-gradient-to-r from-transparent via-primary to-accent rounded-full my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-16 flex items-center justify-center"
        >
          <p className="text-xl md:text-3xl font-cairo font-bold">
            <span className="text-foreground">{typedText}</span>
            <span className="typing-cursor ml-1">&nbsp;</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Info Cards */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-5xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <InfoCard icon={<Calendar className="w-6 h-6" />} label="العمر" value="17 سنة" delay={1.1} />
        <InfoCard icon={<MapPin className="w-6 h-6" />} label="السكن" value="الصداقة الجديدة" delay={1.2} />
        <InfoCard 
          icon={<Heart className="w-6 h-6" />} 
          label="الحالة" 
          value={<span className="flex items-center justify-center gap-1">Single <span className="text-lg">😎</span></span>}
          delay={1.3} 
        />
        <InfoCard icon={<Phone className="w-6 h-6" />} label="التواصل" value="01140337447" delay={1.4} />
      </motion.div>

      {/* Instagram Button */}
      <motion.a
        href="https://instagram.com/4hz_z3"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 flex items-center gap-4 px-10 py-5 glass-dark gradient-border-animated rounded-full text-foreground group overflow-hidden relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 shimmer"
        />
        
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Instagram className="w-7 h-7 text-primary" />
        </motion.div>
        <div className="flex flex-col">
          <span className="font-orbitron font-bold text-lg text-primary">@4hz_z3</span>
          <span className="text-muted-foreground text-sm">تابعني على انستغرام</span>
        </div>
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-7 h-12 border-2 border-primary/50 rounded-full flex justify-center pt-2 pulse-glow">
          <motion.div 
            className="w-2 h-3 bg-gradient-to-b from-primary to-accent rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
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
  value: React.ReactNode; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -30 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    whileHover={{ 
      scale: 1.08, 
      rotateY: 8,
    }}
    className="glass-dark gradient-border rounded-2xl p-5 text-center cursor-pointer group"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <motion.div 
      className="text-primary mb-3 flex justify-center"
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <p className="text-xs text-muted-foreground font-cairo mb-1">{label}</p>
    <div className="text-base font-bold text-foreground font-cairo group-hover:text-primary transition-colors">
      {value}
    </div>
  </motion.div>
);

export default HeroSection;
