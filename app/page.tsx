import React from "react";
import {
  pawPrint,
  ShoppingCart,
  Truck,
  Heart,
  Mail,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <pawPrint size={20} />
            </div>
            <div>
              <span className="block font-extrabold text-lg">PeePaw</span>
              <span className="block text-xs text-slate-500">Pet store</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="mailto:hello@peepaw.com"
              className="ml-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-95"
            >
              <Mail size={16} />
              Reach us now
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg shadow"
              aria-label="Reach us now"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-blue-600">PeePaw</span> — Your
              friendly neighborhood pet store
            </h1>
            <p className="mt-4 text-slate-700 text-lg max-w-xl">
              Premium food, toys, and supplies for dogs, cats, and small pets.
              Curated with love and trusted by pet parents. Fast delivery,
              expert advice, and friendly service.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
              >
                <ShoppingCart size={18} />
                Shop Now
              </a>
              <a
                href="mailto:hello@peepaw.com"
                className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50"
              >
                <Mail size={16} />
                Reach us now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <Truck className="text-blue-600" size={18} />
                Free delivery over $49
              </div>
              <div className="inline-flex items-center gap-2">
                <Heart className="text-purple-600" size={18} />
                Vet-approved products
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="text-yellow-400" size={18} />
                5k+ happy customers
              </div>
            </div>
          </div>

          <div className="order-first md:order-last flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-100 bg-white">
              <img
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80"
                alt="Smiling dog - PeePaw"
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Top Picks for Dogs</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Nutritious food and comfy beds selected by our team.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#products"
                    className="text-sm inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md"
                  >
                    Browse
                  </a>
                  <a
                    href="mailto:hello@peepaw.com"
                    className="text-sm inline-flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-md"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Why PeePaw?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="p-3 inline-flex bg-blue-50 rounded-md text-blue-600">
              <ShoppingCart size={20} />
            </div>
            <h3 className="mt-4 font-semibold">Curated Products</h3>
            <p className="mt-2 text-sm text-slate-600">
              We handpick safe and healthy items for all pet types.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="p-3 inline-flex bg-purple-50 rounded-md text-purple-600">
              <Truck size={20} />
            </div>
            <h3 className="mt-4 font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-sm text-slate-600">
              Reliable shipping options and same-week delivery in many areas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="p-3 inline-flex bg-blue-50 rounded-md text-blue-600">
              <Heart size={20} />
            </div>
            <h3 className="mt-4 font-semibold">Vet Approved</h3>
            <p className="mt-2 text-sm text-slate-600">
              Products recommended by veterinary professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="p-3 inline-flex bg-purple-50 rounded-md text-purple-600">
              <pawPrint size={20} />
            </div>
            <h3 className="mt-4 font-semibold">Loved by Pets</h3>
            <p className="mt-2 text-sm text-slate-600">
              Thousands of happy tails and paws across the country.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Products</h2>
          <a href="#products" className="text-blue-600 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Grain-Free Kibble",
              price: "$29.99",
              img: "https://images.unsplash.com/photo-1558944351-bcd3b0f6f0d3?auto=format&fit=crop&w=900&q=80",
            },
            {
              id: 2,
              title: "Cozy Pet Bed",
              price: "$49.99",
              img: "https://images.unsplash.com/photo-1559239115-2d8f6c78d7d9?auto=format&fit=crop&w=900&q=80",
            },
            {
              id: 3,
              title: "Interactive Toy",
              price: "$14.99",
              img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=900&q=80",
            },
          ].map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border flex flex-col"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-600 flex-1">{p.price}</p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-md"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </a>
                  <a
                    href="mailto:hello@peepaw.com"
                    className="text-sm inline-flex items-center gap-2 border border-slate-200 px-3 py-2 rounded-md"
                  >
                    <Mail size={14} />
                    Contact
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-white to-purple-50 rounded-tl-3xl rounded-tr-3xl"
      >
        <h2 className="text-2xl font-bold mb-6">What customers say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              name: "Maya R.",
              quote:
                "PeePaw has the best selection and my pup loves everything. Fast shipping too!",
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            },
            {
              id: 2,
              name: "Carlos D.",
              quote:
                "The customer service helped me pick the right diet for my cat. Highly recommend.",
              avatar:
                "https://images.unsplash.com/photo-1545996124-1f00b041f6a6?auto=format&fit=crop&w=200&q=80",
            },
            {
              id: 3,
              name: "Aisha K.",
              quote:
                "Great prices and adorable packaging. My rabbit loves the new toys!",
              avatar:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&q=80",
            },
          ].map((t) => (
            <blockquote
              key={t.id}
              className="bg-white p-6 rounded-xl shadow-sm border flex flex-col"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={`${t.name}'s avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500">Happy customer</div>
                </div>
              </div>
              <p className="mt-4 text-slate-700 flex-1">"{t.quote}"</p>
              <div className="mt-4 text-sm text-yellow-500 flex items-center gap-1">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} className="opacity-70" />
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold">Reach us now</h3>
            <p className="mt-3 text-slate-100/90">
              Have questions or need product recommendations? Our team is ready
              to help. Contact us via email, phone, or drop by our store.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="mailto:hello@peepaw.com"
                className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg hover:bg-white/20"
              >
                <Mail size={18} />
                hello@peepaw.com
              </a>

              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg hover:bg-white/20"
              >
                <Phone size={18} />
                +1 (234) 567-890
              </a>

              <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg">
                <MapPin size={18} />
                123 Pet Lane, Happy Town
              </div>
            </div>

            <div className="mt-6">
              <a
                href="mailto:hello@peepaw.com?subject=I'd%20like%20to%20reach%20PeePaw"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-3 rounded-lg"
              >
                <Mail size={16} />
                Reach us now
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h4 className="font-semibold text-lg">Send us a message</h4>
            <p className="mt-2 text-sm text-slate-600">
              Prefer to message us? Fill this quick form and we'll get back to
              you.
            </p>

            <form
              action={`mailto:hello@peepaw.com`}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-sm text-slate-700">Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-700">Message</label>
                <textarea
                  name="Message"
                  rows={4}
                  placeholder="How can we help?"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg"
                >
                  <Mail size={16} />
                  Send Message
                </button>

                <div className="text-sm text-slate-500">
                  Or call us: <a href="tel:+1234567890" className="text-blue-600">+1 (234) 567-890</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-slate-200 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <pawPrint size={18} />
            </div>
            <div>
              <div className="font-semibold">PeePaw</div>
              <div className="text-xs text-slate-600">Pet store</div>
            </div>
          </div>

          <div className="text-sm text-slate-600 flex items-center gap-4">
            <span>© {new Date().getFullYear()} PeePaw</span>
            <a href="#privacy" className="hover:text-blue-600">Privacy</a>
            <a href="#terms" className="hover:text-blue-600">Terms</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@peepaw.com"
              className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-2 rounded-md"
            >
              <Mail size={14} />
              Reach us now
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
