import { useState, useEffect, useRef, ReactNode } from 'react';
import { 
  Youtube, 
  Send, 
  Lock, 
  ExternalLink, 
  Check, 
  Copy,
  CheckCircle2,
  ShieldCheck,
  Crown,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PromoCode = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-4 bg-black/40 rounded-sm border border-[#c5a059]/10 flex flex-col items-center justify-center gap-1 group relative overflow-hidden transition-all hover:border-[#c5a059]/30">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-black">промо-код</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-3xl font-black text-white tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{code}</span>
        <button 
          onClick={handleCopy}
          className="p-2 hover:bg-[#c5a059]/20 rounded-sm transition-colors cursor-pointer border border-[#c5a059]/20"
          title="Копировать"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-[#c5a059]" />}
        </button>
      </div>
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mt-2">100FS за регистрацию</span>
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#c5a059] flex items-center justify-center text-xs font-black text-black pointer-events-none"
          >
            СКОПИРОВАНО
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OfferCard = ({ 
  title, 
  url, 
  features, 
  logo, 
  promoCode = "ROYAL",
  logoBg = "bg-[#0a0a0a]"
}: { 
  title: string, 
  url: string, 
  features: string[], 
  logo: ReactNode,
  promoCode?: string,
  logoBg?: string
}) => {
  const [isLicenseExpanded, setIsLicenseExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative p-[1px] rounded-sm overflow-hidden group"
    >
      {/* 3D Gold Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#aa771c] opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-[#050505] rounded-sm overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:bg-[#0a0a0a]">
        {/* Visual Header - Wheel Inspired */}
        <div className={`h-28 flex items-center justify-center ${logoBg} relative overflow-hidden border-b border-[#c5a059]/30 p-4`}>
          {/* Circular Motif Background */}
          <div className="absolute w-40 h-40 rounded-full border border-[#c5a059]/10 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.1)_0%,_transparent_70%)]"></div>
          
          {/* Decorative Lights (Dots) */}
          <div className="absolute top-2 left-0 right-0 flex justify-around px-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-[#c5a059]' : 'bg-white'} opacity-40 shadow-[0_0_5px_white]`}></div>
            ))}
          </div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#c5a059_0%,_transparent_50%)]"></div>
          </div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#c5a059]/40"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#c5a059]/40"></div>
          
          <div className="relative z-10 w-full h-full flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-500">
            {logo}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-grow relative">
          {/* Subtle Shine Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent"></div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-[#c5a059] drop-shadow-[0_0_8px_rgba(197,160,89,0.6)]" />
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">{title}</h3>
            </div>
            <a 
              href={`https://${url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest flex items-center gap-1 hover:brightness-125 transition-all"
            >
              {url} <ExternalLink size={10} />
            </a>
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 leading-tight">
                <CheckCircle2 size={16} className="text-[#c5a059] mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6">
            <div>
              <button className="gold-button w-full py-4 font-black uppercase tracking-[0.2em] text-sm rounded-sm transition-all shadow-[0_5px_15px_rgba(0,0,0,0.4)] active:scale-[0.97] cursor-pointer hover:brightness-110 relative overflow-hidden group/btn border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                Получить бонус
              </button>
              <PromoCode code={promoCode} />
            </div>

            {/* License Section */}
            <div className="pt-6 border-t border-[#c5a059]/10">
              <div className="flex items-start gap-4">
                <a 
                  href="https://cert.cga.cw/certificate?id=ZXlKcGRpSTZJbGMyYW05TE1tbE1WbWMzVFVaUlFtaHBNSEF4ZVdjOVBTSXNJblpoYkhWbElqb2llbVJMWkdSdGJXNDVTQzlqUlU5RWJucGFhbFJTZHowOUlpd2liV0ZqSWpvaVlqbGxaR1kxWmpsaFl6UmlPRGM0WlRWall6QTNNall4TXpNNVlXVXlZakk0T0dJd1pXTXdOV1V6T0RNMU5tTTJObVkyTjJNMFlqWTFaakV4T1RVMk1DSXNJblJoWnlJNklpSjk=" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block flex-shrink-0 hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://sealimg.certcga.com/?token=ZXlKcGRpSTZJbGMyYW05TE1tbE1WbWMzVFVaUlFtaHBNSEF4ZVdjOVBTSXNJblpoYkhWbElqb2llbVJMWkdSdGJXNDVTQzlqUlU5RWJucGFhbFJTZHowOUlpd2liV0ZqSWpvaVlqbGxaR1kxWmpsaFl6UmlPRGM0WlRWall6QTNNall4TXpNNVlXVXlZakk0T0dJd1pXTXdOV1V6T0RNMU5tTTJObVkyTjJNMFlqWTFaakV4T1RVMk1DSXNJblJoWnlJNklpSjk=" 
                    alt="Curacao License Seal" 
                    className="w-14 h-auto"
                    referrerPolicy="no-referrer"
                  />
                </a>
                <div className="flex-grow">
                  <button 
                    onClick={() => setIsLicenseExpanded(!isLicenseExpanded)}
                    className="flex items-center gap-1 text-[10px] font-bold text-[#c5a059] uppercase tracking-wider mb-1 hover:brightness-125 transition-all cursor-pointer"
                  >
                    Лицензия {isLicenseExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isLicenseExpanded ? "auto" : "0px", opacity: isLicenseExpanded ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[9px] text-gray-500 text-left leading-relaxed">
                      Информация на сайте предоставлена оператором сайта – GALAKTIKA N.V., зарегистрированным по адресу: Scharlooweg 39, Willemstad, Curaçao (регистрационный номер: 140803). Деятельность компании GALAKTIKA N.V. полностью лицензируется и регулируется Управлением азартных игр Кюрасао (Curaçao Gaming Authority, лицензия № OGL/2024/169/0146, выдана 28 октября 2024 года) и законодательством Кюрасао.
                    </p>
                  </motion.div>
                  {!isLicenseExpanded && (
                    <p className="text-[9px] text-gray-600 truncate max-w-[150px]">
                      GALAKTIKA N.V. (Curaçao)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LuckyWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3');
    audioRef.current.volume = 0.5;
  }, []);

  const segments = [
    "Ничего", "Бонус 400$", "Ничего", "Madame Destiny", 
    "Ничего", "iPhone 15", "Ничего", "2.500 ₽", 
    "Ничего", "5.000 ₽", "Ничего", "10.000 ₽", 
    "Ничего", "25.000 ₽", "Ничего", "Macbook Air", 
    "Ничего", "Промокод", "Ничего", "Tg Premium", 
    "Ничего", "Бонус 200$", "Ничего", "Royal VIP"
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    
    const extraDegrees = Math.floor(Math.random() * 360);
    const newRotation = rotation + 3600 + extraDegrees; // 10 full rotations
    
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const actualDegrees = newRotation % 360;
      const segmentDegrees = 360 / segments.length;
      const index = Math.floor(((360 - (actualDegrees % 360)) % 360) / segmentDegrees);
      setResult(segments[index]);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, 4000);
  };

  return (
    <div className="relative w-full max-w-[360px] mx-auto aspect-square flex items-center justify-center">
      {/* Pointer */}
      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-30 w-12 h-14 drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
        <div className="w-full h-full bg-gradient-to-b from-[#fcf6ba] via-[#c5a059] to-[#aa771c] clip-path-pointer shadow-lg border-x border-t border-white/30 relative">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_5px_white]"></div>
        </div>
      </div>

      {/* Outer Rim 3D Effect */}
      <div className="absolute inset-0 rounded-full border-[14px] border-[#1a1a1a] shadow-[0_0_100px_rgba(197,160,89,0.15)] z-0"></div>

      {/* Wheel Container */}
      <motion.div 
        animate={{ rotate: rotation }}
        transition={{ duration: 4, ease: [0.15, 0, 0.15, 1] }}
        className="relative w-full h-full rounded-full border-[12px] border-[#c5a059] shadow-[inset_0_0_50px_rgba(0,0,0,0.9),0_0_40px_rgba(197,160,89,0.3)] overflow-hidden bg-[#050505] z-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 scale-[1.01]">
          <defs>
            <radialGradient id="wheelShine" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.08" />
              <stop offset="40%" stopColor="white" stopOpacity="0.02" />
              <stop offset="100%" stopColor="black" stopOpacity="0.4" />
            </radialGradient>
            <linearGradient id="segmentGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
            <linearGradient id="segmentGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252525" />
              <stop offset="100%" stopColor="#121212" />
            </linearGradient>
            <filter id="textShadow">
              <feDropShadow dx="0" dy="0.5" stdDeviation="0.2" floodOpacity="0.8"/>
            </filter>
          </defs>
          {segments.map((text, i) => {
            const angle = (360 / segments.length);
            const startAngle = i * angle;
            const endAngle = (i + 1) * angle;
            const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
            const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
            const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
            const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);
            
            return (
              <g key={i}>
                <path 
                  d={`M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`}
                  fill={i % 2 === 0 ? "url(#segmentGrad1)" : "url(#segmentGrad2)"}
                  stroke="#c5a059"
                  strokeWidth="0.2"
                  strokeOpacity="0.4"
                />
                <text
                  x="78"
                  y="50"
                  fill={i % 2 === 0 ? "#c5a059" : "#ffffff"}
                  fontSize="3.2"
                  fontWeight="900"
                  transform={`rotate(${startAngle + angle / 2}, 50, 50)`}
                  className="select-none pointer-events-none uppercase tracking-tighter"
                  style={{ textAnchor: "middle", filter: "url(#textShadow)" }}
                >
                  {text}
                </text>
              </g>
            );
          })}
          {/* Shine Overlay */}
          <circle cx="50" cy="50" r="50" fill="url(#wheelShine)" pointerEvents="none" />
          
          {/* Outer Dots (Lights) */}
          {[...Array(24)].map((_, i) => (
            <g key={i}>
              <circle 
                cx={50 + 47.5 * Math.cos((Math.PI * i * 15) / 180)}
                cy={50 + 47.5 * Math.sin((Math.PI * i * 15) / 180)}
                r="1.2"
                fill="rgba(0,0,0,0.5)"
              />
              <circle 
                cx={50 + 47.5 * Math.cos((Math.PI * i * 15) / 180)}
                cy={50 + 47.5 * Math.sin((Math.PI * i * 15) / 180)}
                r="0.6"
                fill={i % 2 === 0 ? "#c5a059" : "white"}
                className={i % 2 === 0 ? "animate-pulse" : ""}
                style={{ filter: "drop-shadow(0 0 2px white)" }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Center Button (Hub) */}
      <div className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-b from-[#bf953f] via-[#fcf6ba] to-[#aa771c] p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(197,160,89,0.4)]">
        <div className="w-full h-full rounded-full bg-[#050505] p-1 border border-white/10">
          <button 
            onClick={spinWheel}
            disabled={isSpinning}
            className="w-full h-full rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#050505] border-2 border-[#c5a059]/40 flex flex-col items-center justify-center text-center p-2 transition-all active:scale-90 disabled:opacity-100 cursor-pointer group relative overflow-hidden shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]"
          >
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex flex-col items-center justify-center p-1 bg-black/80 rounded-full w-full h-full border border-[#c5a059]/40"
                >
                  <span className="text-[8px] font-black text-[#c5a059] uppercase tracking-[0.3em] mb-0.5 drop-shadow-md">ВЫИГРЫШ</span>
                  <span className="text-sm sm:text-lg font-black text-white uppercase leading-tight gold-gradient-text drop-shadow-[0_0_15px_rgba(197,160,89,0.8)] text-center px-2">{result}</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="spin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="text-[10px] font-black text-[#c5a059] uppercase tracking-[0.2em] leading-none mb-1.5 drop-shadow-md">Нажмите</span>
                  <span className="text-xl font-black text-white uppercase leading-tight tracking-tighter group-hover:scale-110 transition-transform duration-300 gold-gradient-text drop-shadow-lg">Крутить</span>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-2 w-10 h-1 bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Result Overlay (Removed from bottom, handled in center) */}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#c5a059]/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-[#c5a059] flex items-center justify-center rotate-45">
              <span className="font-serif text-lg font-bold -rotate-45 text-[#c5a059]">R</span>
            </div>
            <span className="font-serif text-2xl font-bold tracking-[0.2em] gold-gradient-text">
              ROYAL
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8 md:gap-12">
            <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#c5a059] transition-colors">
              <Youtube size={14} /> <span className="hidden sm:inline">Youtube</span>
            </a>
            <div className="w-px h-3 bg-[#c5a059]/20"></div>
            <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#c5a059] transition-colors">
              <Send size={14} /> <span className="hidden sm:inline">Telegram</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(197,160,89,0.05)_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <LuckyWheel />
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-[#c5a059]/20"></div>
          </div>
          <div className="relative bg-[#050505] px-8 flex items-center gap-6">
            <div className="w-3 h-3 rotate-45 border border-[#c5a059]/40 bg-[#050505]"></div>
            <Crown size={28} className="text-[#c5a059] drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
            <div className="w-3 h-3 rotate-45 border border-[#c5a059]/40 bg-[#050505]"></div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fugu Offer */}
          <OfferCard 
            title="Fugu"
            url="fugu.casino"
            features={[
              "Бонусы 250% + 500FS к депозитам",
              "Рейкбек 3-х уровней",
              "Бесплатный VPN для игроков"
            ]}
            logo={
              <img 
                src="https://fugude.com/wp-content/uploads/2026/02/logo-12.png" 
                alt="Fugu Logo" 
                className="max-h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            }
          />

          {/* Martin Offer */}
          <OfferCard 
            title="Martin"
            url="martin.casino"
            logoBg="bg-gradient-to-b from-[#fcf6ba] via-[#c5a059] to-[#aa771c]"
            features={[
              "Сайт без обязательной верификации",
              "Быстрые выводы без лимитов",
              "Высокий RTP на всех слотах"
            ]}
            logo={
              <img 
                src="https://assets.casinobernie.com/logos/martin.png?auto=compress&fit=fill&fill=solid&fill-color=0000&w=1200&h=630" 
                alt="Martin Logo" 
                className="max-h-16 w-auto object-contain drop-shadow-lg brightness-0"
                referrerPolicy="no-referrer"
              />
            }
          />

          {/* Beef Offer */}
          <OfferCard 
            title="Beef"
            url="beef.com"
            features={[
              "Welcome Pack 250% и 600 FS",
              "Ставки на спорт с высокими кф",
              "Уникальная программа лояльности"
            ]}
            logo={
              <img 
                src="https://beef-casino.de.com/wp-content/uploads/2026/01/beef_logo_DE-2-300x136.png" 
                alt="Beef Logo" 
                className="max-h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            }
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#c5a059]/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#c5a059]/50 flex items-center justify-center rotate-45">
                <span className="font-serif text-sm font-bold -rotate-45 text-[#c5a059]">R</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] gold-gradient-text">
                ROYAL
              </span>
            </div>
            
            <div className="flex gap-12">
              <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                <Youtube size={20} /> Youtube
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c5a059] transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                <Send size={20} /> Telegram
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="p-8 border border-[#c5a059]/10 rounded-sm bg-[#050505]">
              <p className="text-gray-500 text-xs leading-relaxed font-medium">
                Играйте разумно, избегайте зависимости. Осторожно с финансами, не перебарщивайте с ставками. Помните, что вы несете ответственность за свои действия в азартных играх. Сайты могут менять правила без предупреждения, будьте внимательны. Мы не несем ответственности за ваши потери от азартных игр.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-[0.3em]">
                Responsible Gaming 18+
              </p>
              <p className="text-gray-700 text-[10px] font-bold">
                © {new Date().getFullYear()} ROYAL ELITE. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
