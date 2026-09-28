// plants.ts

export type CareInstructions = {
  watering: string;
  sunlight: string;
  location: string;
  pruning: string;
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
      watering: '1 a 2 veces por semana. Dejar secar ligeramente la capa superior del sustrato antes de volver a humedecer.',
      sunlight: 'Luz brillante indirecta. Tolera semisombra en interiores iluminados.',
      location: 'Ideal para escritorios de oficina o salas de estar cerca de ventanales.',
      pruning: 'Pinzado suave en primavera y verano para mantener la silueta redondeada.',
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
      watering: 'Riego generoso cuando la tierra empiece a secar. Pulverizar follaje por las tardes.',
      sunlight: 'Exterior a pleno sol (mínimo 4-5 horas de luz solar directa diaria).',
      location: 'Jardines, terrazas abiertas, balcones bien ventilados y soleados.',
      pruning: 'Pinzado de brotes verdes con los dedos entre primavera y otoño.',
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
      watering: 'Riego abundante durante época de crecimiento activo; reducir en invierno.',
      sunlight: 'Muy adaptable: pleno sol en invierno y semisombra en los veranos intensos.',
      location: 'Patios, galerías o ventanas exteriores con buena circulación de aire.',
      pruning: 'Poda estructural a finales de invierno antes de que broten nuevas yemas.',
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
      watering: 'Mantener humedad constante y ligera sin encharcar. Evitar sequedad total.',
      sunlight: 'Mucha luz tamizada. Proteger de los rayos abrasadores del mediodía.',
      location: 'Interior cálido protegido de corrientes de aire frío o aire acondicionado directo.',
      pruning: 'Recortar nuevos brotes a dos hojas cuando hayan desarrollado 6 a 8 hojas.',
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
      watering: 'Riego moderado y espaciado. Regar únicamente cuando el sustrato esté seco.',
      sunlight: 'Tolera desde sol directo hasta interiores muy bien iluminados.',
      location: 'Entradas de residencias, mostradores comerciales o mesas de café.',
      pruning: 'Fácil modelado y pinzado manual durante todo el año.',
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
      watering: 'Riego profundo y drenaje rápido con sustrato volcánico (Akadama + Kiryu).',
      sunlight: 'Pleno sol exterior ininterrumpido para acortar la longitud de las agujas.',
      location: 'Podio central de jardín exterior, patio de honor o terraza abierta.',
      pruning: 'Técnica de descandelado (Mekiri) en verano y selección de acículas en otoño.',
    },
    price: 380,
    imageUrl: '/plant6.png',
    rating: 5.0,
    reviewsCount: 11,
    badge: 'Colección Maestra',
    isAvailable: true,
  },
];
