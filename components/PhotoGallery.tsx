'use client';

import { useState } from 'react';
import Image from 'next/image';

const photoPlaceholders = [
  {
    id: 1,
    title: 'Nuestro primer momento',
    src: '/img/1.JPEG',
    color: 'bg-rose-200',
    description: 'Recuerdo perfectamente este día. Fue cuando me di cuenta de que mi lugar favorito es a tu lado. No cambiaría ese instante por nada del mundo.' // <--- AQUÍ CAMBIAS EL TEXTO
  },
  {
    id: 2,
    title: 'Momentos especiales',
    src: '/img/2.JPEG',
    color: 'bg-pink-200',
    description: 'Esa sonrisa tuya ilumina mis días más oscuros. Ver esta foto me recuerda lo afortunado que soy de tenerte.'
  },
  {
    id: 3,
    title: 'Nuestras Locuras',
    src: '/img/3.JPEG',
    color: 'bg-red-200',
    description: 'Nuestras locuras y bromas internas son lo mejor. Me encanta que podamos ser nosotros mismos sin filtros.'
  },
  {
    id: 4,
    title: 'Tiempo juntos',
    src: '/img/4.JPEG',
    color: 'bg-rose-300',
    description: 'Simplemente estar contigo, sin hacer nada especial, se convierte en el mejor plan del mundo. Me das una paz increíble.'
  },
  {
    id: 5,
    title: 'Recuerdos hermosos',
    src: '/img/5.JPEG',
    color: 'bg-pink-300',
    description: 'Cada aventura contigo es una página nueva en mi libro favorito. Gracias por construir estos recuerdos conmigo.'
  },
  {
    id: 6,
    title: 'Cada momento cuenta',
    src: '/img/6.JPEG',
    color: 'bg-red-300',
    description: 'Por este y por millones de momentos más juntos. Te quiero más de lo que las palabras pueden explicar.'
  },
];

interface Photo {
  id: number;
  title: string;
  src: string;
  color: string;
  description: string; // Agregamos esto para que TypeScript no se queje
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Nuestros Momentos ✨
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Cada foto es un recuerdo especial compartido contigo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoPlaceholders.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer"
            >
              <div className={`relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${photo.color}`}>
                
                {/* Imagen */}
                <Image 
                  src={photo.src} 
                  alt={photo.title}
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Capa oscura hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-4xl mb-2 animate-bounce">💕</div>
                    <p className="text-white text-lg font-semibold font-display shadow-sm">
                      {photo.title}
                    </p>
                    <p className="text-white/80 text-xs mt-2 line-clamp-2">
                        {/* Pequeña previsualización del texto */}
                        {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODAL (FOTO GRANDE) --- */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-[50vh] md:h-[60vh] w-full bg-black flex items-center justify-center`}>
                
                <Image 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.title}
                  fill 
                  className="object-contain" 
                  priority
                />

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 z-10"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6 md:p-8 bg-white text-center">
                <h3 className="text-3xl font-display font-bold text-rose-600 mb-4">
                  {selectedPhoto.title}
                </h3>
                
                {/* AQUI SE MUESTRA LA DESCRIPCIÓN ESPECÍFICA */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  {selectedPhoto.description}
                </p>
                
    
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}