'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ValentineProposal() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesClicked, setYesClicked] = useState(false);
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [celebration, setCelebration] = useState(false);

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoHoverCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setCelebration(true);
    setTimeout(() => setCelebration(false), 3000);
  };

  if (yesClicked) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
        {celebration && (
          <div className="fixed inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10px`,
                  animation: `fall ${2 + Math.random() * 2}s linear infinite`,
                  fontSize: `${20 + Math.random() * 20}px`,
                }}
              >
                {['💕', '❤️', '💖', '✨', '💝'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        )}

        <style>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>

        <div className="max-w-2xl mx-auto text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary">
              ¡Sabía que sí! 💕
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Hagamos que este día sea inolvidable.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-pink-200">
            <div className="text-6xl mb-6 animate-bounce">✨</div>
            <p className="text-lg text-primary/70 mb-6 font-display leading-relaxed">
              Gracias por compartir tu tiempo y tu alegría conmigo. Me hace muy feliz 
              saber que este San Valentín lo pasaré con la persona más increíble que conozco.
            </p>
            <div className="space-y-3">
              <p className="text-primary font-semibold text-xl">
                Contando los minutos... ❤️
              </p>
              <p className="text-pink-500 text-sm">Nos vemos pronto.</p>
            </div>
          </div>

          <button
            onClick={() => setYesClicked(false)}
            className="mt-8 px-8 py-3 bg-primary/10 text-primary rounded-full font-semibold hover:bg-primary/20 transition-colors duration-200"
          >
            Volver
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-white via-rose-50 to-pink-100">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="text-7xl md:text-8xl animate-bounce">✨</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
            Tengo una pregunta...
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
              ¿Quieres ser mi San Valentín?
            </span>
          </h1>
          <p className="text-xl text-primary/70 mt-6 max-w-xl mx-auto italic">
            "Hay momentos que merecen ser celebrados, y personas que hacen que todo valga la pena."
          </p>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-6 my-8">
          <div className="text-4xl heart-pulse">💖</div>
          <div className="text-4xl heart-pulse" style={{ animationDelay: '0.3s' }}>
            ✨
          </div>
          <div className="text-4xl heart-pulse" style={{ animationDelay: '0.6s' }}>
            💕
          </div>
        </div>

        {/* Message */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-pink-200 shadow-xl">
          <p className="text-lg text-primary font-display leading-relaxed font-medium">
            Quiero que este 14 de febrero sea diferente. Me encantaría pasarlo contigo, 
            crear nuevos recuerdos y simplemente disfrutar de tu compañía. ¿Aceptas? 💝
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button
            onClick={handleYesClick}
            className="px-10 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-primary to-red-500 text-white hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-110 min-w-40"
          >
            ¡Claro que sí! 💕
          </Button>

          <div className="relative min-w-40 h-14">
            <button
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
              className="absolute inset-0 w-full h-full px-8 py-2 text-lg font-semibold rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {noHoverCount === 0
                ? 'Lo pensaré...'
                : noHoverCount < 3
                  ? '¿Estás segura?'
                  : noHoverCount < 5
                    ? '¿Ni una oportunidad?'
                    : noHoverCount < 8
                      ? 'Ya casi lo tienes...'
                      : '¡Casi!'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}