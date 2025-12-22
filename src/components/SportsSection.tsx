import { motion } from 'framer-motion';
import { Dumbbell, Trophy, Flame, Target, Swords } from 'lucide-react';

const sports = [
  {
    icon: <Dumbbell className="w-12 h-12" />,
    name: 'Calisthenics',
    nameAr: 'كاليستنكس',
    description: 'تمارين وزن الجسم والقوة',
    emoji: '🤸‍♂️',
    color: 'from-primary to-accent',
  },
  {
    icon: <Target className="w-12 h-12" />,
    name: 'Fitness',
    nameAr: 'فيتنس',
    description: 'اللياقة البدنية العالية',
    emoji: '💪',
    color: 'from-accent to-primary',
  },
  {
    icon: <Flame className="w-12 h-12" />,
    name: 'Gym',
    nameAr: 'جيم',
    description: 'تمارين الحديد والقوة',
    emoji: '🏋️',
    color: 'from-primary to-neon-purple',
  },
  {
    icon: <Swords className="w-12 h-12" />,
    name: 'MMA',
    nameAr: 'إم إم إيه',
    description: 'الفنون القتالية المختلطة',
    emoji: '🥊',
    color: 'from-neon-purple to-primary',
  },
];

const SportsSection = () => {
  return (
    <section id="sports" className="py-24 px-4 relative">
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
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-primary text-glow">
              الرياضات
            </h2>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔥
            </motion.span>
          </motion.div>
          <p className="text-xl text-muted-foreground font-cairo">
            اسمي معروف في <span className="text-primary font-bold">كل حتة</span> 😎
          </p>
          <motion.div 
            className="h-1 w-48 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
              className="glass-dark gradient-border rounded-3xl p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div 
                className="text-primary mb-6 flex justify-center relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {sport.icon}
              </motion.div>
              
              {/* Emoji */}
              <motion.span 
                className="text-5xl mb-4 block relative z-10"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {sport.emoji}
              </motion.span>
              
              {/* Name */}
              <h3 className="font-orbitron text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                {sport.name}
              </h3>
              
              {/* Arabic Name */}
              <p className="text-lg text-accent font-cairo font-bold mb-3 relative z-10">
                {sport.nameAr}
              </p>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground font-cairo relative z-10">
                {sport.description}
              </p>
              
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-accent/30 group-hover:border-accent transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="glass-dark gradient-border rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-2xl font-cairo text-foreground mb-4">
              "الرياضة مش بس جسم، دي <span className="text-primary">عقل</span> و<span className="text-accent">روح</span>"
            </p>
            <footer className="text-muted-foreground font-orbitron">
              — ZIAD OFFICIAL 😎
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsSection;
