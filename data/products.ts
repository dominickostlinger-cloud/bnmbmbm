// products.ts
export interface ProductImage {
  src: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: ProductImage[];
  sizes: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'h001',
    name: 'Sp5der Hoodie',
    price: 75.0,
    description:
      'This black hoodie features a bold white spiderweb graphic with playful “spider” text across the chest. Star accents run down both sleeves, giving it a stylish, edgy streetwear vibe. Crafted for comfort, it’s perfect for casual layering or standout looks.',
    category: 'Hoodies',
    images: [
      {
        src: 'images/open1621447677-1234478995-67e2000001985c54ec040a23b491_1200_1200.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 't001',
    name: 'Louis Vuitton T-shirt',
    price: 60.0,
    description:
      'This white Louis Vuitton T-shirt features playful sky-blue floral and geometric motifs scattered across the front. Its clean crewneck design and soft fabric make it a versatile, standout piece for casual or elevated outfits.',
    category: 'T-Shirts',
    images: [
      {
        src: 'images/open1659223605-1234478995-215800000195fbcd97cf0aa0834c_1080_1080.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'p001',
    name: 'Sp5der Jogger',
    price: 60.0,
    description:
      'These black joggers feature bold white lettering at the waist and a cascade of small star prints down each thigh. With an elastic waistband and cuffs, they blend comfort with a playful, streetwear-inspired look.',
    category: 'Pants',
    images: [
      {
        src: 'images/open1621447677-1234478995-67e2000001985c54ec040a23b491_1200_1200.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 'a001',
    name: 'Gucci Cap',
    price: 40.0,
    description:
      'This is a Gucci pink monogram baseball cap, featuring the brand’s signature GG pattern in a tonal pink design. Crafted with a structured six-panel construction and a curved brim, it combines luxury branding with casual streetwear style. A versatile accessory, perfect for adding a pop of color and elegance to everyday outfits.',
    category: 'Accessories',
    images: [
      {
        src: 'images/open1659223605-1234478995-777d0000019330621f620a8133b5_1080_1080.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['One Size'],
    featured: true,
  },
  {
    id: 'h002',
    name: 'Louis Vuitton varsity jacket',
    price: 125.0,
    description:
      'This is a Louis Vuitton varsity jacket in a beige and white colorway, adorned with bold embroidered patches and playful graphic motifs. Featuring oversized "LV" lettering, cartoon-inspired figures, and signature Louis Vuitton branding details, the jacket blends luxury craftsmanship with a youthful streetwear edge. Finished with striped ribbed trims and snap-button closure, it’s a standout piece for a modern, statement-making wardrobe.',
    category: 'Hoodies',
    images: [
      {
        src: 'images/open1659223605-1234478995-70e00000019502763b010a8133b5_1080_1080.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 't002',
    name: 'Louis Vuitton black graphic t-shirt',
    price: 45.0,
    description:
      'This is a Louis Vuitton black graphic t-shirt, featuring the iconic LV monogram in bold white, overlaid with a striking blue floral-inspired artistic design. Crafted from premium cotton, it combines luxury branding with a modern, artistic twist. The relaxed fit and statement graphic make it a versatile piece, perfect for elevating casual outfits with a touch of sophistication and style.',
    category: 'T-Shirts',
    images: [
      {
        src: 'images/open1659223605-1234478995-757b00000195e7664eb70aa08290_1080_1080.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'p002',
    name: 'Louis Vuitton belt',
    price: 28.0,
    description:
      'This is a Louis Vuitton belt in classic black Monogram canvas, featuring the brand’s signature LV motif. The belt is finished with a bold gold-tone LV initials buckle, adding a touch of elegance and luxury. A versatile accessory, it pairs perfectly with both casual and formal outfits, making it a timeless statement piece in any wardrobe.',
    category: 'Pants',
    images: [
      {
        src: 'images/open1659223605-1234478995-37c80000019362ca6c340aa08290_2560_2560.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'a002',
    name: 'Louis Vuitton denim jeans',
    price: 65.0,
    description:
      'This is a pair of Louis Vuitton gradient monogram denim jeans in black and grey. The design features a fade effect, transitioning from solid black at the legs to the iconic LV monogram pattern around the upper section and back pockets. Crafted from premium denim, these jeans blend luxury branding with a modern streetwear edge, making them a standout piece for both casual and upscale outfits.',
    category: 'Accessories',
    images: [
      {
        src: 'images/pcitem1906807423-0a060000019841dd7b1d0a210256_1280_1707.jpg',
        width: 800,
        height: 1000,
      },
    ],
    sizes: ['One Size'],
  },
];
