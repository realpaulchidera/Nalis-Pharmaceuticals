import { ShoppingCart, Heart, ArrowRight, Grid, List, Info, ShieldCheck, Truck, ClipboardList, Users, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';

const categories = ['All Products', 'Antibiotics', 'Pain Management', 'Vitamins & Supplements', 'Chronic Care', 'Clinical Equipment'];

const pediatricProducts = [
  {
    id: 1,
    category: 'SUSPENSION',
    filterTag: 'Antibiotics',
    name: 'NaliCef Paediatric',
    description: 'Orange-flavored cephalexin suspension for common bacterial infections in children.',
    price: '₦4,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2HQZLSzaJUZ9CROpss32uZORO5EckKCbbf3Tf-B9mAfXNKwouBoJEhkFF3eUJEThVGW5CIDft36tZ7t9i3mIMosh5jixLBKOw2vimeOMuF_rUhEm8P9uunupD8jSfeXrCfbLia15-lumrTZi6N4mqDrkWv0nloJfDiUAWOcwkL7w7AO2WVfb9Yaip-Vb9vFPrLx44p43I2Px2q3a4-puLDzPYwF5vbdQoVEBMthodpn330Mut-3RLWBTEUqUXkKQ5MgG2XwR5fi1k'
  },
  {
    id: 2,
    category: 'SUPPLEMENT',
    filterTag: 'Vitamins & Supplements',
    name: 'Kidney-Joy Multivits',
    description: 'Essential daily vitamins and minerals tailored for growing bodies and brain development.',
    price: '₦2,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7T9F8qfNh_ZgsnYfNM_C4Ss8XeG_88ZJKyW4Ip1nwGtVaofL8PhPDwIzb3DcHft3bJVWgRg7JCcadjMKbqewc5WWiX_LID3EpcRY4eH5ais7iy_FfaXS3NulmJaviE0JrE2_WSPb0WUPF-4h72051-FScH4EfRJbjmqD0Gy2RbwFCb0MWQzj_lFf1K3VSsQB2TeMI9hn6L6PFNzA9EjwQ6N_o95_R0wvqeYvbvm19zu2OfQau-vzOr4D9M_WsFzBhj-eGLh8rAgHA'
  },
  {
    id: 3,
    category: 'DERMA',
    filterTag: 'Chronic Care',
    name: 'SoftShield Diaper Balm',
    description: 'Clinically proven barrier cream for prevention and treatment of diaper rash.',
    price: '₦1,950',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB61aWWTc6vktoOkA6H1I4ElbVogtBgMcs1NvBJ-4NXpYxd-eYNskxwX7Bpx8dnaQ_KbjzbXMwmoPuG49Zr2vRkHDkyfG0_Np_8reAzhI-a6kabt0PcROrewy9Bxw9blyL66Atx11IOmOKGsI490xs0cD4f2sliiryp3N_ndCEplj0z_NGOs59i-D3e9tItb_KjVro_BmCNtnMC0k1n7cozE65QV3vvMocAcegqPS3z2M9bTEOq-yLatim3dFORWVrmHyZLnId9m3dR'
  },
  {
    id: 4,
    category: 'DEVICES',
    filterTag: 'Clinical Equipment',
    name: 'QuickScan Termo',
    description: 'Non-contact infrared thermometer for fast and accurate temperature readings.',
    price: '₦12,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7otmAGjFWj4eKf3yUDnwJwHunTvkVJLyp6r-24CSJB-ppf8yVWORajnLl1aPjRqkpWak-sGLrgmLso7fZmvaEkDhwV8pYanyYaJIGn7zVP2LtPbKVkB4To9-p5yBh8SBkXj1guSZQzePZjq9qJZTFTSdasTmhM4SlWlQg7CHwZeOjwYodVWcs3ALGlSjHOvpR6ICXxP-jp6Sh6gR079H2F1QvJrRPqYMjc_O7UJ18q3XU_8DDgAcBWilcasbX-ZZ3NxF8IXYCWlXd'
  },
  {
    id: 5,
    category: 'SYRUP',
    filterTag: 'Pain Management',
    name: 'NaliParacetamol Syrup',
    description: 'Strawberry-flavored paracetamol for effective relief of fever and pain in infants and children.',
    price: '₦1,200',
    image: 'https://picsum.photos/seed/syrup/800/600'
  }
];

const adultProducts = [
  {
    id: 1,
    name: 'CardioMax 5mg (Amlodipine)',
    filterTag: 'Chronic Care',
    price: '₦12,400',
    unit: '/ 30 Tablets',
    description: 'Highly effective calcium channel blocker for the management of hypertension and angina pectoris. Premium clinical grade formulation.',
    tags: ['Prescription Required', 'In Stock'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_TpFHISvDC8VxidwlIyqzVKKHwIkLwBDauMZPe4HRDMHiE6-k9lKK_G1xRe4r3EgTJDKzojhKgNZhMJ1n2TjkG7Ti2QQMN7zSCubJFZOwgMGQmpo-1FTJwSist2-lPepJKjz0e4x9rPK1-urVcmqXhDEwQU8lW5X7O0_aWGAzpSASfxGkXSsgWEcdkUzDyXxC5C-gAMMyAFMyrIKNRaf93-gEWx8kKKiTTZngNicxQeTzQ9cNU7Rrw2Yv8ySwxLvzm8lZpAJzD2dj'
  },
  {
    id: 2,
    name: 'GlucoCheck Elite Pro',
    filterTag: 'Clinical Equipment',
    price: '₦45,000',
    unit: '/ Full Kit',
    description: 'Advanced blood glucose monitoring system with Bluetooth sync. High precision results in 5 seconds. Includes 50 test strips.',
    tags: ['Best Seller', 'In Stock'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnQxrzS4DEluPb6varp0hWoo-yt7B93kBAlkxFxXnwNl_u60agClzErV3EvFtpo0P5oWe5yFi7X-JLZ3Ogm7VfyCrJZqihvCKT-Xw3SB1mIg9Q2zt-cw7I1M9R8XOGooNEKGexsrCWHQ199BRSYi1Xwzqox0klDSkj-4ZGhJjZs84kgfrB4Fqp7BvFkHR8DjxlbmJQTVGfzeIK0si2etMcoYTN7xenujWl3iPFM1HPg07IGVJw9oCHKoEtDwAHfDVca3EVJ08DuER2'
  },
  {
    id: 3,
    name: 'OsteoFlex Plus',
    filterTag: 'Vitamins & Supplements',
    price: '₦18,200',
    unit: '/ 60 Caps',
    description: 'Triple-action support for joint flexibility and cartilage health. Contains Glucosamine, Chondroitin, and high-potency Vitamin D3.',
    tags: ['Dietary Supplement', 'In Stock'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8E0W7M-QIBmFBVLgxxcgN7L3vl5t6HPRV5e8XYradpMUF-zM2MvF-kt5SQUEzfWxdWSaUAKaIxOLAUxDNppt1O_4qNh5ePsN-1ZD30hYL1F-aAbFsbGM7eb0PuJfr2_huFch4TW9pG_kyE2cjU_UREJYLPR-pvv1x4kuFMF18qaApZ1u4IqD0nD_jdNFAqkTcHQkFcbtEwfGcxYfGIy707DizMK2s57uUqMQfvLreXaSUSyah4vzWcxpyAznVQAp7AhQaPeKD4S_'
  },
  {
    id: 4,
    name: 'NaliPain Relief',
    filterTag: 'Pain Management',
    price: '₦1,500',
    unit: '/ 10 Tablets',
    description: 'Fast-acting pain relief for headaches, muscle aches, and fever. Gentle on the stomach.',
    tags: ['OTC', 'In Stock'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_TpFHISvDC8VxidwlIyqzVKKHwIkLwBDauMZPe4HRDMHiE6-k9lKK_G1xRe4r3EgTJDKzojhKgNZhMJ1n2TjkG7Ti2QQMN7zSCubJFZOwgMGQmpo-1FTJwSist2-lPepJKjz0e4x9rPK1-urVcmqXhDEwQU8lW5X7O0_aWGAzpSASfxGkXSsgWEcdkUzDyXxC5C-gAMMyAFMyrIKNRaf93-gEWx8kKKiTTZngNicxQeTzQ9cNU7Rrw2Yv8ySwxLvzm8lZpAJzD2dj'
  },
  {
    id: 5,
    name: 'NaliCipro 500mg (Ciprofloxacin)',
    filterTag: 'Antibiotics',
    price: '₦3,800',
    unit: '/ 10 Tablets',
    description: 'Broad-spectrum antibiotic for the treatment of various bacterial infections. High bioavailability and clinical efficacy.',
    tags: ['Prescription Required', 'In Stock'],
    image: 'https://picsum.photos/seed/medicine/800/600'
  }
];

const adolescentProducts = [
  {
    id: 1,
    name: 'ClearPath Acne Solution',
    filterTag: 'Chronic Care',
    price: '₦8,500',
    description: 'A clinical-grade regimen specifically formulated for adolescent skin. Dermatologist tested and Owerri humidity optimized.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7jCfR_6mtHQ8rmgWxrEFnFYUGUiTY6UEGbG7hRwAdurzNMwCvO2_u_0goz9mVkg-NOKAtngrt6YS9t0LKJYHHQpNj7oDxyhJZPKHfPO_9KK5dmnF3METrfU2VKhrn5V_8MMQ6_P5kW1so8hKtrvk8fcmlI-Upd1EBn4c22y_YnOSsOteWBYGDw1KcmKqV0MKfC9oSNV8VhPOMnYF-uKoSv7_jRRe9ogdO-eRw2U7Sav-ea2yTNlYljk17lqB9EZKKsK9HlkCyiFzT',
    isFeatured: true
  },
  {
    id: 2,
    name: 'TeenVital Complex',
    filterTag: 'Vitamins & Supplements',
    price: '₦5,500',
    description: 'Enhanced with Zinc and B-vitamins for focus and energy during pivotal growth years.',
    image: 'https://picsum.photos/seed/vitamins/800/600',
    isFeatured: false
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filteredPediatric = useMemo(() => {
    if (activeCategory === 'All Products') return pediatricProducts;
    return pediatricProducts.filter(p => p.filterTag === activeCategory);
  }, [activeCategory]);

  const filteredAdolescent = useMemo(() => {
    if (activeCategory === 'All Products') return adolescentProducts;
    return adolescentProducts.filter(p => p.filterTag === activeCategory);
  }, [activeCategory]);

  const filteredAdult = useMemo(() => {
    if (activeCategory === 'All Products') return adultProducts;
    return adultProducts.filter(p => p.filterTag === activeCategory);
  }, [activeCategory]);

  const hasProducts = filteredPediatric.length > 0 || filteredAdolescent.length > 0 || filteredAdult.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 pt-32 pb-20"
    >
      {/* Hero Search Section */}
      <section className="relative overflow-hidden bg-primary-container rounded-2xl p-12 md:p-20 text-white mb-16">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Pharmaceutical Solutions for Every Stage of Life
          </h1>
          <p className="text-lg opacity-90 mb-10 font-public-sans">
            Nalis Pharmaceuticals specializes in bulk supply for hospitals, clinics, and pharmacies. Browse our catalog and place your bulk order directly via WhatsApp.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a 
              href="https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20would%20like%20to%20inquire%20about%20a%20bulk%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-5 rounded-xl font-black shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              <MessageCircle size={24} /> Order Bulk via WhatsApp
            </a>
          </div>
        </div>
        
        {/* Abstract Decorative Shapes */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 hidden lg:block">
          <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.3,-32.5,90.6,-17.3,89.5,-2.5C88.3,12.3,81.7,26.6,72.4,39.2C63.1,51.8,51.1,62.7,37.6,70.6C24.1,78.4,9.1,83.1,-5.6,81.3C-20.3,79.5,-34.7,71.2,-47.1,61.5C-59.5,51.7,-69.9,40.5,-76.2,27.4C-82.5,14.3,-84.8,-0.7,-81.2,-14.5C-77.7,-28.3,-68.2,-40.8,-56.3,-48.9C-44.4,-57,-30.1,-60.7,-16.4,-67.9C-2.7,-75.1,10.3,-85.8,24.4,-85.2C38.5,-84.6,31.1,-83.5,44.7,-76.4Z" fill="#ffffff" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Category Filter Chips */}
      <section className="mb-16 overflow-x-auto">
        <div className="flex gap-4 pb-4">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-surface-container-high text-on-surface-variant hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!hasProducts ? (
          <motion.div 
            key="no-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold text-tertiary mb-4">No products found in this category</h3>
            <p className="text-on-surface-variant">Try selecting another category or contact us for custom manufacturing.</p>
            <button 
              onClick={() => setActiveCategory('All Products')}
              className="mt-8 text-primary font-bold hover:underline"
            >
              Show all products
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pediatric Section */}
            {filteredPediatric.length > 0 && (
              <section className="mb-24">
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <span className="inline-block py-1 px-4 bg-tertiary-container text-white text-xs font-bold rounded-full mb-3 tracking-widest uppercase">PEDIATRIC</span>
                    <h2 className="text-3xl font-extrabold text-tertiary">Gentle Care for Kids</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredPediatric.map((product) => (
                    <div key={product.id} className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:shadow-clinical transition-all border border-outline-variant/15">
                      <div className="aspect-square bg-surface-container-low relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4">
                          <button className="p-2.5 bg-white/80 backdrop-blur rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                            <Heart size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="p-8">
                        <p className="text-xs text-secondary font-bold mb-2 tracking-wide">{product.category}</p>
                        <h3 className="font-bold text-xl text-on-surface mb-3">{product.name}</h3>
                        <p className="text-on-surface-variant text-sm line-clamp-2 mb-6 leading-relaxed">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold text-lg">{product.price}</span>
                          <a 
                            href={`https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20in%20bulk.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-container transition-colors p-2 rounded-lg hover:bg-primary/5 flex items-center gap-2 font-bold text-sm"
                          >
                            <MessageCircle size={18} /> Inquire
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Adolescent Section (Dynamic Bento Style) */}
            {filteredAdolescent.length > 0 && (
              <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-3xl">
                <div className="mb-12">
                  <span className="inline-block py-1 px-4 bg-tertiary-container text-white text-xs font-bold rounded-full mb-3 tracking-widest uppercase">ADOLESCENT</span>
                  <h2 className="text-3xl font-extrabold text-tertiary mb-4">Precision for Teens</h2>
                  <p className="text-on-surface-variant max-w-xl leading-relaxed">Hormonal balance, skin health, and mental focus during the pivotal teenage years.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filteredAdolescent.map((product) => (
                    product.isFeatured ? (
                      <div key={product.id} className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-outline-variant/10 shadow-sm">
                        <div className="flex-1">
                          <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">Featured Focus</span>
                          <h3 className="text-3xl font-extrabold text-tertiary mb-6">{product.name}</h3>
                          <p className="text-on-surface-variant mb-8 leading-relaxed">{product.description}</p>
                          <div className="flex gap-4">
                            <a 
                              href={`https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20in%20bulk.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-8 py-3 bg-primary text-white rounded-lg font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center gap-2"
                            >
                              <MessageCircle size={18} /> Order Bulk
                            </a>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-sm">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ) : (
                      <div key={product.id} className="bg-primary text-white rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden shadow-lg">
                        <div className="relative z-10">
                          <h3 className="text-2xl font-extrabold mb-4">{product.name}</h3>
                          <p className="text-on-primary-container opacity-90 mb-8 leading-relaxed">{product.description}</p>
                          <span className="text-3xl font-extrabold">{product.price}</span>
                        </div>
                        <a 
                          href={`https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20in%20bulk.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-10 bg-white text-primary py-4 rounded-lg font-bold relative z-10 shadow-md hover:bg-opacity-95 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={18} /> Inquire Bulk
                        </a>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
                      </div>
                    )
                  ))}
                </div>
              </section>
            )}

            {/* Adult Section */}
            {filteredAdult.length > 0 && (
              <section className="mb-24">
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <span className="inline-block py-1 px-4 bg-tertiary-container text-white text-xs font-bold rounded-full mb-3 tracking-widest uppercase">ADULT</span>
                    <h2 className="text-3xl font-extrabold text-tertiary">Clinical Strength for Adults</h2>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {filteredAdult.map((product) => (
                    <div key={product.id} className="flex flex-col md:flex-row items-center bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-all gap-8 shadow-sm group">
                      <div className="w-32 h-32 flex-shrink-0 bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                          <h3 className="font-extrabold text-2xl text-on-surface">{product.name}</h3>
                          <span className="text-lg font-extrabold text-primary">{product.price} <span className="text-on-surface-variant font-normal text-sm">{product.unit}</span></span>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-6 max-w-3xl leading-relaxed">{product.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {product.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
                        <a 
                          href={`https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20in%20bulk.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow bg-primary text-white py-3 px-8 rounded-lg font-bold text-sm shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={18} /> Order Bulk
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Section */}
      <section className="bg-gradient-to-br from-primary to-primary-container text-white p-12 md:p-20 rounded-3xl flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Can't find what you need?</h2>
          <p className="text-on-primary-container opacity-90 mb-10 text-lg leading-relaxed">
            Our expert pharmacists in Owerri are available for consultation. We specialize in sourcing rare medications and providing clinical advice tailored to your history.
          </p>
          <a 
            href="https://wa.me/2348031234567?text=Hello%20Nalis%20Pharmaceuticals,%20I%20would%20like%20to%20speak%20with%20a%20pharmacist%20about%20a%20bulk%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-primary rounded-lg font-extrabold shadow-xl hover:scale-105 transition-transform inline-block"
          >
            Talk to a Pharmacist
          </a>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: ShieldCheck, title: 'Authentic Meds', desc: '100% genuine pharmaceutical supplies.' },
            { icon: Truck, title: 'Cold-Chain Delivery', desc: 'Temperature controlled transit across Owerri.' },
            { icon: ClipboardList, title: 'Expert Counsel', desc: 'Medication counseling with every purchase.' },
            { icon: Users, title: 'Bulk Orders', desc: 'Supply management for hospitals & clinics.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <item.icon className="text-white mb-4" size={36} />
              <h4 className="font-extrabold text-xl mb-2">{item.title}</h4>
              <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
