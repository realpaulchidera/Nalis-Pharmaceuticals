import { Share2, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-16 px-8 border-t border-outline-variant/15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          <div className="font-manrope font-bold text-lg text-tertiary mb-4">Nalis Pharmaceuticals</div>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
            Clinical Excellence in Owerri. Providing trusted healthcare solutions since 1998.
          </p>
          <div className="flex gap-4 text-outline hover:text-primary transition-colors">
            <Share2 size={20} className="cursor-pointer" />
            <MapPin size={20} className="cursor-pointer" />
            <Mail size={20} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-tertiary mb-6 font-manrope uppercase text-xs tracking-widest">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Products</Link></li>
            <li><Link to="/about" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">About Us</Link></li>
            <li><Link to="/contact" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Contact</Link></li>
            <li><Link to="/careers" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-tertiary mb-6 font-manrope uppercase text-xs tracking-widest">Compliance</h4>
          <ul className="space-y-3">
            <li><Link to="#" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Privacy Policy</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Terms of Service</Link></li>
            <li><Link to="#" className="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 text-sm transition-all">Local Distribution</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-tertiary mb-6 font-manrope uppercase text-xs tracking-widest">Headquarters</h4>
          <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
            Plot 12, Ikenegbu Layout,<br />
            Owerri, Imo State,<br />
            Nigeria.
          </p>
          <p className="text-primary font-bold text-sm">+234 (0) 803 123 4567</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-on-surface-variant text-xs font-public-sans">
          © 2024 Nalis Pharmaceuticals. Clinical Excellence in Owerri.
        </p>
      </div>
    </footer>
  );
}
