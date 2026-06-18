import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { TrendingSection } from '@/components/sections/trending-section';
import { SearchSection } from '@/components/sections/search-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { FeaturedToolsSection } from '@/components/sections/featured-tools-section';
import { RecentlyAddedSection } from '@/components/sections/recently-added-section';
import { WhyDocHiveSection } from '@/components/sections/why-dochive-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { StatisticsSection } from '@/components/sections/statistics-section';
import { UpcomingToolsSection } from '@/components/sections/upcoming-tools-section';
import { FAQSection } from '@/components/sections/faq-section';
import { FinalCTASection } from '@/components/sections/final-cta-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <SearchSection />
      <CategoriesSection />
      <FeaturedToolsSection />
      <RecentlyAddedSection />
      <WhyDocHiveSection />
      <HowItWorksSection />
      <StatisticsSection />
      <UpcomingToolsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
