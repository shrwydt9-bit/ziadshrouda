import { motion } from 'framer-motion';
import { Dumbbell, Trophy, Flame, Target } from 'lucide-react';

const sports = [
  {
    icon: <Dumbbell className="w-10 h-10" />,
    name: 'Calisthenics',
    nameAr: 'كاليستنكس',
    description: 'تمارين وزن الجسم والقوة',
    emoji: '🤸‍♂️',
  },
  {
    icon: <Target className="w-10 h-10" />,
    name: 'Fitness',
    nameAr: 'فيتنس',
    description: 'اللياقة البدنية العالية',
    emoji: '💪',
  },
  {
    icon: <Flame className="w-10 h-10" />,
    name: 'Gym',
    nameAr: 'جيم',
    description: 'تمارين الحديد والقوة',
    emoji: '🏋️',
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    name: 'MMA',
    nameAr: 'إم إم إيه',
    description: 'الفنون القتالية المختلطة',
    emoji: '🥊',
  },
];

const SportsSection = () => {
  return (
    <section id="sports" className="py-20 px-4">
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
            💪 الرياضات
          </h2>
          <p className="text-muted-foreground font-cairo text-lg">اسمي معروف في كل حتة</p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass gradient-border rounded-2xl p-6 text-center card-hover group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div 
                className="text-primary mb-4 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {sport.icon}
              </motion.div>
              
              <span className="text-4xl mb-3 block">{sport.emoji}</span>
              
              <h3 className="font-orbitron text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {sport.name}
              </h3>
              
              <p className="text-sm text-primary font-cairo font-bold mb-2">
                {sport.nameAr}
              </p>
              
              <p className="text-xs text-muted-foreground font-cairo">
                {sport.description}
              </p>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
