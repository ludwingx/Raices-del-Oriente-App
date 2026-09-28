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
  category: 'interior' | 'exterior' | 'coleccion';
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
  { id: 'all', label: 'Todos los Bonsáis', icon: '🌿' },
  { id: 'interior', label: 'Bonsáis de Interior', icon: '🏡' },
  { id: 'exterior', label: 'Bonsáis de Exterior', icon: '☀️' },
  { id: 'coleccion', label: 'Piezas de Colección', icon: '💎' },
] as const;

export const bonsais: Bonsai[] = [
  {
    id: 1,
    name: 'Ficus Retusa Ginseng',
    scientificName: 'Ficus microcarpa var. nitida',
    category: 'interior',
    difficulty: 'Fácil',
    estimatedAge: '7 años',
    height: '28 cm',
    potType: 'Cerámica esmaltada verde jade',
    description: 'Impresionante bonsái de raíces aéreas bulbosas y follaje perenne de verde lustroso. Muy adaptable al interior del hogar y resistente a periodos de olvido de riego.',
    care: {
      watering: '1 a 2 veces por semana. Dejar secar ligeramente la capa superior del sustrato antes de volver a humedecer. En verano, pulverizar hojas suavemente.',
      sunlight: 'Luz brillante indirecta. Tolera semisombra en interiores bien iluminados. Evitar sol abrasador directo al mediodía.',
      location: 'Ideal para escritorios de oficina, salas de estar luminosas o muebles cerca de ventanales.',
      pruning: 'Pinzado suave de brotes nuevos en primavera y verano para mantener la silueta redondeada.',
      substrate: '70% akadama o grano volcánico fino + 30% tierra negra con humus de lombriz para retener nutrientes.',
      temperature: '18°C a 30°C. Proteger de corrientes de aire frío por debajo de 12°C.',
      boliviaTips: 'En Santa Cruz se adapta con facilidad al calor húmedo. En La Paz o Cochabamba, mantener siempre dentro de casa protegido de las heladas nocturnas.',
      commonMistakes: 'Cambiarlo de lugar continuamente (el Ficus tira hojas cuando se le mueve de sitio) o encharcar el plato de drenaje.',
      wateringFrequency: 'Media (2-3 veces/semana)',
      sunlightType: 'Luz Indirecta Brillante',
    },
    price: 180,
    imageUrl: '/plant1.png',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Más Vendido',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Enebro Rastrero — Shimpaku',
    scientificName: 'Juniperus procumbens "Nana"',
    category: 'exterior',
    difficulty: 'Intermedio',
    estimatedAge: '11 años',
    height: '35 cm',
    potType: 'Gres japonés sin esmaltar (Tokoname style)',
    description: 'Bonsái clásico de conífera con ramas esculpidas en estilo cascada y madera muerta natural (Jin). Simboliza la longevidad, la tenacidad y la elegancia perenne.',
    care: {
      watering: 'Riego generoso cuando la superficie del sustrato esté seca. Pulverizar follaje por las tardes para remover el polvo.',
      sunlight: 'Exterior a pleno sol (mínimo 4 a 5 horas de luz solar directa diaria). Indispensable para mantener el color verde azulado vivo.',
      location: 'Jardines, terrazas abiertas, balcones bien ventilados y soleados. NUNCA en interiores cerrados sin luz solar.',
      pruning: 'Pinzado de brotes con los dedos en primavera y verano; no cortar acículas con tijera para evitar que las puntas se oxiden de color marrón.',
      substrate: '80% grano volcánico (Kiryu / Akadama / pómice) + 20% turba. Requiere drenaje ultrarrápido.',
      temperature: 'Resistente desde -5°C hasta 35°C. Soporta vientos y cambios térmicos.',
      boliviaTips: 'En La Paz y Cochabamba prospera de forma extraordinaria con la radiación solar andina. En Santa Cruz, colocar donde reciba buena brisa y sol matutino.',
      commonMistakes: 'Colocarlo en interiores creyendo que es una planta de oficina. Los enebros mueren por asfixia y falta de sol si están encerrados.',
      wateringFrequency: 'Media (2-3 veces/semana)',
      sunlightType: 'Pleno Sol Exterior',
    },
    price: 260,
    imageUrl: '/plant2.png',
    rating: 5.0,
    reviewsCount: 24,
    badge: 'Pieza de Autor',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Olmo Chino en Roca',
    scientificName: 'Ulmus parvifolia',
    category: 'exterior',
    difficulty: 'Fácil',
    estimatedAge: '9 años',
    height: '30 cm',
    potType: 'Bandeja oval de terracota sellada',
    description: 'Bonsái de tronco vigoroso con corteza rugosa y diminutas hojas dentadas de gran ramificación. Ideal para quienes inician en el arte y buscan rápido crecimiento.',
    care: {
      watering: 'Riego abundante durante época de crecimiento activo (primavera/verano); reducir en invierno cuando baje la temperatura.',
      sunlight: 'Muy adaptable: pleno sol en invierno y primavera; agradecerá semisombra ligera en los días más calurosos del verano.',
      location: 'Patios, galerías exteriores, terrazas o ventanas orientadas al este con circulación constante de aire fresco.',
      pruning: 'Poda estructural a finales de invierno antes de la brotación. Durante el año, recortar brotes largos a dos hojas.',
      substrate: '60% sustrato mineral drenante + 40% materia orgánica enriquecida.',
      temperature: '5°C a 32°C. Es caducifolio o semicaducifolio según el frío invernal.',
      boliviaTips: 'Ideal para el clima templado de los valles (Cochabamba, Tarija, Sucre). En Santa Cruz mantendrá sus hojas todo el año.',
      commonMistakes: 'Dejar que el sustrato se seque por completo durante días calurosos; las hojas se secarán y caerán rápidamente.',
      wateringFrequency: 'Alta (Diario en calor)',
      sunlightType: 'Semisombra / Sol Mañanero',
    },
    price: 210,
    imageUrl: '/plant3.png',
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Recomendado',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Árbol de Fukien — Carmona',
    scientificName: 'Carmona microphylla (Ehretia buxifolia)',
    category: 'interior',
    difficulty: 'Intermedio',
    estimatedAge: '6 años',
    height: '24 cm',
    potType: 'Cerámica blanca marfil con plato de drenaje',
    description: 'Elegante bonsái tropical de corteza agrietada grisácea con pequeñas flores blancas estrelladas que florecen en primavera y pequeños frutos rojizos.',
    care: {
      watering: 'Mantener humedad constante y ligera sin encharcar. Sensible tanto a la sequedad extrema como al exceso de agua en las raíces.',
      sunlight: 'Mucha luz tamizada o sol suave de la mañana. Proteger de los rayos abrasadores del mediodía que queman sus pétalos.',
      location: 'Interior cálido y húmedo. Colocar sobre una bandeja con gravilla húmeda para incrementar la humedad ambiental.',
      pruning: 'Recortar nuevos brotes a dos hojas cuando hayan desarrollado 6 a 8 hojas para mantener la copa compacta.',
      substrate: 'Mezcla equilibrada: 50% akadama + 25% humus + 25% grava volcánica fina.',
      temperature: '15°C a 28°C. Muy sensible a temperaturas bajo 12°C.',
      boliviaTips: 'En Santa Cruz adora la humedad ambiental. En La Paz debe mantenerse dentro de casa cerca de luz, lejos de corrientes frías.',
      commonMistakes: 'Ubicarlo cerca de salidas directas de aire acondicionado o calefactores; el aire seco hace caer sus flores y brotes.',
      wateringFrequency: 'Media (2-3 veces/semana)',
      sunlightType: 'Luz Indirecta Brillante',
    },
    price: 150,
    imageUrl: '/plant4.png',
    rating: 4.7,
    reviewsCount: 15,
    badge: 'Con Floración',
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Jade Enano — Árbol de la Abundancia',
    scientificName: 'Portulacaria afra',
    category: 'interior',
    difficulty: 'Fácil',
    estimatedAge: '8 años',
    height: '26 cm',
    potType: 'Maceta artesanal de arcilla cocida oscura',
    description: 'Bonsái suculento de tronco carnoso y hojas redondas esmeralda. En la tradición del Feng Shui atrae la prosperidad y la buena energía en hogares y negocios.',
    care: {
      watering: 'Riego moderado y espaciado. Dejar que la tierra se seque completamente entre riegos. En invierno, regar cada 10 a 15 días.',
      sunlight: 'Tolera desde sol pleno directo hasta interiores muy bien iluminados. Cuanta más luz reciba, más compactas crecerán sus hojas.',
      location: 'Entradas de residencias, mostradores comerciales, escritorios o balcones soleados.',
      pruning: 'Muy fácil modelado: se poda pinzando con los dedos los pares de hojas superiores para ramificar los tallos carnosos.',
      substrate: 'Sustrato para suculentas: 70% grava/arena gruesa/pómice + 30% tierra vegetal para drenaje inmediato.',
      temperature: '10°C a 35°C. Tolera calor extremo pero no soporta heladas.',
      boliviaTips: 'Es el bonsái más resistente para principiantes en cualquier ciudad de Bolivia. Si viajas por semanas, sobrevivirá sin problemas.',
      commonMistakes: 'El exceso de riego (regar cuando la tierra aún está húmeda pudre su tallo carnoso). Menos agua es más salud para el Jade.',
      wateringFrequency: 'Baja (1 vez/semana)',
      sunlightType: 'Semisombra / Sol Mañanero',
    },
    price: 195,
    imageUrl: '/plant5.png',
    rating: 4.9,
    reviewsCount: 42,
    badge: 'Ideal Principiantes',
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Pino Negro Japonés — Kuromatsu',
    scientificName: 'Pinus thunbergii',
    category: 'coleccion',
    difficulty: 'Avanzado',
    estimatedAge: '16 años',
    height: '42 cm',
    potType: 'Contenedor tradicional de cerámica Yixing',
    description: 'El rey indiscutible de los bonsáis japoneses. Tronco imponente con corteza escamosa y agujas rígidas de verde profundo. Una reliquia viva de alto prestigio.',
    care: {
      watering: 'Riego profundo cuando el sustrato seque. El pino necesita periodos secos entre riegos para que las raíces respiren.',
      sunlight: 'Pleno sol exterior ininterrumpido (6+ horas diarias). Sin sol pleno, las acículas pierden fuerza y crecen desproporcionadas.',
      location: 'Podio exterior, pedestal central de jardín, patio de honor o terraza soleada.',
      pruning: 'Requiere técnicas avanzadas: descandelado (Mekiri) en verano para inducir segunda brotación y entresacado de acículas en otoño.',
      substrate: '90% grano volcánico (Kiryu + Akadama dura) con prácticamente nula materia orgánica para drenaje instantáneo.',
      temperature: '-10°C a 35°C. Necesita sentir las estaciones del año para su ciclo biológico.',
      boliviaTips: 'En ciudades de altura (La Paz, El Alto, Oruro, Potosí) responde magníficamente a la intensa radiación ultravioleta. En Santa Cruz requiere sustrato ultradrenante.',
      commonMistakes: 'Intentar tenerlo dentro de una habitación. El pino negro es un árbol puramente de exterior y morirá en interiores en pocas semanas.',
      wateringFrequency: 'Media (2-3 veces/semana)',
      sunlightType: 'Pleno Sol Exterior',
    },
    price: 380,
    imageUrl: '/plant6.png',
    rating: 5.0,
    reviewsCount: 11,
    badge: 'Colección Maestra',
    isAvailable: true,
  },
];
