interface CatalogItem {
    id: number;
    title: string;
    price: string;
    image: string;
    badge: string;
}

const ITEMS: CatalogItem[] = [
    {
        id: 1,
        title: "Grove Street Bomber Jacket",
        price: "$120",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68eA3iBfCj4CFApEaL9ijoVmzfEeVZxVV_J5ezDkkXbBvLLb4RUH9LCUZ&s=10",
        badge: "RESPECT +",
    },
    {
        id: 2,
        title: "Desert Eagle .50 Replica",
        price: "$850",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkQD22J5bYo2f-ovigqb6wlQazNPowVzd42oNjh3DgQ&s=10",
        badge: "AMMU-NATION",
    },
    {
        id: 3,
        title: "Elegy Custom Sports Coupe",
        price: "$35,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimMm8aVCQvIc0N5YVwY7RdR6_gD3t5qAwAm0ou6n0xaoO86SIe9Is0u0&s=10",
        badge: "TUNING",
    },
    {
        id: 4,
        title: "Cluckin' Bell Big Bucket",
        price: "$15",
        image: "https://dunb17ur4ymx4.cloudfront.net/packages/images/7a15b25abae95ed1729c066dc3db242a570b041e.png",
        badge: "STAMINA",
    },
    {
        id: 5,
        title: "Hydra VTOL Jet Model",
        price: "$5,000,000",
        image: "https://static.wikia.nocookie.net/gtawiki/images/7/7f/Hydra-GTASA-inflight.jpg/revision/latest?cb=20240109134005",
        badge: "MILITARY",
    },
    {
        id: 6,
        title: "Lowrider Hydraulics Kit",
        price: "$1,200",
        image: "https://i.ytimg.com/vi/aGj5p7Bizt0/maxresdefault.jpg",
        badge: "LOCO LOW RIDER",
    },
    {
        id: 7,
        title: "San Andreas Bandana Set",
        price: "$25",
        image: "https://j2games.com/cdn/shop/files/s-l960_a3d4c73d-77c5-4360-8625-13fbfb657ed0.jpg?v=1708537547",
        badge: "CLOTHES",
    },
    {
        id: 8,
        title: "Gold Spray Can (Infinite)",
        price: "$300",
        image: "https://i.ytimg.com/vi/xEudayh6S6g/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAn_xlqWXyApZ8hI_1GpCiGcQuf2g",
        badge: "TAGS",
    },
];

export function CatalogSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            {/* Header Bar */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#f5b82e] pb-3 gap-2">
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#f5b82e]">
                        Los Santos / San Andreas
                    </p>
                    <h1 className="text-2xl sm:text-3xl uppercase tracking-wide text-white">
                        Black Market Catalog
                    </h1>
                </div>
                <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-[#9ca3af]">
            Items: {ITEMS.length}
          </span>
                    <span className="text-lg font-bold tracking-wider text-[#4ade80]">
            $99,999,999
          </span>
                </div>
            </div>

            {/* Grid: 1 col on mobile, 2 cols from 768px (md), 4 cols from 1280px (xl), gap 16px (gap-4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {ITEMS.map((item) => (
                    <article
                        key={item.id}
                        className="sa-panel sa-card-hover rounded-none overflow-hidden flex flex-col"
                    >
                        <div className="relative overflow-hidden group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover block border-b-2 border-[#2a313d] group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2 left-2 bg-black/85 text-[#f5b82e] border border-[#f5b82e] px-2 py-0.5 text-xs uppercase tracking-wider">
                {item.badge}
              </span>
                        </div>

                        <div className="p-4 flex flex-col flex-1 justify-between gap-4">
                            <div className="space-y-1">
                                <h2 className="text-base uppercase tracking-wide text-white leading-snug">
                                    {item.title}
                                </h2>
                                <p className="text-sm font-bold text-[#4ade80] tracking-wider">
                                    {item.price}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="sa-btn w-full py-2 px-4 text-sm font-bold uppercase tracking-wider cursor-pointer"
                            >
                                Buy Now
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}