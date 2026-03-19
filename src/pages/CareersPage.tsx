import { Briefcase, MapPin, Clock, Send, FileText, User, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: 'Clinical Pharmacist',
    department: 'Medical Services',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    description: 'We are looking for a dedicated Clinical Pharmacist to join our medical services team. You will be responsible for providing clinical support and ensuring the safe use of medications.',
    requirements: [
      'Bachelor of Pharmacy (B.Pharm) or Doctor of Pharmacy (Pharm.D) degree.',
      'Valid license to practice pharmacy in Nigeria.',
      'Minimum of 2 years of clinical experience.',
      'Strong communication and interpersonal skills.',
    ],
  },
  {
    id: 2,
    title: 'Quality Assurance Specialist',
    department: 'Manufacturing',
    location: 'Owerri, Imo State',
    type: 'Full-time',
    description: 'Join our quality assurance team to maintain the highest standards in pharmaceutical manufacturing. You will oversee quality control processes and compliance.',
    requirements: [
      'Degree in Pharmacy, Chemistry, or related field.',
      'Knowledge of GMP (Good Manufacturing Practice) standards.',
      'Attention to detail and strong analytical skills.',
      'Experience in pharmaceutical quality control is a plus.',
    ],
  },
  {
    id: 3,
    title: 'Sales Representative',
    department: 'Sales & Marketing',
    location: 'Lagos / Abuja',
    type: 'Full-time',
    description: 'We are expanding our reach. We need energetic Sales Representatives to represent Nalis Pharmaceuticals in key regions across Nigeria.',
    requirements: [
      'Degree in Pharmacy, Biological Sciences, or related field.',
      'Proven sales experience, preferably in the pharmaceutical industry.',
      'Excellent networking and negotiation skills.',
      'Willingness to travel within the assigned region.',
    ],
  },
];

export default function CareersPage() {
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
  const [viewingJobId, setViewingJobId] = useState<number | null>(null);

  const selectedJobDetails = jobOpenings.find(job => job.id === viewingJobId);

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
            Join Our Team
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-tertiary leading-tight tracking-tighter mb-10 max-w-4xl mx-auto">
            Build Your Career in <span className="text-primary-container">Clinical Excellence.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-public-sans">
            At Nalis Pharmaceuticals, we believe in empowering talent to drive innovation in healthcare. Explore our current openings in Owerri and beyond.
          </p>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Job Openings Section */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-extrabold text-tertiary">Current Openings</h2>
            <div className="text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">
              {jobOpenings.length} Positions Available
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className={`bg-white p-8 rounded-3xl shadow-clinical border transition-all group ${viewingJobId === job.id ? 'border-primary ring-1 ring-primary' : 'border-outline-variant/10 hover:border-primary/30'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-tertiary">{job.title}</h3>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{job.department}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setViewingJobId(viewingJobId === job.id ? null : job.id)}
                      className="px-6 py-4 border border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-all"
                    >
                      {viewingJobId === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedJobTitle(job.title);
                        const applySection = document.getElementById('apply');
                        if (applySection) applySection.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-8 py-4 bg-primary text-white rounded-xl font-black hover:opacity-90 transition-all whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Job Details Section */}
          <AnimatePresence>
            {selectedJobDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-12 overflow-hidden"
              >
                <div className="bg-surface-container-low p-10 md:p-16 rounded-3xl border border-primary/20 shadow-lg">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-extrabold text-tertiary">Job Details: {selectedJobDetails.title}</h2>
                      <p className="text-primary font-bold">{selectedJobDetails.department} • {selectedJobDetails.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xl font-extrabold text-tertiary mb-4">Description</h4>
                      <p className="text-on-surface-variant leading-relaxed text-lg">
                        {selectedJobDetails.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-extrabold text-tertiary mb-4">Requirements</h4>
                      <ul className="space-y-4">
                        {selectedJobDetails.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3 text-on-surface-variant">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                              <CheckCircle2 size={14} />
                            </div>
                            <span className="text-lg">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-outline-variant/20">
                      <button 
                        onClick={() => {
                          setSelectedJobTitle(selectedJobDetails.title);
                          const applySection = document.getElementById('apply');
                          if (applySection) applySection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-12 py-5 bg-primary text-white rounded-xl font-black shadow-xl hover:scale-105 transition-transform"
                      >
                        Apply for this Position
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="px-8 py-32 bg-surface-container-low" id="apply">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-clinical border border-outline-variant/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-tertiary mb-4">Submit Your Application</h2>
            <p className="text-on-surface-variant font-public-sans">
              Complete the form below and our HR team will get back to you shortly.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} /> Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <Phone size={14} /> Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+234 ..."
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14} /> Position Applied For
                </label>
                <select 
                  value={selectedJobTitle || ''}
                  onChange={(e) => setSelectedJobTitle(e.target.value)}
                  className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all text-on-surface-variant"
                >
                  <option value="" disabled>Select a position</option>
                  {jobOpenings.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                  <option value="General Application">General Application</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <FileText size={14} /> Resume / CV (Link or Text)
              </label>
              <textarea 
                rows={4}
                placeholder="Paste a link to your resume or provide a brief summary of your experience..."
                className="w-full px-6 py-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-outline resize-none"
              ></textarea>
            </div>

            <button className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-xl font-black shadow-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform">
              Submit Application <Send size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="px-8 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-tertiary mb-16">Why Join Nalis Pharmaceuticals?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-outline-variant/10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                <Briefcase size={32} />
              </div>
              <h3 className="font-extrabold text-2xl text-tertiary mb-4">Career Growth</h3>
              <p className="text-on-surface-variant leading-relaxed">We provide continuous learning opportunities and clear paths for professional advancement.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-outline-variant/10">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-8">
                <MapPin size={32} />
              </div>
              <h3 className="font-extrabold text-2xl text-tertiary mb-4">Modern Facility</h3>
              <p className="text-on-surface-variant leading-relaxed">Work in our state-of-the-art manufacturing and clinical facility in the heart of Owerri.</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm border border-outline-variant/10">
              <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center text-primary-container mx-auto mb-8">
                <User size={32} />
              </div>
              <h3 className="font-extrabold text-2xl text-tertiary mb-4">Inclusive Culture</h3>
              <p className="text-on-surface-variant leading-relaxed">Join a diverse team of experts committed to clinical excellence and mutual respect.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
