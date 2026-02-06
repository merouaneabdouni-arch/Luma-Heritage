import { ASSETS, PRODUCTS } from "./constants";

export function App() {
  return (
    <div className="min-h-screen font-sans text-[#4a443f] bg-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-10 py-6">
        <img
          src={ASSETS.LOGO}
          alt="LUMA Logo"
          className="h-10"
        />

        <nav className="flex gap-10 text-sm tracking-wide">
          <a href="#philosophy">Philosophy</a>
          <a href="#collection">Collection</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-10 py-24 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif mb-6">
            Luxury Date-Infused Skincare for Hotels & Spas
          </h1>

          <p className="text-lg max-w-xl">
            Premium skincare rituals inspired by Middle Eastern heritage,
            crafted exclusively for refined hospitality environments.
          </p>
        </div>

        <img
          src={ASSETS.HERO}
          alt="LUMA Hero"
          className="max-h-[520px] object-contain"
        />
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="px-10 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif mb-6">Brand Philosophy</h2>
          <p className="mb-4">
            LUMA is rooted in Middle Eastern skincare traditions, where dates have long
            been valued for their nourishing and restorative properties.
          </p>
          <p>
            Our formulations are designed as professional rituals for luxury hotels,
            spas and wellness retreats.
          </p>
        </div>

        <img
          src={ASSETS.NOURISHING_OIL}
          alt="Nourishing Oil"
          className="max-h-[420px] object-contain"
        />
      </section>

      {/* COLLECTION */}
      <section id="collection" className="px-10 py-32">
        <h2 className="text-3xl font-serif mb-16">Product Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {PRODUCTS.map(product => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.alt}
                className="h-72 mx-auto mb-8 object-contain"
              />
              <h3 className="text-xl font-serif mb-3">{product.name}</h3>
              <p className="text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-32">
        <h2 className="text-3xl font-serif mb-6">Professional Contact</h2>
        <p className="mb-4">contact@luma-heritage.com</p>
        <p>United Arab Emirates</p>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 text-sm">
        LUMA — United Arab Emirates
      </footer>

    </div>
  );
}
