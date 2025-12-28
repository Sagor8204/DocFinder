import HeroCareerSection from '@/components/career/HeroCareerSection';
import LocationsGrid from '@/components/career/LocationsGrid';
import CultureGallery from '@/components/career/CultureGallery';
import ValuesAndPerksSection from '@/components/career/ValuesAndPerksSection';
import GameCtaSection from '@/components/career/GameCtaSection';
import OpenPositionsSection from '@/components/career/OpenPositionsSection';

export default function CareerPage() {
  return (
    <main>
      <HeroCareerSection />
      <LocationsGrid />
      <CultureGallery />
      <ValuesAndPerksSection />
      <GameCtaSection />
      <OpenPositionsSection />
    </main>
  );
}