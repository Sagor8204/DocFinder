import HeroSection from '@/components/home/HeroSection';
import BenefitsGrid from '@/components/home/BenefitsGrid';
import GlobalPresenceSection from '@/components/home/GlobalPresenceSection';
import StatsSection from '@/components/home/StatsSection';
import LocalPresenceGrid from '@/components/home/LocalPresenceGrid';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <main className='max-w-253.75 mx-auto px-5'>
      <HeroSection />
      <BenefitsGrid />
      <GlobalPresenceSection />
      <StatsSection />
      <LocalPresenceGrid />
      <CtaSection />
    </main>
  );
}

