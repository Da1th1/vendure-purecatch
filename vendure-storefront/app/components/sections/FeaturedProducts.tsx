import { Link } from '@remix-run/react';
import { TronButton } from '~/components/ui/tron-button';

interface FeaturedCategory {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const categories: FeaturedCategory[] = [
  {
    title: 'Professional Series',
    subtitle: 'Professional Goalkeeper Gloves',
    description: 'Premium gloves designed for professional performance',
    image: '/images/categories/pro-gloves.jpg',
    link: '/collections/'
  },
  {
    title: 'Youth Series',
    subtitle: 'Youth Goalkeeper Gloves',
    description: 'Durable gloves perfect for daily training sessions',
    image: '/images/categories/youth-gloves.jpg',
    link: '/collections/youth'
  },
  {
    title: 'Player Accessories',
    subtitle: 'Essential Equipment',
    description: 'All the gear you need to be the best keeper you can be',
    image: '/images/categories/accessories.jpg',
    link: '/collections/accessories'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#000813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl text-center font-light mb-16 text-white tracking-wider">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.title}
              className="group relative overflow-hidden rounded-lg bg-[#001324] p-6 transition-transform hover:scale-105"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-[#00c3ff] text-xl mb-2">{category.subtitle}</h3>
              <h4 className="text-white text-2xl font-light mb-4">{category.title}</h4>
              <p className="text-gray-400 mb-6">{category.description}</p>
              
              <TronButton
                asChild
                variant="outline"
                className="w-full border-[#00c3ff] text-[#00c3ff] hover:bg-[#00c3ff]/10"
              >
                <Link to={category.link}>View Collection</Link>
              </TronButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 