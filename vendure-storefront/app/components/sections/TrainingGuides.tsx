import { Link } from '@remix-run/react';
import { TronButton } from '~/components/ui/tron-button';

interface Guide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'Diving Techniques',
    description: 'Master the art of diving with our comprehensive guide covering proper form, timing, and recovery.',
    image: '/images/guides/diving.jpg',
    link: '/guides/diving-techniques'
  },
  {
    title: 'Positioning & Angles',
    description: 'Learn how to position yourself effectively and understand shot angles to improve your save percentage.',
    image: '/images/guides/positioning.jpg',
    link: '/guides/positioning'
  }
];

export function TrainingGuides() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#000813] to-[#001324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl text-center font-light mb-16 text-white tracking-wider">
          Training Guides
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {guides.map((guide) => (
            <div 
              key={guide.title}
              className="group relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm border border-[#00c3ff]/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-[#00c3ff] text-3xl font-light mb-4">{guide.title}</h3>
                <p className="text-gray-300 mb-8 text-lg">{guide.description}</p>
                
                <TronButton
                  asChild
                  className="bg-[#00c3ff] hover:bg-[#00c3ff]/90 text-white shadow-[0_0_20px_rgba(0,195,255,0.3)]"
                >
                  <Link to={guide.link}>Read Guide</Link>
                </TronButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 