import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, GraduationCap, Mountain, Sparkles, Users, Compass, Briefcase, HeartPulse } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home', icon: Compass },
  { name: 'Culture', href: '#culture', icon: Sparkles },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Environment', href: '#environment', icon: Mountain },
  { name: 'Economy', href: '#economy', icon: Briefcase },
  { name: 'Healthcare', href: '#healthcare', icon: HeartPulse },
  { name: 'References', href: '#references', icon: BookOpen },
  { name: 'About the Team', href: '#team', icon: Users },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'culture', 'education', 'environment', 'economy', 'healthcare', 'references', 'team'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white font-bold shadow-xs transition-transform group-hover:scale-105">
              <span className="text-base font-serif">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                Medellín Academic Portfolio
                <span className="hidden md:inline-block rounded bg-amber-100 text-amber-900 text-[10px] font-semibold px-1.5 py-0.5 border border-amber-200">
                  English Course
                </span>
              </span>
              <span className="text-[11px] text-stone-500 font-medium hidden sm:inline-block">
                Culture • Education • Environment • Economy • Healthcare
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/70 font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-emerald-700' : 'text-stone-400'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-stone-200 space-y-1 pb-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-700' : 'text-stone-500'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
