// bonsaiData.ts
export type Bonsai = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const bonsais: Bonsai[] = [
  { id: 1, name: 'Bonsai 1', description: 'Este es un bonsai muy bonito.', price: 130, imageUrl: '/plant1.png' },
  { id: 2, name: 'Bonsai 2', description: 'Este es un bonsai muy bonito.', price: 200, imageUrl: '/plant2.png' },
  { id: 3, name: 'Bonsai 3', description: 'Este es un otrosai muy bonito.', price: 160, imageUrl: '/plant3.png' },
  { id: 4, name: 'Bonsai 4', description: 'Este es un bonsai muy bonito.', price: 120, imageUrl: '/plant4.png' },
  { id: 5, name: 'Bonsai 5', description: 'Este es un otrosai muy bonito.', price: 220, imageUrl: '/plant5.png' },
  { id: 6, name: 'Bonsai 6', description: 'Este es un bonsai muy bonito.', price: 270, imageUrl: '/plant6.png' },
];
