export interface Product {
  id: string;
  name: {
    uz: string;
    en: string;
    ru: string;
  };
  price: number;
  sizes: string[];
  colors: string[];
  material: {
    uz: string;
    en: string;
    ru: string;
  };
  description: {
    uz: string;
    en: string;
    ru: string;
  };
  features: {
    uz: string[];
    en: string[];
    ru: string[];
  };
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: {
      uz: 'Iroqi uslubda tikilgan milliy chopon',
      en: 'Iraqi-style national robe',
      ru: 'Национальный халат в иракском стиле',
    },
    price: 3500,
    sizes: ['50', '52', '54', '56'],
    colors: ['bordo', 'koʻk', 'toʻq binafsha'],
    material: {
      uz: 'Tabiiy ipak, shoyi astar',
      en: 'Natural silk, satin lining',
      ru: 'Натуральный шелк, атласная подкладка',
    },
    description: {
      uz: 'Iraqdagi milliy tikuv ustaxonalari bilan hamkorlikda yaratilgan noyob milliy chopon. Har bir naqsh qoʻl bilan tikilgan, oltin iplar ishlatilgan.',
      en: 'Unique national robe created in collaboration with Iraqi traditional sewing workshops. Each pattern is hand-stitched using gold threads.',
      ru: 'Уникальный национальный халат, созданный в сотрудничестве с иракскими традиционными швейными мастерскими. Каждый узор прошит вручную золотыми нитями.',
    },
    features: {
      uz: [
        '100% tabiiy ipak mato',
        'Qoʻl bilan gazlangan naqshlar',
        'Oltin rangdagi ip ishlatilgan',
        'Yuqori sifatli shoyi astar',
        'Anʼanaviy Iroq dizayni',
        'Gipoalergik materiallar',
      ],
      en: [
        '100% natural silk fabric',
        'Hand-embroidered patterns',
        'Gold thread used',
        'High-quality satin lining',
        'Traditional Iraqi design',
        'Hypoallergenic materials',
      ],
      ru: [
        '100% натуральная шелковая ткань',
        'Узоры, вышитые вручную',
        'Использованы золотые нити',
        'Высококачественная атласная подкладка',
        'Традиционный иракский дизайн',
        'Гипоаллергенные материалы',
      ],
    },
    image: '/products/chopon-1.jpg',
  },
];
