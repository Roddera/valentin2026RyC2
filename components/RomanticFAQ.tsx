'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: '¿Por qué hiciste esta página?',
    answer:
      'Porque quería encontrar una forma especial y memorable de expresar mis sentimientos por ti. Una página interactiva que reflejara la alegría que me trae estar en tu vida.',
    emoji: '💭',
  },
  {
    question: '¿Es en serio?',
    answer:
      'Absolutamente. Cada palabra de esta página viene del corazón. Te aprecio más de lo que las palabras pueden expresar, y quería que lo supieras de una forma especial.',
    emoji: '❤️',
  },
  {
    question: '¿Qué significa ser tu San Valentín?',
    answer:
      'Significa que quiero ser la persona con la que compartes tus sonrisas, tus sueños y tus momentos especiales. Alguien en quien puedas confiar y con quien celebrar la vida.',
    emoji: '👫',
  },
  {
    question: '¿Qué viene después?',
    answer:
      'Si aceptas, quiero llevarte a un lugar especial, sorprenderte con detalles pequeños pero significativos, y simplemente pasar tiempo de calidad juntos disfrutando de cada momento.',
    emoji: '✨',
  },
  {
    question: '¿Me amas?',
    answer:
      'Sí, de verdad. Quizás no con las palabras perfectas, pero con mis acciones, mi tiempo y mi dedicación. Cada día contigo es un regalo que valoro profundamente.',
    emoji: '💕',
  },
];

interface FAQItem {
  question: string;
  answer: string;
  emoji: string;
}

export default function RomanticFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-white via-pink-50 to-rose-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Cosas que Quieres Saber 💭
          </h2>
          <p className="text-lg text-primary/70">
            Preguntas que quizás tengas en tu mente
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item: FAQItem, index: number) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-start justify-between p-6 bg-white hover:bg-pink-50 border-2 border-pink-200 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="flex items-start gap-4 text-left">
                  <span className="text-3xl mt-1 flex-shrink-0">{item.emoji}</span>
                  <h3 className="text-lg font-semibold text-primary font-display">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <div className="px-6 py-6 bg-gradient-to-br from-pink-50 to-rose-50 border-l-4 border-primary border-t-2 border-r-2 border-b-2 border-pink-200 rounded-b-2xl">
                    <p className="text-primary/80 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-3xl p-8 border-2 border-primary/20">
            <p className="text-primary font-display text-xl leading-relaxed">
              Sea cual sea tu respuesta, sé que es la correcta para ti. 💕 Lo importante es que
              ahora sabes cuánto significas para mí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
