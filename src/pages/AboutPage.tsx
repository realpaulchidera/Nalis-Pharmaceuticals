import { ArrowRight, Verified, Microscope, Users, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="relative px-8 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="z-10">
            <span className="bg-tertiary-container text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 inline-block shadow-sm">
              Est. in Owerri
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-tertiary leading-[1.1] tracking-tighter mb-10">
              Precision Science. <br />
              <span className="text-primary-container">Clinical Compassion.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-xl font-public-sans">
              Rooted in the heart of Imo State, Nalis Pharmaceuticals is redefining healthcare for the community through uncompromising quality in drug manufacturing and a patient-first philosophy.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl flex items-center gap-3 hover:scale-105 transition-transform">
                Our Impact <ArrowRight size={20} />
              </button>
              <button className="border border-outline-variant/30 text-tertiary px-10 py-4 rounded-xl font-bold bg-white shadow-sm hover:bg-surface-container-low transition-all">
                View Certifications
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhrkHJaiDHfXNuz54ETNVkS9zwfOZWuaavk37-z9C1DG4LKQ6YFovzEaImFvi40fXuZJwbukUJN1-S67U3ppoN6k4TSRQIKuLXDR-7zuXhl-rIe1TOWQSLrMEXoDXyoUd3UcD-m9uXnzxzQD_mKl8yyTi2W8uovJp4G7twdbvWg96uQTqHsvSdEwxQX0IU-xancN0BFDhLE25DJrokEpVnaleokdxXpnYW5tSWovJCS1OAFVZN4I1-ISG9ZFdctziGPVvVgqCoRWrp" 
                alt="Scientist" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-white p-5 rounded-2xl shadow-2xl transform -rotate-3 hidden md:block">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnufobe73UwMtXNHaz6JHKMxhIbREaMgDn1Jf2f2qtQmXgNgdRY4jQOkVunAt4UKQzREr6uui75MRUU4rl2mZf6FT1r5XsLCGb8cgsL2ZFbUh8xUJAZkGzNXG9PNsTy-67DVr3oRNGFGLwKaD_FlNygnedGa85c9tJjBa6bbU9lCcjqedf7zci8nXTvFhyZ21XoyF8MDwEVr-RFCWeFwTI5seBJn-0FQnmMFLA0aC_WljjxOm3vbuYlZ_PPrrVNPKpz049BH5z8qZF" 
                alt="Lab Equipment" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 -z-10 rounded-l-[100px]"></div>
      </section>

      {/* Mission & Values Bento Grid */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold text-tertiary mb-6">Our Commitment to the Community</h2>
            <p className="text-on-surface-variant text-lg">We bridge the gap between global pharmaceutical standards and local community needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bento Large Item */}
            <div className="md:col-span-2 bg-white p-12 rounded-3xl shadow-clinical flex flex-col justify-between border border-outline-variant/10">
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                  <Verified size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-tertiary mb-6">Quality Without Compromise</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg font-public-sans">
                  Our Owerri-based facility operates under strict international GMP standards. Every tablet and syrup produced is a testament to our dedication to the health of the Nigerian family. We don't just manufacture medicine; we manufacture trust.
                </p>
              </div>
              <div className="mt-12 pt-10 border-t border-outline-variant/10">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-surface-container-high"></div>
                    ))}
                  </div>
                  <span className="text-base font-bold text-tertiary">Trusted by 500+ Local Clinics</span>
                </div>
              </div>
            </div>

            {/* Bento Side Item */}
            <div className="bg-primary-container text-white p-12 rounded-3xl flex flex-col justify-center shadow-lg relative overflow-hidden">
              <h3 className="text-3xl font-extrabold mb-8 relative z-10">Our Mission: Clinical Compassion</h3>
              <p className="text-on-primary-container leading-relaxed opacity-90 mb-10 text-lg relative z-10">
                To heal is to care. Our mission extends beyond the chemistry of drugs into the heart of the community, ensuring every life in Owerri has access to life-saving medication.
              </p>
              <div className="text-7xl font-black opacity-10 relative z-10">24/7</div>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white opacity-5 rounded-full"></div>
            </div>

            {/* Bento Small Items */}
            {[
              { icon: MapPin, title: 'Local Heritage', desc: 'Proudly operating from the heart of Owerri, supporting local talent and economy.' },
              { icon: Microscope, title: 'Modern Research', desc: 'Utilizing cutting-edge lab technology to innovate affordable health solutions.' },
              { icon: Users, title: 'Community First', desc: 'Regular outreach programs and health awareness workshops for all ages.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-clinical border border-outline-variant/10 hover:translate-y-[-4px] transition-transform">
                <item.icon className="text-secondary mb-6" size={28} />
                <h4 className="font-extrabold text-xl text-tertiary mb-3">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Spotlight */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAtaH-GsFwwzlmh5nGz5NyKbqM0M1qaOoy1CvgLGfPUsxey11-KGagQuA9h0DlLnqGvu4-t3MFJQKEI46Ncn7AvfGwX6Mxut68DLQ1sHzFsGYzywPsPy9T9tx0FhUnaK-B8wV_JSPlPlvKUNB91Q9gA0xPQHsc_Q4izT8GfxEcKbxicWZEtAuzmMCdvrbdR37pmAZ3WdtKMJVMWqnV0oAXrTfWVn9Hik9uyKhZ6UGfkB0frKe4BBHjMNCyz6qznKW8wqVZvr9yVIF" alt="Facility 1" className="w-full h-56 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3hqafZaxgrbBICi9X-meN8Rt9Am3H4VfSQ0iP6fSSmP0DJ5hEt88qVTu95UEIcoMy5ytJt8VYt01J1eb_hPMwsCuO-J3eGElc9K6raClLluP6qCR76IUcadfzZANfICTQnCK7gx4h634TAhbdIoG4wm1bNc7pVoSjzCPMgd-D2nTZfkecXsGtT-YMrnG8MUO4Nv4UiOB67jiihReLnNO2-2I1Pkc_xZy8QbQiJ5Kpzk9CPa-SV-YjYoM-WVbwWcPGzdlmv2Y3ocgT" alt="Facility 2" className="w-full h-72 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg9X5pwYfbYNl18MiEuoi8JXoFtN0vV-zCcYsgtXR72lG8MU5z81NU65bgS6aO_P3RSg-5ttIBTblaYfw2NDDRD1fupMHAIKmFG1Bp4azTi81tMKHC5M9Ju7xid9HIEiWm7UlMXdDAXu8REExtlbje5cBmU0EegtpYg2hhW1jDCp5KQjdKPRFoOVcOcVWA8zKsdsDSPhfroWYhgltS4NikV4nMjfpuo_f3gFmgvE9BSGWqv-cEZUiJanLTnzmgC5D12DZuPMtM3h1v" alt="Facility 3" className="w-full h-72 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_0Qir9lL5oFXQ5dk1VJPpGKQY5wycg4uCR9rkdearObYpbxR5-VERshpH85HcQvPd-Q4VsmiBO5lcD4q12gqarUxwVWP8-MbORqQajrNcVwIELdinyx7V-UTVQ2rxd0XgcD19iK3MAkqYsBAebKkQnZygLwnRL6SUzIl4P1C8z5eL5EFastawaHExjdLpRDuLvQpqbVKODhq_0np8GsBq1DfjNXjujytKB71dUdy1uweGl9HqXbajkgKKBs9pmGY9vmGTp61y7aGS" alt="Facility 4" className="w-full h-56 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-tertiary mb-12 tracking-tight leading-tight">World-Class Facilities in Owerri</h2>
            <div className="space-y-12">
              {[
                { num: '1', title: 'Advanced Sterilization', desc: 'Our cleanrooms exceed standard pharmaceutical requirements to ensure absolute purity.' },
                { num: '2', title: 'R&D Laboratory', desc: "Where Owerri's brightest scientific minds develop formulas optimized for the local climate." },
                { num: '3', title: 'Eco-Friendly Storage', desc: 'Temperature-controlled distribution centers powered by sustainable energy solutions.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-black text-lg shadow-md">{item.num}</div>
                  <div>
                    <h4 className="font-extrabold text-tertiary text-2xl mb-3">{item.title}</h4>
                    <p className="text-on-surface-variant text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {['NAFDAC CERTIFIED', 'ISO 9001:2015', 'WHO COMPLIANT', 'PCN APPROVED'].map(badge => (
            <span key={badge} className="font-manrope font-black text-tertiary text-2xl italic tracking-tighter">{badge}</span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32">
        <div className="max-w-5xl mx-auto bg-tertiary rounded-3xl p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-10 tracking-tight leading-tight">Support local health. <br />Trust Nalis Pharmaceuticals.</h2>
            <p className="text-on-tertiary-container text-xl mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">Whether you are a healthcare provider or a patient, we are here to ensure you get the clinical excellence you deserve.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-primary-container text-white px-10 py-5 rounded-xl font-black shadow-2xl hover:scale-105 transition-transform inline-block">
                Contact Us for Partnerships
              </Link>
              <Link to="/" className="text-white border-2 border-white/20 px-10 py-5 rounded-xl font-black hover:bg-white/10 transition-all inline-block">
                Browse Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
