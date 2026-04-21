import Header from './component/Header';
import maskotHero from './assets/Maskot-Hero.png';
import textImage from './assets/nav-logo.png';
import Button from './component/ui/Button';
import ButtonScroll from './component/ui/ButtonScroll';
import PembicaraSection from './component/Pembicara';
import TentangSection from './component/Tentang';
import SeminarSection from './component/Seminar';
import TalkshowSection from './component/Talkshow';
import WorkshopSection from './component/Workshop';
import CompetitionSection from './component/Competition';
import FaqSection from './component/Faq';
import SponsorSection from './component/Sponsor';
import MediaSection from './component/Media';
import Footer from './component/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 relative overflow-hidden flex flex-col selection:bg-pink-200">
      <Header />
      
      <main className="grow w-full max-w-7xl mx-auto px-6 lg:px-12 pt-10 lg:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="z-10 relative flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img 
            src={textImage} 
            alt="INVOFEST" 
            className="w-full max-w-70 md:max-w-95 mb-5 drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
          />
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-8 max-w-130">
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan
            untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam
            menghadapi era digital. Dengan mengusung tema <strong className="text-slate-800 font-bold">"Beyond Limits, Beyond
            Intelligence: Innovate for a Smarter Tomorrow "</strong>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>INFO SELENGKAPNYA</Button>
            <Button variant="outline">HUBUNGI PANITIA</Button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 delay-300 fill-mode-both">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-fuchsia-400/20 rounded-full blur-[80px] scale-125 -z-10 group-hover:bg-fuchsia-400/30 transition-colors duration-700" />
            <img 
              src={maskotHero} 
              alt="Invofest Mascot" 
              className="w-full max-w-[320px] md:max-w-95 lg:max-w-105 drop-shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </main>

      <PembicaraSection />

      <TentangSection />

      <SeminarSection />

      <TalkshowSection />

      <WorkshopSection />

      <CompetitionSection />

      <FaqSection />

      <SponsorSection />

      <MediaSection />

      <Footer />

      <ButtonScroll />
    </div>
  )
}

export default App