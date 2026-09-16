import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CultureSection } from './components/CultureSection';
import { EducationSection } from './components/EducationSection';
import { EnvironmentSection } from './components/EnvironmentSection';
import { EconomySection } from './components/EconomySection';
import { HealthcareSection } from './components/HealthcareSection';
import { ReferencesSection } from './components/ReferencesSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { FloatingBackToTop } from './components/FloatingBackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 text-stone-800">
      {/* Top Persistent Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Home & Overview */}
        <HeroSection />

        {/* Section 1 — Culture in Medellín (David Garcia) */}
        <CultureSection />

        {/* Section 2 — Education in Medellín (Yesica Lopez) */}
        <EducationSection />

        {/* Section 3 — Environment: Medellín (Angie Villarreal) */}
        <EnvironmentSection />

        {/* Section 4 — Economy in Medellín (Catalina Portillo) */}
        <EconomySection />

        {/* Section 5 — Healthcare in Medellín (Natalia Ayala) */}
        <HealthcareSection />

        {/* Section 6 — Bibliographic References */}
        <ReferencesSection />

        {/* Section 7 — About the Team */}
        <TeamSection />
      </main>

      {/* Footer & Final Synthesis */}
      <Footer />

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />
    </div>
  );
}
