import { Link } from '@remix-run/react';
import { TronButton } from '~/components/ui/tron-button';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black/95 to-black/90">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-cyan-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-transparent via-cyan-500/10 to-transparent" />
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-40" />
        
        <div className="absolute inset-0 flex items-top justify-center">
          <h1 className="text-[14vw] font-light tracking-widest text-white leading-none whitespace-nowrap animate-pulse shadow-[0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#0ff,0_0_40px_#0ff] [text-shadow:0_0_10px_#fff,0_0_20px_#fff,0_0_30px_#0ff,0_0_40px_#0ff]">PURE CATCH</h1>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 mt-[14vw]">
          <h2 className="text-4xl md:text-6xl font-bold mb-2 text-white">
            For Keepers, By Keepers
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Premium goalkeeper equipment and training guides to help you reach your full potential
          </p>
        
        {/* Description */}
        <p className="text-xl sm:text-2xl text-[#89ddff] mb-8 max-w-4xl mx-auto font-light">
          Premium goalkeeper equipment and training guides to help you reach your full potential
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <TronButton 
            size="lg" 
            className="text-lg rounded-[5px]"
          > 
            <Link to="/collections">Shop Now</Link>
          </TronButton>
          <TronButton 
            asChild 
            variant="outline" 
            size="lg" 
            className="text-lg rounded-[5px]"
          >
            <Link to="/support">Learn More</Link>
          </TronButton>
        </div>
      </div>
    </section>
  );
} 