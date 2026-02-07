'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-red-500 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-3 text-3xl animate-bounce">
            <span style={{ animationDelay: '0s' }}>💕</span>
            <span style={{ animationDelay: '0.2s' }}>💖</span>
            <span style={{ animationDelay: '0.4s' }}>💝</span>
            <span style={{ animationDelay: '0.6s' }}>✨</span>
          </div>
          <p className="text-pink-100 text-lg font-display">
            Con todo mi amor y admiración
          </p>
          <p className="text-sm text-pink-200">
            Hecha con 💕 para mi mujer hermosa | 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
