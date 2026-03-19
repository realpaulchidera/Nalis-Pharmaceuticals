import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare, ShieldCheck, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Products',
    questions: [
      { q: 'Are your medications NAFDAC approved?', a: 'Yes, all Nalis Pharmaceuticals products are fully registered and approved by NAFDAC (National Agency for Food and Drug Administration and Control) in Nigeria.' },
      { q: 'Do you offer pediatric-specific formulations?', a: 'Absolutely. We have a dedicated line of pediatric medications designed with child-friendly dosages and flavors.' }
    ]
  },
  {
    category: 'Orders & Distribution',
    questions: [
      { q: 'How can I become a distributor?', a: 'You can apply through our contact form by selecting "Distribution Partnership" as the subject. Our team will review your application and contact you with the requirements.' },
      { q: 'What is the typical delivery time for bulk orders?', a: 'For bulk orders within Nigeria, delivery typically takes 3-5 business days. International shipping times vary by location.' }
    ]
  },
  {
    category: 'General Inquiries',
    questions: [
      { q: 'Where is your manufacturing facility located?', a: 'Our primary manufacturing and distribution hub is located in Owerri, Imo State, Nigeria.' },
      { q: 'Do you provide clinical consultation for healthcare providers?', a: 'Yes, we offer clinical support and product training for healthcare professionals to ensure the best patient outcomes.' }
    ]
  }
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="relative px-8 py-24 lg:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-primary-container text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 inline-block shadow-sm">
            Contact Us
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-tertiary leading-tight tracking-tighter mb-10 max-w-4xl mx-auto">
            We're Here to Support Your <span className="text-primary-container">Clinical Journey.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-public-sans mb-12">
            Have questions about our medications, distribution, or clinical services? Our team in Owerri is ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#faq" className="px-8 py-3 bg-white text-primary border border-primary/20 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm">
              View FAQs
            </a>
            <a href="#map" className="px-8 py-3 bg-white text-primary border border-primary/20 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm">
              Our Location
            </a>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Contact Grid Section */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form - Large Bento */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-3xl shadow-clinical border border-outline-variant/10">
            <h2 className="text-3xl font-extrabold text-tertiary mb-10">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Subject</label>
                <select className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all text-on-surface-variant">
                  <option>Product Inquiry</option>
                  <option>Distribution Partnership</option>
                  <option>Clinical Consultation</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you today?"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-xl font-black shadow-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Details - Side Bento */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-tertiary text-white p-12 rounded-3xl shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-extrabold mb-10 relative z-10">Contact Information</h3>
              <div className="space-y-8 relative z-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Our Headquarters</h4>
                    <p className="text-on-tertiary-container opacity-80 text-sm leading-relaxed">
                      Plot 12, Ikenegbu Layout,<br />
                      Owerri, Imo State, Nigeria.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Phone & WhatsApp</h4>
                    <p className="text-on-tertiary-container opacity-80 text-sm">+234 (0) 803 123 4567 (Calls)</p>
                    <p className="text-on-tertiary-container opacity-80 text-sm">+234 (0) 812 987 6543 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email Us</h4>
                    <p className="text-on-tertiary-container opacity-80 text-sm">info@nalispharma.com</p>
                    <p className="text-on-tertiary-container opacity-80 text-sm">support@nalispharma.com</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container opacity-20 rounded-full"></div>
            </div>

            <div className="bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                  <Clock size={20} />
                </div>
                <h4 className="font-extrabold text-tertiary text-xl">Operating Hours</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-bold text-sm">Monday - Friday</span>
                  <span className="text-tertiary font-black text-sm">08:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant font-bold text-sm">Saturday</span>
                  <span className="text-tertiary font-black text-sm">09:00 AM - 04:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-bold text-sm">Sunday</span>
                  <span className="text-secondary font-black text-sm uppercase tracking-widest">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="px-8 mb-32 scroll-mt-32">
        <div className="max-w-7xl mx-auto h-[500px] bg-surface-container-highest rounded-3xl overflow-hidden shadow-clinical border border-outline-variant/10 relative group">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-4h_f27_0kF-E3-1X-N-Y-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z-0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z" 
            alt="Map Placeholder" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-outline-variant/10 text-center max-w-sm transform group-hover:scale-105 transition-transform">
              <MapPin className="text-primary mx-auto mb-4" size={40} />
              <h4 className="font-extrabold text-tertiary text-xl mb-2">Visit Our Facility</h4>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Plot 12, Ikenegbu Layout, Owerri. We are located near the central business district.</p>
              <button className="text-primary font-bold hover:underline">Get Directions on Google Maps</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-8 py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-tertiary tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-12">
            {faqs.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-6">
                <h3 className="text-sm font-black text-on-surface-variant uppercase tracking-widest border-l-4 border-primary pl-4">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.questions.map((faq, faqIdx) => {
                    const id = `${groupIdx}-${faqIdx}`;
                    const isOpen = openIndex === id;
                    return (
                      <div 
                        key={id} 
                        className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-primary bg-primary/5 shadow-sm' : 'border-outline-variant/10 bg-surface-container-low hover:border-outline-variant'}`}
                      >
                        <button 
                          id={`faq-button-${id}`}
                          onClick={() => toggleFaq(id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-content-${id}`}
                          className="w-full px-8 py-6 flex items-center justify-between text-left group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
                        >
                          <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-tertiary group-hover:text-primary'}`}>
                            {faq.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-white text-outline group-hover:text-primary shadow-sm'}`}>
                            <ChevronDown size={18} />
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-content-${id}`}
                              role="region"
                              aria-labelledby={`faq-button-${id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-8 text-on-surface-variant leading-relaxed font-public-sans border-t border-primary/10 pt-4">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Support Section */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: MessageSquare, 
              title: 'WhatsApp Ordering', 
              desc: 'Ready to place a bulk order? Chat directly with our sales team on WhatsApp for instant processing.',
              link: 'https://wa.me/2348129876543?text=Hello%20Nalis%20Pharmaceuticals,%20I%20would%20like%20to%20place%20a%20bulk%20order.',
              linkText: 'Chat on WhatsApp'
            },
            { 
              icon: Globe, 
              title: 'Global Distribution', 
              desc: 'We ship our pharmaceutical products to clinics and hospitals across West Africa.',
              link: '#',
              linkText: 'Learn More'
            },
            { 
              icon: ShieldCheck, 
              title: 'Quality Assurance', 
              desc: 'Every inquiry is handled with the same clinical precision as our manufacturing process.',
              link: '#',
              linkText: 'Our Standards'
            }
          ].map((item, i) => (
            <div key={i} className="text-center p-10 bg-white rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <item.icon size={32} />
              </div>
              <h3 className="font-extrabold text-2xl text-tertiary mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">{item.desc}</p>
              <a 
                href={item.link} 
                className="text-primary font-bold hover:underline flex items-center gap-2"
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                {item.linkText} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
