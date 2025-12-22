import { Helmet } from 'react-helmet-async';
import ParticlesBackground from '@/components/ParticlesBackground';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import SportsSection from '@/components/SportsSection';
import CommentsSection from '@/components/CommentsSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ziad Official | لاعب رياضي محترف</title>
        <meta name="description" content="الموقع الرسمي لـ Ziad Official - لاعب Calisthenics, Fitness, Gym و MMA. اكتشف المزيد عني وتابعني على انستغرام." />
        <meta name="keywords" content="Ziad Official, زياد, كاليستنكس, فيتنس, جيم, MMA, رياضة" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Content */}
        <main className="relative z-10">
          <HeroSection />
          <PhotoGallery />
          <SportsSection />
          <CommentsSection />
        </main>

        {/* Music Player */}
        <MusicPlayer />

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center border-t border-border/20">
          <p className="text-muted-foreground font-cairo text-sm">
            © 2025 <span className="text-primary font-orbitron">ZIAD OFFICIAL</span> - All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;
