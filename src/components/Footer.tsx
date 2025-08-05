import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-red">Front Pace</h3>
            <p className="text-gray-300">
              Bringing stories to life through exceptional videography, photography, and audio production.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-brand-red" />
                <span>0795716772</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-brand-red" />
                <span>info@front-pace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-brand-red" />
                <span>Nairobi, Kenya</span>
              </div>
              <a
                href="https://wa.me/254795716772"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Talk to us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Videography</li>
              <li>Photography</li>
              <li>Audio Production</li>
              <li>Equipment Rental</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Front Pace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;