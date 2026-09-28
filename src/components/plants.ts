// plants.ts

export type CareInstructions = {
  watering: string;
  sunlight: string;
  location: string;
  pruning: string;
  substrate: string;
  temperature: string;
  boliviaTips: string;
  commonMistakes: string;
  wateringFrequency: 'Baja (1 vez/semana)' | 'Media (2-3 veces/semana)' | 'Alta (Diario en calor)';
  sunlightType: 'Luz Indirecta Brillante' | 'Semisombra / Sol Mañanero' | 'Pleno Sol Exterior';
};

export type Bonsai = {
  id: number;
  name: string;
  scientificName: string;
  speciesType: 'portulacaria' | 'crassula';
  category: 'portulacaria' | 'crassula';
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  estimatedAge: string;
  height: string;
  potType: string;
  description: string;
  care: CareInstructions;
  price: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  isAvailable: boolean;
};

export const categories = [
  { id: 'all', label: 'Todos los Ejemplares', icon: '🌿' },
  { id: 'portulacaria', label: 'Portulacaria afra (5)', icon: '🪴' },
  { id: 'crassula', label: 'Crassula ovata (1)', icon: '🌱' },
] as const;

export const speciesProfiles = [
  {
    id: 'portulacaria',
    commonName: 'Jade Enano / Arbusto Elefante',
    scientificName: 'Portulacaria afra',
    family: 'Didiereaceae',
    origin: 'Sudáfrica',
    summary:
      'Bonsái suculento de ramas rojizas flexibles y diminutas hojas redondas carnosas verde esmeralda. Posee una extraordinaria ramificación para modelado fino en estilos Sokan, Moyogi y Neagari. Muy tolerante a podas drásticas y de rápida recuperación.',
    differentiatingTraits:
      'Hojas pequeñas (1 a 1.5 cm), tallos rojizos que se tornan cobrizos, ramificación muy densa y porte compacto.',
    care: {
      watering:
        'Riego moderado: humedecer bien el sustrato y permitir que seque un 80% antes de regar nuevamente. En Santa Cruz (calor húmedo) regar cada 4 a 6 días; en La Paz y Cochabamba cada 7 a 10 días.',
      sunlight:
        'Sol directo matutino o luz filtrada intensa. Con buena exposición solar, los bordes de sus hojas adoptan un elegante tono rojizo y la copa se mantiene compacta.',
      location:
        'Interiores muy luminosos cerca de ventanales o balcones y galerías exteriores protegidas.',
      pruning:
        'Pinzado regular con las yemas de los dedos en los brotes tiernos superiores. Estimula brotes dobles en cada nudo para una silueta tupida.',
      substrate:
        '70% mineral drenante (grano volcánico, pómice o arena gruesa) + 30% tierra fértil con perlita. Exige drenaje inmediato sin encharcamientos.',
      temperature:
        '10°C a 35°C. Resiste altas temperaturas pero debe protegerse de heladas nocturnas bajo 5°C.',
      boliviaTips:
        'En Santa Cruz prospera con rapidez durante todo el año. En La Paz y El Alto mantener dentro de casa cerca de ventanas protegidas del frío nocturno.',
      commonMistakes:
        'Regar con el sustrato todavía mojado o usar platos con agua estancada. La Portulacaria resiste mejor la falta de agua que el encharcamiento.',
      wateringFrequency: 'Media (2-3 veces/semana)' as const,
      sunlightType: 'Semisombra / Sol Mañanero' as const,
    },
  },
  {
    id: 'crassula',
    commonName: 'Árbol de Jade Tradicional',
    scientificName: 'Crassula ovata',
    family: 'Crassulaceae',
    origin: 'Sudáfrica y Mozambique',
    summary:
      'El clásico y venerable Árbol de Jade. Se distingue por su tronco robusto y leñoso de corteza grisácea y sus hojas ovaladas de gran porte (3 a 5 cm) que actúan como poderosos depósitos naturales de agua. En el Feng Shui es el símbolo máximo de estabilidad y fortuna.',
    differentiatingTraits:
      'Hojas ovales grandes y gruesas (3 a 5 cm), tronco leñoso grueso y sólido, crecimiento más pausado y porte arborescente escultórico.',
    care: {
      watering:
        'Riego bajo y espaciado: regar únicamente cuando el sustrato esté completamente seco (cada 10 a 15 días en promedio). Sus hojas gruesas almacenan agua por semanas.',
      sunlight:
        'Luz brillante indirecta o sol suave de la mañana. No colocar a sol abrasador de mediodía de golpe para evitar quemaduras foliares.',
      location:
        'Espacios interiores con excelente circulación de aire, salas de estar luminosas o mostradores ejecutivos.',
      pruning:
        'Poda selectiva con tijeras afiladas y desinfectadas cortando sobre el nudo. Dejar cicatrizar el corte al aire libre sin regar por 48 horas.',
      substrate:
        '80% mineral (pómice o grava fina) + 20% materia orgánica enriquecida. Necesita secar rápidamente para resguardar su tronco leñoso.',
      temperature:
        '12°C a 32°C. Muy sensible a temperaturas bajas sostenidas por debajo de 8°C.',
      boliviaTips:
        'Ideal para interiores en Cochabamba, Sucre y La Paz por el clima seco. En Santa Cruz requiere sustrato ultradrenante para evitar que la humedad ambiental sature la raíz.',
      commonMistakes:
        'Exceso de riego: es la causa #1 de pérdida de Crassula ovata. Si el tronco se siente blando, suspender el riego de inmediato y aumentar ventilación.',
      wateringFrequency: 'Baja (1 vez/semana)' as const,
      sunlightType: 'Luz Indirecta Brillante' as const,
    },
  },
];

export const bonsais: Bonsai[] = [
  {
    id: 1,
    name: 'Portulacaria afra — Doble Tronco (Sokan)',
    scientificName: 'Portulacaria afra',
    speciesType: 'portulacaria',
    category: 'portulacaria',
    difficulty: 'Fácil',
    estimatedAge: '8 años',
    height: '28 cm',
    potType: 'Bandeja ovalada de gres esmaltado beige arena',
    description:
      'Espléndido bonsái suculento de Jade Enano modelado en estilo doble tronco (Sokan). Tronco bifurcado con raíces expuestas vigorosas y copa simétrica de pequeñas hojas carnosas verde esmeralda con ribetes cobrizos.',
    care: speciesProfiles[0].care,
    price: 180,
    imageUrl: '/plant1.png',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Más Vendido',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Portulacaria afra — Bosque Compacto (Kabudachi)',
    scientificName: 'Portulacaria afra',
    speciesType: 'portulacaria',
    category: 'portulacaria',
    difficulty: 'Fácil',
    estimatedAge: '10 años',
    height: '32 cm',
    potType: 'Maceta rectangular esmaltada en negro azabache',
    description:
      'Ejemplar multicaule con múltiples troncos carnosos que emergen armónicamente de una misma base, creando la ilusión de un bosque en miniatura. Ramificación densa y follaje compacto de gran vigor.',
    care: speciesProfiles[0].care,
    price: 260,
    imageUrl: '/plant2.png',
    rating: 5.0,
    reviewsCount: 24,
    badge: 'Pieza de Autor',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Portulacaria afra — Erguido Informal (Moyogi)',
    scientificName: 'Portulacaria afra',
    speciesType: 'portulacaria',
    category: 'portulacaria',
    difficulty: 'Fácil',
    estimatedAge: '9 años',
    height: '30 cm',
    potType: 'Maceta de cerámica azul cobalto esmaltada',
    description:
      'Silueta estilizada con suaves curvas naturales en su tronco principal y ramaje escalonado que genera profundidad visual. Ideal para centros de mesa o escritorios luminosos.',
    care: speciesProfiles[0].care,
    price: 210,
    imageUrl: '/plant3.png',
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Recomendado',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Portulacaria afra — Copa Abundante (Sokan)',
    scientificName: 'Portulacaria afra',
    speciesType: 'portulacaria',
    category: 'portulacaria',
    difficulty: 'Fácil',
    estimatedAge: '7 años',
    height: '26 cm',
    potType: 'Bandeja baja de gres sellado en tono arena',
    description:
      'Bonsái de la abundancia con nebari expuesto sobre el sustrato drenante. Ramas jóvenes flexibles de tonalidad rojiza con brotes continuos muy fáciles de pinzar y modelar.',
    care: speciesProfiles[0].care,
    price: 150,
    imageUrl: '/plant4.png',
    rating: 4.7,
    reviewsCount: 15,
    badge: 'Abundancia',
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Portulacaria afra — Inclinado Dinámico (Shakan)',
    scientificName: 'Portulacaria afra',
    speciesType: 'portulacaria',
    category: 'portulacaria',
    difficulty: 'Fácil',
    estimatedAge: '8 años',
    height: '24 cm',
    potType: 'Maceta hexagonal esmaltada en verde bosque brillante',
    description:
      'Diseño asimétrico inspirado en árboles que crecen en laderas azotadas por el viento. Su tronco inclinado equilibra armoniosamente una copa compacta orientada hacia la luz.',
    care: speciesProfiles[0].care,
    price: 195,
    imageUrl: '/plant5.png',
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Diseño Zen',
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Crassula ovata — Árbol de Jade Tradicional',
    scientificName: 'Crassula ovata',
    speciesType: 'crassula',
    category: 'crassula',
    difficulty: 'Fácil',
    estimatedAge: '12 años',
    height: '35 cm',
    potType: 'Bandeja circular artesanal de terracota mate',
    description:
      'El auténtico Árbol de Jade (Crassula ovata). Tronco grueso y macizo de corteza grisácea leñosa con hojas carnosas ovales de gran porte (3 a 5 cm) que almacenan agua de forma natural. Simboliza la buena fortuna y la longevidad.',
    care: speciesProfiles[1].care,
    price: 280,
    imageUrl: '/plant6.png',
    rating: 5.0,
    reviewsCount: 11,
    badge: 'Jade Clásico',
    isAvailable: true,
  },
];
