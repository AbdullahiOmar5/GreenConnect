import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Impact', href: '/impact' },
    { name: 'Insights', href: '/insights' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Digital Literacy Training', href: '#' },
    { name: 'Community Technology Solutions', href: '#' },
    { name: 'Agricultural Technology', href: '#' },
    { name: 'Mobile App Development', href: '#' },
    { name: 'Consulting Services', href: '#' },
    { name: 'Partnership Programs', href: '#' }
  ];

  const resources = [
    { name: 'Blog & Articles', href: '/insights' },
    { name: 'Case Studies', href: '#' },
    { name: 'Research Reports', href: '#' },
    { name: 'Community Guidelines', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // Route navigation - handled by Link component
      return;
    } else if (href.startsWith('/#')) {
      // Home page section navigation
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(href.replace('/#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/${href}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(href.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#2F5233] to-[#76B947] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white border-opacity-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              La Soco Maqaaladii Ugu Dambeeyay
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Hel maqaaladii ugu dambeeyay ee ku saabsan tiknoolajiyada beeraha iyo horumarinta bulshada oo laguugu soo dirayo sanduuqaaga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Geli cinwaankaaga email"
                className="flex-1 px-6 py-4 rounded-full text-[#2F5233] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-full sm:w-auto"
              />
              <button className="bg-white text-[#2F5233] px-8 py-4 rounded-full font-semibold hover:bg-[#B1D8B7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap">
                Rukumo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">GreenTech</span>
            </div>
            <p className="text-lg opacity-90 leading-relaxed mb-6">
              Kobcinta bulshadeenna iyada oo loo marayo tiknoolajiyada iyo abuurista xalal waara oo beddela nolosha bulshadeenna.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span className="opacity-90">hello@greentech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span className="opacity-90">+252 61 195-9704</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 opacity-80 mt-1" />
                <span className="opacity-90">Maka al Mukarama <br />Degmada Hodan, 124</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-xl font-bold mb-6">Guji Halkaan</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-xl font-bold mb-6">Adeegyadeena</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="text-xl font-bold mb-6">Ilaha</h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.href.startsWith('/') ? (
                    <Link
                      to={resource.href}
                      className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300"
                    >
                      {resource.name}
                    </Link>
                  ) : (
                    <a
                      href={resource.href}
                      className="opacity-90 hover:opacity-100 hover:text-[#B1D8B7] transition-all duration-300"
                    >
                      {resource.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <span>© {currentYear} GreenTech. Lala sameeyay</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>Bulshadeena oo dhan.</span>
            </div>
            <div className="flex gap-6 text-sm opacity-90">
              <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                Siyaasadda Asturnaanta
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                Sharciyada Adeegga
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                Siyaasadda Kukiyada
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;