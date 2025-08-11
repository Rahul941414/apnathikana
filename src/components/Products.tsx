
import React, { useMemo, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'bread' | 'pastries' | 'cakes' | 'cookies';
  description: string;
  badge?: string;
};

export default function Products({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  const [activeCategory, setActiveCategory] = useState<'all' | Product['category']>('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'bread', name: 'Fresh Bread' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'cookies', name: 'Cookies' },
  ] as const;

  // 20 unique items per category (names, images, prices all different)
  const NAMES = {
    bread: [
      'Sourdough Classic','Garlic Bread Loaf','French Baguette','Whole Wheat Loaf','Multigrain Seeded Bread',
      'Focaccia Rosemary','Ciabatta Rustic','Brioche Loaf','Rye Caraway Bread','Olive & Herb Loaf',
      'Sesame Sandwich Bread','Honey Oat Loaf','Potato Bread','Pumpernickel','Milk Bread',
      'Cheese Pull-Apart','Sun-dried Tomato Bread','Onion Roll Loaf','Pretzel Bread','Bagel Assortment'
    ],
    pastries: [
      'Butter Croissant','Chocolate Croissant','Almond Croissant','Blueberry Muffin','Banana Walnut Muffin',
      'Apple Cinnamon Danish','Cheese Danish','Strawberry Tart','Lemon Tart','Cinnamon Roll',
      'Pain au Raisin','Napoleon Slice','Eclair Chocolate','Vanilla Eclair','Puff Veg Patty',
      'Baklava Square','Fruit Turnover','Palmiers','Portuguese Pastel','Cream Puff'
    ],
    cakes: [
      'Red Velvet Cake','Black Forest Cake','Belgian Chocolate Cake','Vanilla Bean Cake','Blueberry Cheesecake',
      'New York Cheesecake','Tiramisu Cake','Pineapple Gateau','Butterscotch Delight','Fruit & Nut Cake',
      'Opera Cake','Hazelnut Praline Cake','Ferrero Rocher Cake','Rasmalai Fusion Cake','Gulab Jamun Cake',
      'Mango Mousse Cake','Strawberry Shortcake','Carrot Walnut Cake','Coffee Mocha Cake','White Forest Cake'
    ],
    cookies: [
      'Choco Chip Cookies','Double Chocolate','Oatmeal Raisin','Peanut Butter Cookies','Red Velvet Cookies',
      'Shortbread Butter','Almond Crunch','Pistachio Cookies','Coconut Macaroons','Ginger Molasses',
      'Snickerdoodles','White Choc Cranberry','Dark Choc Sea Salt','Nutella Lava Cookie','Brownie Cookie',
      'Salted Caramel Cookie','Biscoff Cookie','Sprinkle Funfetti','Lemon Zest Cookie','Espresso Cookie'
    ]
  } as const;

  const IMGS = {
    bread: [
      'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2092064/pexels-photo-2092064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2232/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2435/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3807310/pexels-photo-3807310.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6287521/pexels-photo-6287521.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/10361087/pexels-photo-10361087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1359381/pexels-photo-1359381.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1596881/pexels-photo-1596881.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6287528/pexels-photo-6287528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461426/pexels-photo-461426.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6287524/pexels-photo-6287524.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    pastries: [
      'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/14105/pexels-photo-14105.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/875367/pexels-photo-875367.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2232/bread-food-healthy-breakfast.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/533326/pexels-photo-533326.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/185801/pexels-photo-185801.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/237717/pexels-photo-237717.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/957393/dessert-cake-sweet-cupcake-957393.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    cakes: [
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/811136/pexels-photo-811136.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/914241/pexels-photo-914241.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/398364/pexels-photo-398364.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/323652/pexels-photo-323652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/357577/pexels-photo-357577.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/236781/pexels-photo-236781.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    cookies: [
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230326/pexels-photo-230326.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2141657/pexels-photo-2141657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/14123/pexels-photo-14123.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/923182/pexels-photo-923182.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/862911/pexels-photo-862911.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/45202/cookies-bake-christmas-xmas-45202.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3542529/pexels-photo-3542529.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3642/sweet-cookies-dessert-bake.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4109997/pexels-photo-4109997.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  } as const;

  const make = (category: Product['category']) => {
    return NAMES[category].map((name, idx) => {
      const idPrefix = { bread: 1, pastries: 2, cakes: 3, cookies: 4 }[category];
      const id = Number(`${idPrefix}${(idx+1).toString().padStart(2,'0')}`);
      const base = { bread: 80, pastries: 90, cakes: 450, cookies: 60 }[category];
      const price = base + idx * (category === 'cakes' ? 20 : 5);
      const image = IMGS[category][idx % IMGS[category].length];
      const badge = idx % 9 === 0 ? 'Bestseller' : idx % 7 === 0 ? 'Popular' : idx % 5 === 0 ? 'New' : undefined;
      return {
        id,
        name,
        category,
        price,
        image,
        description: `${name} — premium ${category} from Apna Thikana.`,
        badge
      } as Product;
    });
  };

  const products: Product[] = useMemo(() => [
    ...make('bread'),
    ...make('pastries'),
    ...make('cakes'),
    ...make('cookies'),
  ], []);

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Fresh bakes, big smiles.</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore 80+ unique items — breads, pastries, cakes and cookies — crafted daily at <span className="font-semibold">Apna Thikana</span>.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <button onClick={() => setActiveCategory('all')} className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90">Shop All</button>
            <a href="#catalog" className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">Browse Catalog</a>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full border ${activeCategory === cat.id ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border shadow hover:shadow-lg transition">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
