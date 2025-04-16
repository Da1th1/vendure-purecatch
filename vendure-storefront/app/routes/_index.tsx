import { Link } from '@remix-run/react';
import { TronButton } from '~/components/ui/tron-button';
import { TronCard } from '~/components/ui/tron-card';
import { Hero } from '~/components/hero/Hero';
import { FeaturedProducts } from '~/components/sections/FeaturedProducts';
import { TrainingGuides } from '~/components/sections/TrainingGuides';
import { SupportAndDistribution } from '~/components/sections/SupportAndDistribution';

export default function Index() {
  return (
    <main className="min-h-screen bg-[#000813]">
      <Hero />
      <FeaturedProducts />
      <TrainingGuides />
      <SupportAndDistribution />
    </main>
  );
} 