import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
import { Hero } from '~/components/hero/Hero';
import { FeaturedProducts } from '~/components/sections/FeaturedProducts';
import { TrainingGuides } from '~/components/sections/TrainingGuides';
import { SupportAndDistribution } from '~/components/sections/SupportAndDistribution';

export async function loader({ request }: LoaderFunctionArgs) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {
  const { collections } = useLoaderData<typeof loader>();
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#000813]">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Collections Grid */}
      <section
        aria-labelledby="category-heading"
        className="py-24 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-4xl sm:text-5xl text-center font-light mb-16 text-white tracking-wider"
          >
            {t('common.shopByCategory')}
          </h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Guides */}
      <TrainingGuides />

      {/* Support and Distribution */}
      <SupportAndDistribution />
    </main>
  );
}
