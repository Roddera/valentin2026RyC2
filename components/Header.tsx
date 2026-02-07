'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary via-pink-500 to-red-500 text-white py-6 px-4 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 text-6xl opacity-20 animate-float">
          💕
        </div>
        <div className="absolute -bottom-5 -left-5 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          💖
        </div>
        <div className="absolute top-1/2 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          ✨
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-3xl animate-pulse">💝</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold">San Valentín 2025</h1>
          <span className="text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>
            💝
          </span>
        </div>
        <p className="text-pink-100 text-sm md:text-base">¿Me harías el honor de ser mi San Valentín una vez más? 💕"</p>
      </div>
    </header>
  );
}
