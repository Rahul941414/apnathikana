import React, { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "bread" | "pastries" | "cakes" | "cookies";
  description: string;
  badge?: string;
};

export default function Products({
  onAddToCart,
}: {
  onAddToCart: (p: Product) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<
    "all" | Product["category"]
  >("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "bread", name: "Fresh Bread" },
    { id: "pastries", name: "Pastries" },
    { id: "cakes", name: "Cakes" },
    { id: "cookies", name: "Cookies" },
  ] as const;

  const NAMES = {
    bread: [
      "Ladi Pav",
      "Butter Naan",
      "Tandoori Roti",
      "Amritsari Kulcha",
      "Laccha Paratha",
      "Bhatura",
      "Rumali Roti",
      "Missi Roti",
      "Maska Bun",
      "Masala Bun",
    ],
    pastries: [
      "Veg Puff",
      "Paneer Puff",
      "Corn & Cheese Puff",
      "Mushroom Puff",
      "Cream Roll",
      "Pineapple Pastry",
      "Black Forest Pastry",
      "Butterscotch Pastry",
      "Chocolate Truffle Pastry",
      "Strawberry Pastry",
    ],
    cakes: [
      "Rasmalai Fusion Cake",
      "Gulab Jamun Cake",
      "Kesar Pista Cake",
      "Mango Mousse Cake",
      "Fresh Fruit Cake",
      "Butterscotch Cake",
      "Black Forest Cake",
      "Chocolate Truffle Cake",
      "Red Velvet Cake",
      "Rabri Malai Cake",
    ],
    cookies: [
      "Jeera Biscuit",
      "Nankhatai",
      "Coconut Cookie",
      "Atta Biscuit",
      "Ragi Cookie",
      "Elaichi Butter Biscuit",
      "Badam Pista Cookie",
      "Kesar Pista Biscuit",
      "Ajwain Biscuit",
      "Jaggery Oats Cookie",
    ],
  } as const;

  const IMGS = {
    bread: [
      "https://tse4.mm.bing.net/th/id/OIP.F8oB2dumma_dkiVWSqzU9AHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Ladi Pav
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=800", // Butter Naan
      "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-1014x1536.jpg", // Tandoori Roti
      "https://images.pexels.com/photos/7242190/pexels-photo-7242190.jpeg?auto=compress&cs=tinysrgb&w=800", // Kulcha
      "https://th.bing.com/th/id/OIP.MH0itucg4zfAZTqL25uYYAHaHa?w=189&h=189&c=7&r=0&o=7&pid=1.7&rm=3", // Paratha
      "https://images.pexels.com/photos/7242197/pexels-photo-7242197.jpeg?auto=compress&cs=tinysrgb&w=800", // Bhatura
      "https://1.bp.blogspot.com/-J6e9JQwmMZ4/YIHyTl6tcZI/AAAAAAAASHg/SzjQbAWaeJkHTYsLi3bcwYH561hXkKKyACLcBGAsYHQ/s2000/IMG_20210408_211630_compress18.jpg", // Rumali Roti
      "https://tse2.mm.bing.net/th/id/OIP.thSGhScdJO2jGsq4SarNawHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Missi Roti
      "https://images.herzindagi.info/image/2022/Feb/bun-maska-recipe.jpg", // Maska Bun
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800", // Masala Bun
    ],
    pastries: [
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800", // Veg Puff
      "https://aromaticessence.co/wp-content/uploads/2022/08/paneer_puff_featured.jpg", // Paneer Puff
      "https://rasamalaysia.com/wp-content/uploads/2023/10/extremely-cheesy-corn-casserole-step1-750x500.jpg", // Corn & Cheese
      "https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=800", // Mushroom
      "https://tse1.mm.bing.net/th/id/OIP.dCgOIfNNfV3-0UDUdvxJ9gAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Cream Roll
      "https://images.pexels.com/photos/914241/pexels-photo-914241.jpeg?auto=compress&cs=tinysrgb&w=800", // Pineapple
      "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800", // Black Forest
      "https://tse4.mm.bing.net/th/id/OIP.8YFiXHos8sphlGOhTpdHugHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Butterscotch
      "https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=800", // Choco Truffle
      "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/72506_butterscotch-pastry.jpeg", // Strawberry
    ],
    cakes: [
      "https://i.ytimg.com/vi/HD8iiW2sBjc/maxresdefault.jpg", // Rasmalai Cake
      "https://chocomans.com/wp-content/uploads/2021/02/Gulabjamun-Cake-1.jpg", // Gulab Jamun Cake
      "https://www.giftjaipur.com/image/cache/catalog/2018/kesar-cake-1-500x500.jpg", // Kesar Pista Cake
      "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800", // Mango Mousse
      "https://drivemehungry.com/wp-content/uploads/2022/09/fresh-fruit-cake-5.jpg", // Fruit Cake
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800", // Butterscotch Cake
      "https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&w=800", // Black Forest Cake
      "https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=800", // Choco Truffle Cake
      "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800", // Red Velvet
      "https://i.ytimg.com/vi/BBlt7PYP4vg/maxresdefault.jpg", // Rabri Malai
    ],
    cookies: [
      "https://tse3.mm.bing.net/th/id/OIP.lF4TP0uHPU-QpyL79SguMAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Jeera Biscuit
      "https://www.theloveofspice.com/wp-content/uploads/2020/08/nankhatai.jpg", // Nankhatai
      "https://tse3.mm.bing.net/th/id/OIP.n_LPKdkE5nUbS8xf8n73owHaI9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Coconut Cookie
      "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800", // Atta Biscuit
      "https://tse2.mm.bing.net/th/id/OIP.ikWXltcZQ5FQxynS3U9WIwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Ragi Cookie
      "https://tse2.mm.bing.net/th/id/OIP.2e-3XzO_eN95oxMhSjIkWgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // Elaichi Biscuit
      "https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=800", // Badam Pista
      "https://5.imimg.com/data5/SELLER/Default/2021/6/DY/OB/VK/53654004/kesar-pista-biscuite-500x500.jpg", // Kesar Pista Biscuit
      "https://4.imimg.com/data4/GJ/JV/ANDROID-3608273/product.jpeg", // Ajwain Biscuit
      "https://4.imimg.com/data4/GJ/JV/ANDROID-3608273/product.jpeg", // Jaggery Oats
    ],
  } as const;

  const make = (category: Product["category"]) => {
    return NAMES[category].map((name, idx) => {
      const idPrefix = { bread: 1, pastries: 2, cakes: 3, cookies: 4 }[category];
      const id = Number(`${idPrefix}${(idx + 1).toString().padStart(2, "0")}`);
      const base = { bread: 25, pastries: 45, cakes: 500, cookies: 20 }[category];
      const price = base + idx * (category === "cakes" ? 50 : 5);
      const image = IMGS[category][idx % IMGS[category].length];
      const badge = idx % 9 === 0 ? "Bestseller" : idx % 7 === 0 ? "Popular" : idx % 5 === 0 ? "New" : undefined;

      return {
        id,
        name,
        category,
        price,
        image,
        description: `${name} — Indian ${category} speciality from Apna Thikana.`,
        badge,
      } as Product;
    });
  };

  const products: Product[] = useMemo(
    () => [...make("bread"), ...make("pastries"), ...make("cakes"), ...make("cookies")],
    []
  );

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    if (!el.dataset.fallback) {
      el.dataset.fallback = "1";
      el.src = "/images/fallback.jpg"; // ensure this file exists in public/images
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Fresh bakes, big smiles.
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore {products.length}+ Indian items — breads, pastries, cakes & cookies — crafted daily at{" "}
            <span className="font-semibold">Apna Thikana</span>.
          </p>
          <div className="mt-6 inline-flex gap-3">
            <button onClick={() => setActiveCategory("all")} className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90">
              Shop All
            </button>
            <a href="#catalog" className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100">
              Browse Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full border ${activeCategory === cat.id ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border shadow hover:shadow-lg transition">
                <div className="relative">
                  <img src={product.image} alt={product.name} loading="lazy" onError={onImgError} className="w-full h-48 object-cover" />
                  {product.badge && <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow">{product.badge}</span>}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <button onClick={() => onAddToCart(product)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && <div className="col-span-full text-center text-gray-500 py-10">No items found.</div>}
          </div>
        </div>
      </section>
    </div>
  );
}
