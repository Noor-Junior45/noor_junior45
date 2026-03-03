import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Send, 
  MessageCircle, 
  Mail, 
  Globe, 
  Github,
  Youtube,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import SocialButton from './components/SocialButton';
import Background3D from './components/Background3D';

// Official Binance Logo Component
const BinanceIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 32" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0L8.62 7.38L16 14.76L23.38 7.38L16 0ZM4.24 11.76L0 16L4.24 20.24L8.48 16L4.24 11.76ZM27.76 11.76L23.52 16L27.76 20.24L32 16L27.76 11.76ZM16 17.24L8.62 24.62L16 32L23.38 24.62L16 17.24ZM16 11.52L11.52 16L16 20.48L20.48 16L16 11.52Z" />
  </svg>
);

// PayPal Icon
const PayPalIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.794-9.067 6.794h-2.13l-1.04 6.604-.024.123a.596.596 0 0 0 .595.696h3.688l-.473 3.012a.641.641 0 0 1-.633.54H7.076z" />
  </svg>
);

// Steam Icon
const SteamIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.979 0C5.358 0 0 5.358 0 11.979c0 5.757 4.092 10.573 9.506 11.733l2.64-3.885a4.125 4.125 0 0 1-.675-2.213c0-2.28 1.845-4.125 4.125-4.125 2.28 0 4.125 1.845 4.125 4.125 0 2.28-1.845 4.125-4.125 4.125-.645 0-1.245-.15-1.785-.412l-2.475 3.638c.217.03.435.045.66.045 6.621 0 11.979-5.358 11.979-11.979S18.6 0 11.979 0zm-2.025 16.59l-2.625 3.855A11.925 11.925 0 0 1 2.1 14.475l3.57-1.478a4.125 4.125 0 0 1 4.284 3.593zm1.013-2.535a2.438 2.438 0 1 0 0 4.875 2.438 2.438 0 0 0 0-4.875zm0 1.125a1.313 1.313 0 1 1 0 2.625 1.313 1.313 0 0 1 0-2.625z" />
  </svg>
);

// Xbox Icon
const XboxIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.004 22.996c-2.316-.25-4.437-1.266-6.094-2.922C1.94 17.105.94 13.511 2.065 9.48c.156-.594.344-1.125.563-1.656.25-.563.094-.5.844.25.563.563 1.563 1.406 2.219 1.844 1.563 1.094 3.375 1.75 5.313 1.938 1.938.188 3.75-.469 5.313-1.938.656-.438 1.656-1.281 2.219-1.844.75-.75.594-.813.844-.25.219.531.406 1.063.563 1.656 1.125 4.031.125 7.625-2.844 10.594-1.656 1.656-3.778 2.672-6.094 2.922-.656.063-1.344.063-2 .004zM11.973 10.5c-1.438 0-3.094-.656-4.5-1.781-.594-.469-1.219-1.063-1.375-1.313-.219-.313-.156-.375.375-.594 1.5-.594 3.25-.719 4.875-.344.594.125 1.125.125 1.719 0 1.625-.375 3.375-.25 4.875.344.531.219.594.281.375.594-.156.25-.781.844-1.375 1.313-1.406 1.125-3.063 1.781-4.5 1.781h-.469zm-5.469 8.281c1.531-1.438 2.906-3.781 3.281-5.594.063-.344.094-.344-.281-.125-1.594 1.031-3.219 2.625-3.688 3.656-.313.688-.219 1.563.219 2.063.156.156.313.156.469 0zm10.969 0c.438-.5.531-1.375.219-2.063-.469-1.031-2.094-2.625-3.688-3.656-.375-.219-.344-.219-.281.125.375 1.813 1.75 4.156 3.281 5.594.156.156.313.156.469 0z" />
  </svg>
);

// Discord Icon
const DiscordIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-2.313-9.111-3.677-13.687a.074.074 0 0 0-.032-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

// Snapchat Icon
const SnapchatIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.003 0C5.86 0 2.376 4.16 2.376 7.426c0 2.502 1.637 4.197 2.27 4.717.316.26.246.61.07.947-.42 1.054-1.334 2.46-1.334 3.443 0 1.088.772 1.79 1.825 2.107 1.088.316 2.317-.106 3.475-.667.632-.316 1.404-.316 2.036 0 .597.28 1.264.42 1.93.42.527 0 1.053-.07 1.545-.245.632-.21 1.334-.175 1.93.105 1.159.56 2.387.983 3.476.666 1.053-.316 1.825-1.018 1.825-2.106 0-.983-.913-2.387-1.334-3.44-.176-.35-.246-.667.07-.948.632-.526 2.246-2.21 2.246-4.718C21.63 4.16 18.146 0 12.003 0z"/>
  </svg>
);

// Sound Effect Hook
const useSoundEffects = () => {
  const playHover = () => {
    const audio = new AudioContext();
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, audio.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, audio.currentTime + 0.1);
    gain.gain.setValueAtTime(0.05, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.1);
    osc.start();
    osc.stop(audio.currentTime + 0.1);
  };

  const playClick = () => {
    const audio = new AudioContext();
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, audio.currentTime);
    gain.gain.setValueAtTime(0.1, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.1);
    osc.start();
    osc.stop(audio.currentTime + 0.1);
  };

  return { playHover, playClick };
};

function App() {
  const { playHover, playClick } = useSoundEffects();
  const links = [
    {
      icon: Globe,
      label: "New Lucky Pharma",
      username: "newluckypharma.vercel.app",
      href: "https://newluckypharma.vercel.app",
      color: "bg-emerald-500"
    },
    // ... (rest of links remain same, just need to pass playHover/playClick if SocialButton supports it, or wrap them)
    {
      icon: Globe,
      label: "Noor POS",
      username: "noorpos.in",
      href: "https://noorpos.in",
      color: "bg-blue-500"
    },
    {
      icon: PayPalIcon,
      label: "PayPal",
      username: "mdhassan1738@gmail.com",
      href: "https://paypal.me/mdhassan1738", 
      color: "bg-[#003087]"
    },
    {
      icon: SteamIcon,
      label: "Steam",
      username: "mdhassan1738@gmail.com",
      href: "https://steamcommunity.com/id/mdhassan1738",
      color: "bg-[#171a21]"
    },
    {
      icon: XboxIcon,
      label: "Xbox",
      username: "Junior 45 #8121",
      href: "https://account.xbox.com/en-us/profile?gamertag=Junior+45+%238121",
      color: "bg-[#107C10]"
    },
    {
      icon: DiscordIcon,
      label: "Discord",
      username: "@noor_junior45",
      href: "https://discord.com",
      color: "bg-[#5865F2]"
    },
    {
      icon: SnapchatIcon,
      label: "Snapchat",
      username: "@noor_junior45",
      href: "https://snapchat.com",
      color: "bg-[#FFFC00] text-black"
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@noor_junior45",
      href: "https://instagram.com/noor_junior45",
      color: "bg-pink-500"
    },
    {
      icon: Facebook,
      label: "Facebook",
      username: "noorjunior45",
      href: "https://facebook.com/noorjunior45",
      color: "bg-blue-600"
    },
    {
      icon: Facebook,
      label: "Facebook Channel",
      username: "E N C O U R A G E 》O T H E R s",
      href: "https://www.facebook.com/107348335314854?ref=PROFILE_EDIT_xav_ig_profile_page_web",
      color: "bg-blue-700"
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      username: "@noor_junior45",
      href: "https://x.com/noor_junior45",
      color: "bg-black"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "noor_junior45",
      href: "https://linkedin.com/in/noor_junior45",
      color: "bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "@noor_junior45",
      href: "https://github.com/noor_junior45",
      color: "bg-purple-600"
    },
    {
      icon: Youtube,
      label: "YouTube",
      username: "@noor_junior45",
      href: "https://youtube.com/@noor_junior45",
      color: "bg-red-600"
    },
    {
      icon: Send,
      label: "Stock Graph",
      username: "Stock Graph",
      href: "https://t.me/stock_graph1",
      color: "bg-sky-500"
    },
    {
      icon: Send,
      label: "WALLPAPERS",
      username: "WALLPAPERS",
      href: "https://t.me/phone_wallpaper_17",
      color: "bg-teal-500"
    },
    {
      icon: Send,
      label: "Telegram",
      username: "@noor_junior45",
      href: "https://t.me/noor_junior45",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      username: "Channel",
      href: "https://whatsapp.com/channel/0029Vb7CigM90x32Z0XNGE2U",
      color: "bg-green-500"
    },
    {
      icon: BinanceIcon,
      label: "Binance",
      username: "noor_junior45",
      href: "https://app.binance.com/uni-qr/cpro/noor_junior45?l=en-IN&r=HXFRTVM2&uc=web_square_share_link&us=copylink", 
      color: "bg-yellow-500"
    },
    {
      icon: Mail,
      label: "Email",
      username: "mdnoor4860@gmail.com",
      href: "mailto:mdnoor4860@gmail.com",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Background3D />
      
      <main className="relative z-10 container mx-auto px-4 py-10 flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-8 w-full max-w-sm"
        >
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40 rounded-full animate-pulse group-hover:opacity-60 transition-opacity" />
            <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)] mx-auto overflow-hidden relative z-10">
               <img 
                 src="https://lh3.googleusercontent.com/p/AF1QipO3Kk4K7vw_t19yrm-y1Ban3SXBJ7irylAOf1Q-=s1360-w1360-h1020-rw" 
                 alt="Md Noor Hassan" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </motion.div>

        {/* Name and Tag */}
        <div className="text-center mb-10 relative z-20">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-wide uppercase drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] font-display">
                MD NOOR HASSAN
            </h1>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs md:text-sm font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                Student & Developer
            </div>
        </div>
          
        {/* Profile Card / Bio - Claymorphism Style */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          onMouseEnter={playHover}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-blue-100 shadow-[inset_-5px_-5px_15px_rgba(255,255,255,0.05),_inset_5px_5px_15px_rgba(0,0,0,0.2),_0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden mb-16 w-full max-w-sm"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-arabic text-blue-300 mb-6 drop-shadow-lg text-center" dir="rtl">
            محمد نور حسن
          </h2>

          <p className="text-sm md:text-base leading-relaxed font-light tracking-wide relative z-10 text-center">
            <span className="block font-semibold text-blue-400 mb-1 text-lg">College & University</span>
            <span className="block mb-3 text-white/80">SNU - KOLKATA | BTech in CSE.</span>
            
            <span className="block my-4 w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></span>
            
            <span className="block italic mb-1 text-lg text-emerald-300">السلام عليكم</span>
            <span className="block text-xs opacity-70 mb-3 font-mono">🎂 27 Feb • 7 Muharram</span>
            
            <span className="block mt-4 font-medium text-white/90 italic border-l-2 border-blue-400/50 pl-4 text-left">
              "We are all remarkable creations of Allah.<br/>Always maintain a smile; it is a Sunnah."
            </span>
          </p>
        </motion.div>

        {/* Links Staircase */}
        <div className="w-full max-w-4xl relative perspective-1000 px-4 pb-10">
          {/* Central Path Line - Connecting the journey */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-green-500/50 transform -translate-x-1/2 -z-10 rounded-full blur-[2px]" />

          {links.map((link, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="transform transition-all duration-500 relative flex items-center justify-center"
              style={{ 
                zIndex: links.length - index,
                marginBottom: '40px'
              }}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {/* Connecting Branch */}
              <div 
                className={`absolute top-1/2 h-0.5 bg-white/20 -z-10 hidden md:block w-16 transition-all duration-500`}
                style={{ 
                  left: index % 2 === 0 ? '50%' : 'auto',
                  right: index % 2 !== 0 ? '50%' : 'auto',
                  transform: index % 2 === 0 ? 'translateX(0)' : 'translateX(0)',
                  width: 'calc(50% - 140px)' // Dynamic connector length based on button width approx
                }}
              />
              
              <div 
                className="w-full"
                style={{
                  transform: `translateX(${index % 2 === 0 ? '-20px' : '20px'})`, // Subtle zigzag
                }}
              >
                <SocialButton 
                  {...link} 
                  delay={0} // Handled by parent motion.div now
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* End of Page Design Element */}
        <div className="w-full max-w-xs mx-auto mt-16 mb-8 p-1">
          <motion.div 
            animate={{ scaleX: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            <div className="absolute inset-0 bg-white/50 animate-pulse" />
          </motion.div>
          
          <div className="flex justify-center gap-3 mt-3">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" 
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full text-center py-8 mb-8 text-blue-100 font-medium tracking-wider drop-shadow-md">
          <p>© 2024 Md Noor Hassan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
